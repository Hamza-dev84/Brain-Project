// Oracle EBS Integrated SOA Gateway (ISG) client for the custom web_lead REST service.
//   - getLeadSources()      -> web_lead/get_lead_sources
//   - getProductCatalog()   -> web_lead/get_product_catalog
//   - createWebLead()       -> web_lead/create_web_lead
// All settings come from backend/.env (EBS_* keys).
const http = require('http');
const https = require('https');

const env = (key, fallback = '') => (process.env[key] ?? fallback).toString().trim();

const BASE_URL = () =>
  env('EBS_BASE_URL', 'http://oraebs.brain.net.pk:8000/webservices/rest/web_lead').replace(/\/+$/, '');

// ---------------------------------------------------------------------------
// Credentials. Business leads authenticate as EBS_BUSINESS_USERNAME / EBS_BUSINESS_PASSWORD;
// everything else (responsibility, org, URLs, defaults) is the same for all leads.
// ---------------------------------------------------------------------------
function credentials(profile = 'default') {
  if (profile === 'business') {
    if (env('EBS_BUSINESS_USERNAME') && env('EBS_BUSINESS_PASSWORD')) {
      return { profile, username: env('EBS_BUSINESS_USERNAME'), password: env('EBS_BUSINESS_PASSWORD') };
    }
    console.warn('[EBS] EBS_BUSINESS_USERNAME / EBS_BUSINESS_PASSWORD not set - using the default EBS user for this business lead');
  }
  return { profile: 'default', username: env('EBS_USERNAME'), password: env('EBS_PASSWORD') };
}

const restHeader = () => ({
  '@xmlns': 'http://xmlns.oracle.com/apps/fnd/rest/header',
  Responsibility: env('EBS_RESPONSIBILITY', 'BT_AST_TELEAGENT'),
  RespApplication: env('EBS_RESP_APPLICATION', 'AST'),
  SecurityGroup: env('EBS_SECURITY_GROUP', 'STANDARD'),
  NLSLanguage: env('EBS_NLS_LANGUAGE', 'AMERICAN'),
  Org_Id: env('EBS_ORG_ID', '109'),
});

// ISG converts PL/SQL tables to JSON; a single row can arrive as an object instead of an array.
const toArray = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
const cut = (v, max) => (v == null ? '' : String(v)).slice(0, max);

/**
 * Low-level call to one ISG operation.
 * @param {string} operation  e.g. 'get_lead_sources'
 * @param {object} inputParameters
 * @param {string} [urlOverride]
 * @param {'default'|'business'} [profileName]  which EBS user to authenticate with
 * @returns {Promise<{ success: boolean, status?: number, output?: object, data?: any, error?: string }>}
 */
function callIsg(operation, inputParameters, urlOverride, profileName = 'default') {
  const { profile, username, password } = credentials(profileName);
  if (!username || !password) {
    return Promise.resolve({ success: false, error: `EBS credentials not set for profile "${profile}"` });
  }

  const rootKey = `${operation.toUpperCase()}_Input`;
  const body = JSON.stringify({
    [rootKey]: {
      '@xmlns': `http://xmlns.oracle.com/apps/as/rest/web_lead/${operation}/`,
      RESTHeader: restHeader(),
      InputParameters: inputParameters,
    },
  });

  let target;
  try {
    target = new URL(urlOverride || `${BASE_URL()}/${operation}/`);
  } catch (e) {
    return Promise.resolve({ success: false, error: `Invalid EBS URL: ${e.message}` });
  }

  return new Promise((resolve) => {
    const isHttps = target.protocol === 'https:';
    const transport = isHttps ? https : http;

    const req = transport.request(
      {
        hostname: target.hostname,
        port: target.port || (isHttps ? 443 : 80),
        path: target.pathname + target.search,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Content-Length': Buffer.byteLength(body),
          Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
        },
        // Set EBS_TLS_REJECT_UNAUTHORIZED=false only if the EBS cert is self-signed/internal.
        ...(isHttps && { rejectUnauthorized: env('EBS_TLS_REJECT_UNAUTHORIZED', 'true').toLowerCase() !== 'false' }),
        timeout: Number(env('EBS_TIMEOUT_MS', '30000')),
      },
      (res) => {
        let raw = '';
        res.on('data', (c) => (raw += c));
        res.on('end', () => {
          let data = raw;
          try { data = JSON.parse(raw); } catch (_) { /* keep raw text */ }

          if (res.statusCode < 200 || res.statusCode >= 300) {
            return resolve({ success: false, status: res.statusCode, data, error: `EBS HTTP ${res.statusCode}` });
          }

          const output = data && data.OutputParameters;
          if (!output) {
            return resolve({ success: false, status: res.statusCode, data, error: 'EBS response has no OutputParameters' });
          }
          if (output.X_RETURN_STATUS && output.X_RETURN_STATUS !== 'S') {
            return resolve({
              success: false,
              status: res.statusCode,
              output,
              data,
              error: `EBS returned ${output.X_RETURN_STATUS}: ${output.X_MSG_DATA || 'no message'}`,
            });
          }
          resolve({ success: true, status: res.statusCode, output, data });
        });
      }
    );

    req.on('timeout', () => req.destroy(new Error('EBS request timed out')));
    req.on('error', (err) => resolve({ success: false, error: err.message }));
    req.write(body);
    req.end();
  });
}

