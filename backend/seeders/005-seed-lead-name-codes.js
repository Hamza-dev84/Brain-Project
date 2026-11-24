'use strict';

// Source: "Brain Product Codes NEW.xlsx" (departments, products, channels)
//         "Leads Name Creation in Oracle.pdf" (sample area codes)
// Website aliases are separated by "|".

const DEPARTMENTS = [
  { name: 'BrainMARKETING', code: 'BM' },
  { name: 'BrainNET Fiber', code: 'BF' },
  { name: 'BrainCLOUD', code: 'BCL' },
  { name: 'BSMS', code: 'BSMS' },
  { name: 'BrainSOFT', code: 'BS' },
  { name: 'BrainVOICE', code: 'BV' },
];

// [departmentCode, product name, product code, website aliases]
const PRODUCTS = [
  ['BCL', 'Colocation Services', 'COLO', null],
  ['BCL', 'Email marketing', 'EM', null],
  ['BCL', 'Email Hosting', 'EH', null],
  ['BCL', 'Email Registration', 'ER', null],
  ['BCL', 'Domain Registration', 'DR', null],
  ['BCL', 'Web Hosting', 'WH', null],
  ['BCL', 'VPS Hosting', 'VPS', null],
  ['BCL', 'Dedicated Hosting', 'DH', null],
  ['BCL', 'Cloud Services', 'CS', null],
  ['BCL', 'Reseller Hosting', 'RH', null],
  ['BCL', 'Data Center Solutions', 'DCS', null],
  ['BCL', 'Managed Cloud Services', 'MCS', null],

  ['BS', 'ERP solutions', 'ERP', 'brainsoft:ERP Solutions'],
  ['BS', 'Web Development', 'WD', 'brainsoft:Web Development|brainsoft:Web Design'],
  ['BS', 'App Development', 'AD', 'brainsoft:Mobile App Development'],
  ['BS', 'Cybersecurity Services', 'CYB', null],

  ['BSMS', 'Promotional SMS', 'PSMS', null],
  ['BSMS', 'Transactional SMS', 'TSMS', null],

  ['BF', 'Residential Fiber Internet', 'RFI', 'brainnet:home'],
  ['BF', 'Corporate Fiber Internet', 'CFI', 'brainnet:business'],

  ['BV', 'Virtual PBX', 'VPBX', null],
  ['BV', 'SIP Trunk', 'SIP', null],
  ['BV', 'IVR', 'IVR', null],
  ['BV', 'VoIP', 'VOIP', null],
  ['BV', 'IP PBX', 'IPBX', null],
  ['BV', 'Robocall', 'ROBO', null],

  ['BM', 'Graphic Design', 'GD', null],
  ['BM', 'SEO', 'SEO', 'brainsoft:SEO Services'],
  ['BM', 'Social Media Marketing', 'SMM', 'brainsoft:Digital Marketing'],
];

// [name, code, website aliases, isDefault]
const CHANNELS = [
  ['Web Search (Google, Bing, Etc.)', 'SERP', 'Google Search|Web Search|Web Search (Google, Bing, etc.)', true],
  ['Social Media/Online Ads', 'SM/SMP', 'Social Media|LinkedIn|Facebook / Instagram|Facebook|Instagram', false],
  ['AI Search (ChatGPT, etc)', 'AI', 'AI Search|AI Search (ChatGPT, Gemini, Etc.)|ChatGPT', false],
  ['Email Marketing/SMS Marketing', 'EM', 'Email|SMS|Email Marketing|SMS Marketing', false],
  ['Outdoor Ads (BillBoard, etc)', 'DISP', 'Brochure, Flyer, Banner|Billboard|Outdoor Ads', false],
  ['Outbound (DDS, Cold Call, etc.)', 'OB', 'Salesperson|Cold Call|Outbound', false],
  ['Referral/word of mouth', 'REF', 'Referral|Word of mouth', false],
];

// [name, code, zone]
const AREAS = [
  ['Allama Iqbal Town', 'A145', null],
  ['Wapda Town', 'A221', null],
  ['Hussain Park', 'A040', 'Shalamar Zone'],
  ['Makhan Pura', 'A041', 'Shalamar Zone'],
  ['Nishtar Colony', 'A065', 'Aziz Bhatti Zone'],
  ['Fatehgarh', 'A066', 'Aziz Bhatti Zone'],
];

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert(
      'lead_departments',
      DEPARTMENTS.map((d) => ({ ...d, active: true, createdAt: now, updatedAt: now }))
    );

    const [deps] = await queryInterface.sequelize.query('SELECT id, code FROM lead_departments');
    const depId = Object.fromEntries(deps.map((d) => [d.code, d.id]));

    await queryInterface.bulkInsert(
      'lead_products',
      PRODUCTS.map(([dep, name, code, aliases]) => {
        if (!depId[dep]) throw new Error(`Unknown department code ${dep}`);
        return { departmentId: depId[dep], name, code, aliases, active: true, createdAt: now, updatedAt: now };
      })
    );

    await queryInterface.bulkInsert(
      'lead_channels',
      CHANNELS.map(([name, code, aliases, isDefault]) => ({
        name, code, aliases, isDefault, active: true, createdAt: now, updatedAt: now,
      }))
    );

    await queryInterface.bulkInsert(
      'lead_areas',
      AREAS.map(([name, code, zone]) => ({ name, code, zone, aliases: null, active: true, createdAt: now, updatedAt: now }))
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('lead_areas', null, {});
    await queryInterface.bulkDelete('lead_channels', null, {});
    await queryInterface.bulkDelete('lead_products', null, {});
    await queryInterface.bulkDelete('lead_departments', null, {});
  },
};
