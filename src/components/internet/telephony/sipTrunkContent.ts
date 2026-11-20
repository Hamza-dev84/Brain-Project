export const sipTrunkTerms = {
  currency: "PKR",
  quoteWithinHours: 24,
  bandwidthKbpsPerCall: 100,
  bandwidthIsApproximate: true,
  headroomPercent: "10–20%",
  headroomIsApproximate: true,
};

export const sipTrunkPricingModels = [
  ["Per channel", "Monthly fee per channel, plus call charges by destination", "Steady call volume, call centres"],
  ["Metered or bundle", "A pool of minutes with fewer fixed charges", "Small offices with light calling"],
];

export const sipTrunkPlans = [
  ["Starter (2–5 channels)", "Quoted per channel", "Setup quoted", "DID, local and mobile calling"],
  ["Business (8–25 channels)", "Quoted on channels", "Setup quoted", "DID/DOD, international routes, failover options"],
  ["Contact centre", "Quoted on volume", "Project quote", "High channel count, reporting"],
];

export const sipTrunkPriceMovers = [
  "Channels",
  "Monthly minutes",
  "Destinations (local, mobile, international)",
  "Number of DIDs",
  "Number of ports",
  "Redundancy",
];

export const sipTrunkChannelSizing = [
  ["Small office, 5–20 staff", "2–5 channels", "Add one per busy desk role"],
  ["Mid-size office, 20–100 staff", "8–25 channels", "Check reception and sales peaks"],
  ["Call centre", "One channel per agent on a call, plus queue headroom", "Outbound dialing needs more"],
  ["Multi-branch company", "Per site, or a shared pool", "Pooling saves channels"],
];

export const sipTrunkProviderChecklist = [
  ["Proof of PTA licence or licensed carrier", "Legal routing; the tender demanded licence certificates", "A named licence or upstream carrier in writing"],
  ["Channels per site and how to add more", "Busy tones cost sales", "Clear channel counts and an upgrade path"],
  ["DID and DOD numbers, and porting", "Keep your existing numbers", "Porting plan and parallel running period"],
  ["Redundancy", "One failure should not stop calls", "Redundant links or failover routing described in the contract"],
  ["Pre-test and acceptance", "Catch faults before go-live", "Circuit test and sign-off before cut-over"],
  ["All-in PKR pricing", "Hidden fees break budgets", "Itemised rates for calls, numbers, channels and taxes"],
  ["Support and SLA", "Voice faults are urgent", "Named support hours and response times"],
];

export const sipTrunkFaqs = [
  { question: "What is a SIP trunk?", answer: "A virtual phone line that carries your business calls over the internet to your PBX." },
  { question: "How much does a SIP trunk cost in Pakistan?", answer: "A monthly fee per channel (or a minute bundle) plus call charges. We quote in PKR within 24 hours." },
  { question: "What is the difference between SIP trunk and PRI?", answer: "PRI is a fixed digital circuit, usually 30 channels. SIP trunk runs over IP, and channels can be added or removed." },
  { question: "How many channels do I need?", answer: "One per simultaneous call. Count peak concurrent calls and add 10–20% headroom." },
  { question: "Can I keep my existing phone numbers?", answer: "Often yes, through number porting where your current carrier supports it. We run old and new lines in parallel." },
  { question: "Do I need a new PBX?", answer: "Not if your PBX supports SIP. Otherwise, we supply an IP PBX or Virtual PBX, or a gateway." },
  { question: "Is a SIP trunk legal in Pakistan?", answer: "Yes, through licensed providers. Ask for the licence or carrier name before you sign." },
  { question: "What happens if the internet goes down?", answer: "Calls on the trunk stop unless you have failover. We recommend a backup route, such as forwarding to mobile numbers or a second connection." },
];
