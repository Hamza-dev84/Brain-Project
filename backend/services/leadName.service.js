// Builds the Oracle lead name prefix from the short-code tables:
//   <DEPARTMENT>-<PRODUCT>-<CHANNEL>[-<AREA>]
// Oracle appends "-<lead number>" itself.
// Anything that can't be resolved becomes "XXXX" (and is logged) so a lead is never blocked.
const { LeadDepartment, LeadProduct, LeadChannel, LeadArea } = require('../models/LeadNameCodes');

const UNKNOWN = 'XXXX';
const CACHE_MS = Number(process.env.LEAD_CODES_CACHE_MS || 10 * 60 * 1000);

const norm = (v) => (v == null ? '' : String(v)).trim().toLowerCase().replace(/\s+/g, ' ');
const splitAliases = (v) => (v ? String(v).split('|').map(norm).filter(Boolean) : []);

let cache = null; // { expires, departmentsById, departmentsByCode, products, channels, areas }

async function loadCodes() {
  if (cache && cache.expires > Date.now()) return cache;

  const [departments, products, channels, areas] = await Promise.all([
    LeadDepartment.findAll({ where: { active: true }, raw: true }),
    LeadProduct.findAll({ where: { active: true }, raw: true }),
    LeadChannel.findAll({ where: { active: true }, raw: true }),
    LeadArea.findAll({ where: { active: true }, raw: true }),
  ]);

  cache = {
    expires: Date.now() + CACHE_MS,
    departmentsById: new Map(departments.map((d) => [d.id, d])),
    departmentsByCode: new Map(departments.map((d) => [norm(d.code), d])),
    products: products.map((p) => ({ ...p, keys: splitAliases(p.aliases) })),
    channels: channels.map((c) => ({ ...c, keys: [norm(c.name), norm(c.code), ...splitAliases(c.aliases)] })),
    areas: areas.map((a) => ({ ...a, keys: [norm(a.name), ...splitAliases(a.aliases)] })),
  };
  return cache;
}

/** Clear the in-memory cache (e.g. after editing the code tables). */
exports.clearCache = () => { cache = null; };

/**
 * @param {object} opts
 * @param {string}  opts.productKey              website product key, e.g. "brainnet:home", "brainsoft:ERP Solutions"
 * @param {string}  [opts.fallbackDepartmentCode] department to use when productKey isn't mapped (e.g. "BS")
 * @param {string}  [opts.hearAbout]              "How did you hear about us?" value/label from the form
 * @param {boolean} [opts.includeArea]            true for location-based leads (internet); false for BrainSoft
 * @param {string}  [opts.areaName]               area selected on the website
 * @returns {Promise<{ prefix: string, parts: object, missing: string[] }>}
 */
exports.buildLeadNamePrefix = async ({ productKey, fallbackDepartmentCode, hearAbout, includeArea = false, areaName }) => {
  const missing = [];
  let codes;
  try {
    codes = await loadCodes();
  } catch (err) {
    console.error('[LeadName] could not load code tables:', err.message || err.code || err);
    return { prefix: '', parts: {}, missing: ['tables'] };
  }

  // Product (and its department)
  const pKey = norm(productKey);
  const product = pKey ? codes.products.find((p) => p.keys.includes(pKey)) : null;
  let department = product ? codes.departmentsById.get(product.departmentId) : null;
  if (!department && fallbackDepartmentCode) department = codes.departmentsByCode.get(norm(fallbackDepartmentCode));
  if (!product) missing.push(`product "${productKey}"`);
  if (!department) missing.push('department');

  // Channel: match the "how did you hear" value, else the default channel
  const h = norm(hearAbout);
  let channel = h ? codes.channels.find((c) => c.keys.includes(h)) : null;
  if (!channel) channel = codes.channels.find((c) => c.isDefault) || null;
  if (!channel) missing.push('channel');

  // Area (location-based leads only)
  let area = null;
  if (includeArea) {
    const a = norm(areaName);
    area = a ? codes.areas.find((x) => x.keys.includes(a)) : null;
    if (!area) missing.push(`area "${areaName || ''}"`);
  }

  const parts = {
    department: department ? department.code : UNKNOWN,
    product: product ? product.code : UNKNOWN,
    channel: channel ? channel.code : UNKNOWN,
    ...(includeArea ? { area: area ? area.code : UNKNOWN } : {}),
  };

  const prefix = Object.values(parts).join('-');
  if (missing.length) console.warn(`[LeadName] ${prefix} — no code for: ${missing.join(', ')}`);
  return { prefix, parts, missing };
};