// ---------------------------------------------------------------------------
// Small in-memory cache for the dropdown lookups (they rarely change).
// Only successful results are cached, so an EBS outage is retried next request.
// ---------------------------------------------------------------------------
const cache = new Map();
const cacheTtlMs = () => Number(env('EBS_LOOKUP_CACHE_MS', String(10 * 60 * 1000)));

async function cached(key, loader) {
  const hit = cache.get(key);
  if (hit && hit.expires > Date.now()) return hit.value;
  const value = await loader();
  if (value.success) cache.set(key, { value, expires: Date.now() + cacheTtlMs() });
  return value;
}

/**
 * Lead sources ("How did you hear about us?").
 * @returns {Promise<{ success: boolean, items?: Array<{ value: string, label: string, type: string }>, error?: string }>}
 */
exports.getLeadSources = (search = '') =>
  cached(`sources:${search}`, async () => {
    const r = await callIsg('get_lead_sources', { P_SEARCH: cut(search, 100) });
    if (!r.success) return r;

    const items = toArray(r.output.X_SOURCE_TBL && r.output.X_SOURCE_TBL.X_SOURCE_TBL_ITEM)
      .filter((s) => s && s.SOURCE_CODE && (!s.STATUS || s.STATUS === 'ACTIVE'))
      .map((s) => ({
        value: String(s.SOURCE_CODE),
        label: String(s.SOURCE_NAME || s.SOURCE_CODE),
        type: String(s.SOURCE_TYPE_NAME || ''),
      }));

    return { success: true, items };
  });

/**
 * Packages from the EBS product catalog for one category.
 * @returns {Promise<{ success: boolean, items?: Array<{ value: string, label: string, categoryId: string, itemCode: string }>, error?: string }>}
 */
exports.getProductCatalog = (categoryName) =>
  cached(`catalog:${categoryName}`, async () => {
    const r = await callIsg('get_product_catalog', { P_CATEGORY_NAME: categoryName, P_INCLUDE_ITEMS: 'Y' });
    if (!r.success) return r;

    const items = toArray(r.output.X_PRODUCT_TBL && r.output.X_PRODUCT_TBL.X_PRODUCT_TBL_ITEM)
      .filter((p) => p && p.INVENTORY_ITEM_ID)
      .filter((p) => !p.ITEM_STATUS || p.ITEM_STATUS === 'Active')
      .filter((p) => !p.CUSTOMER_ORDER_FLAG || p.CUSTOMER_ORDER_FLAG === 'Y')
      .map((p) => ({
        value: String(p.INVENTORY_ITEM_ID),
        label: String(p.ITEM_DESCRIPTION || p.ITEM_CODE),
        categoryId: String(p.CATEGORY_ID || ''),
        itemCode: String(p.ITEM_CODE || ''),
      }));

    return { success: true, items };
  });

/**
 * Create a lead in Oracle EBS.
 * Any of categoryId / inventoryItemId / sourceCode / responseChannel not supplied
 * falls back to the EBS_LEAD_* / EBS_RESPONSE_CHANNEL defaults in .env.
 * @param {object} lead { name, companyName, phone, email, address1, city, country,
 *                        categoryId, inventoryItemId, sourceCode, responseChannel,
 *                        leadNamePrefix, description, note,
 *                        authProfile: 'default' | 'business' }
 */
exports.createWebLead = (lead) => {
  if (env('EBS_LEAD_ENABLED', 'false').toLowerCase() !== 'true') {
    return Promise.resolve({ success: false, error: 'EBS lead push disabled (EBS_LEAD_ENABLED != true)' });
  }

  return callIsg(
    'create_web_lead',
    {
      P_CUSTOMER_NAME: cut(lead.name, 360),
      P_COMPANY_NAME: cut(lead.companyName || lead.name, 360),
      P_PHONE: cut(lead.phone, 40),
      P_EMAIL: cut(lead.email, 240),
      P_ADDRESS1: cut(lead.address1, 240),
      P_CITY: cut(lead.city, 60),
      P_COUNTRY: cut(lead.country || 'PK', 2),
      P_CATEGORY_ID: String(lead.categoryId || env('EBS_LEAD_CATEGORY_ID')),
      P_INVENTORY_ITEM_ID: String(lead.inventoryItemId || env('EBS_LEAD_INVENTORY_ITEM_ID')),
      P_DESCRIPTION: cut(lead.description, 240),
      P_LEAD_NOTE: cut(lead.note, 2000),
      P_SOURCE_CODE: String(lead.sourceCode || env('EBS_LEAD_SOURCE_CODE')),
      P_RESPONSE_CHANNEL: String(lead.responseChannel || env('EBS_RESPONSE_CHANNEL')),
      // e.g. "BF-RFI-SERP-A145" — Oracle appends "-<lead number>"
      P_LEAD_NAME_PREFIX: cut(lead.leadNamePrefix, 100),
      P_COMMIT: 'T',
    },
    env('EBS_LEAD_URL') || undefined,
    lead.authProfile === 'business' ? 'business' : 'default'
  );
};
