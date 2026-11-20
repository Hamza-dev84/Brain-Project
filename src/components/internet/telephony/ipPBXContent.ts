export const ipPBXTerms = {
  currency: "PKR",
  quoteWithinHours: 24,
  bandwidthKbpsEachWay: 90,
  codec: "G.711",
  bandwidthIsApproximate: true,
  concurrencyRuleOfThumbPercent: "15–30%",
  concurrencyIsApproximate: true,
  callCentersPlanFor: "nearly all agents on calls",
  pricesExcludeSipTrunkAndCalls: true,
};

// Starting prices were left blank in the supplied content and must stay quoted, never invented.
export const ipPBXStartingPrices = [
  { setup: "Small office, 5 to 20 users", pricing: "From PKR (quoted)", amountPkr: null },
  { setup: "Mid-size office, 20 to 100 users", pricing: "From PKR (quoted)", amountPkr: null },
  { setup: "Call centre or multi-site, 100+ users", pricing: "Quoted on request", amountPkr: null },
];

// Support items were left blank in the supplied content; terms are agreed per customer, not invented.
export const ipPBXSupportTerms = [
  { item: "Response time", detail: "First-response time agreed in your SLA" },
  { item: "Support type", detail: "Remote, on-site or both — agreed per site" },
  { item: "Warranty", detail: "Hardware warranty period agreed in your quote" },
  { item: "Updates", detail: "Firmware and security update handling set out in your support plan" },
];

// PTA source link and BrainNET licence details were not supplied; they stay "available on request".
export const ipPBXLegality = {
  ptaSourceSupplied: false,
  licenceSupplied: false,
};

export const ipPBXFaqs = [
  { question: "What is an IP PBX?", answer: "A phone system that uses your network to make calls over IP. It manages extensions, IVR, queues and recordings." },
  { question: "How much does an IP PBX cost in Pakistan?", answer: "We price the system, installation and support based on your needs, and small-office starting prices are quoted. We send a free written PKR quote within 24 hours." },
  { question: "What is the difference between IP PBX and virtual PBX?", answer: "You run an IP PBX on your premises and own it; the provider hosts a virtual PBX and bills you per user." },
  { question: "How many extensions do I need?", answer: "One per person or desk, plus a few spares. Concurrent calls matter more for sizing: plan for 15 to 30% of users on a call at once." },
  { question: "Can I keep my existing phone numbers and lines?", answer: "Yes for existing analog lines, if the PBX has the right ports or a gateway. Moving numbers to a SIP Trunk depends on the number type and carrier." },
  { question: "Does an IP PBX work with Urdu and English IVR?", answer: "Yes. We script and record both and load them onto the system." },
  { question: "Can I add more users later?", answer: "Yes, within the model's capacity, by adding licences or expansion modules. We size with room to grow." },
  { question: "Do you install and support the system?", answer: "Yes. We supply, install, configure and support it, so one team is your first point of contact if something fails." },
];
