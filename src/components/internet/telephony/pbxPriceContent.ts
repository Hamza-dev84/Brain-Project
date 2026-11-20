export const pbxPriceTerms = {
  currency: "PKR", quoteWithinHours: 24, comparisonMonths: 36,
  listingDate: "22 Oct 2026", concurrencyPercent: "10–20%", concurrencyIsApproximate: true,
  listingsAreBrainNETPrices: false, virtualHardwareCost: 0,
};
export const threeYearCost = (upfront: number, monthly: number) => upfront + pbxPriceTerms.comparisonMonths * monthly;
export const pbxPriceListings = [
  { team: "Up to 20", model: "Yeastar P520", users: "20", calls: "10", price: 104800 },
  { team: "Up to 50", model: "Yeastar P550", users: "50", calls: "25", price: 233800 },
  { team: "Up to 100+", model: "Yeastar P560", users: "100 (up to 200)", calls: "30 (up to 60)", price: 334100 },
  { team: "Larger or multi-site", model: "Grandstream UCM6308A", users: "Up to 1,500", calls: "200", price: 280600 },
];
export const pbxPriceCostItems = [
  ["PBX system", "One-time", "Appliance or server, base licences"],
  ["Phones", "One-time", "Desk phones or softphone licences"],
  ["Network", "One-time", "PoE switch, cabling, router with voice priority"],
  ["Lines", "Monthly", "SIP trunk channels or analog lines, plus call charges"],
  ["Installation", "One-time", "Configuration, IVR, extensions, testing, training"],
  ["Power backup", "One-time", "UPS or batteries for the PBX and switch"],
  ["Support", "Monthly or yearly", "Remote support, updates, fault repair, warranty"],
  ["Taxes", "On invoices", "Check whether quotes include them"],
];
export const pbxPriceTypes = [
  ["Traditional PBX", "Hardware, extension cards, line rental", "High upfront, ongoing maintenance", "Legacy sites"],
  ["IP PBX", "Appliance or server, setup, support", "Upfront, then low monthly", "Offices and call centres wanting control"],
  ["Virtual PBX", "Per user per month, plus setup", "Low upfront, steady monthly", "SMEs, branches, remote teams"],
];
export const pbxPriceChecks = [
  ["Users and concurrent calls", "Capacity decides the model and licences"],
  ["Phones included?", "Desk phones can cost as much as the PBX"],
  ["Lines included?", "SIP trunk or analog lines are often a separate monthly fee"],
  ["Installation and training", "Some quotes list the box only"],
  ["Warranty and support", "One-year warranty vs a support plan with response times"],
  ["Expansion", "Spare ports or licences cost more now, less later"],
  ["Taxes", "Quotes may or may not include them"],
];
export const pbxPriceFaqs = [
  { question: "How much does a PBX cost in Pakistan?", answer: "An IP PBX appliance lists from about Rs. 105,000 for 20 users to over Rs. 334,000 for 100 users (22 Oct 2026), before phones, lines and installation. Virtual PBX is billed per user per month." },
  { question: "What is the price of a small-office PBX?", answer: "For up to 20 users, the box starts near Rs. 105,000. Add phones, lines and setup for the full cost; we quote it in PKR." },
  { question: "Is a virtual PBX cheaper than an IP PBX?", answer: "It is cheaper to start, with no hardware. Over several years the answer depends on headcount, so compare the three-year cost." },
  { question: "What is included in the PBX price?", answer: "Only what the quote lists. Check phones, lines, installation, training, warranty and taxes." },
  { question: "Do I pay monthly for an IP PBX?", answer: "Usually for lines and support, not for the PBX itself. Some features may carry licence fees." },
  { question: "How is PABX price different from IP PBX price?", answer: "PABX is the older name for a PBX. Traditional PABX usually costs more to expand; IP PBX uses your network and licences instead of extension cards." },
  { question: "Can I get a PBX without buying phones?", answer: "Yes. Softphone apps run on PCs and mobiles, so you can skip desk phones for some staff." },
  { question: "How do I get an exact price?", answer: "Send your headcount and call volume. We reply with a written, itemised PKR quote within 24 hours." },
];