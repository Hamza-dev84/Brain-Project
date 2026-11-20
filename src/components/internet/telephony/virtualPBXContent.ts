export const virtualPBXTerms = { currency: "PKR", quoteWithinHours: 24, portingRequiresCarrierSupport: true, portingRequiresNumberTypeCheck: true, analogPhonesRequireAdapter: true, bandwidthKbpsEachWay: 90, codec: "G.711", bandwidthIsApproximate: true, forwardedCallsBilledAsOutbound: true };
export const virtualPBXPlans = [
  { name: "Starter", monthlyPerUser: null, setup: null, monthly: "From PKR — quoted per user", oneTime: "From PKR — quoted", bestFor: "Small teams, one main number" },
  { name: "Business", monthlyPerUser: null, setup: null, monthly: "Quoted per user", oneTime: "Quoted", bestFor: "Branches, IVR, recording, queues" },
  { name: "Call center", monthlyPerUser: null, setup: null, monthly: "Quoted on agents and channels", oneTime: "Project quote", bestFor: "Queues, analytics, CRM integration" },
];
export const virtualPBXFaqs = [
  { question: "What is a virtual PBX?", answer: "A business phone system hosted by a provider, with extensions, IVR, queues and recording. No PBX hardware needed." },
  { question: "How much does a virtual PBX cost in Pakistan?", answer: `A monthly fee per user in ${virtualPBXTerms.currency}, plus a one-time setup fee. We quote within ${virtualPBXTerms.quoteWithinHours} hours.` },
  { question: "Is a virtual PBX the same as a cloud PBX or hosted PBX?", answer: "Mostly. The three names are used interchangeably for a PBX that runs in the provider's data center." },
  { question: "What is the difference between virtual PBX and IP PBX?", answer: "A virtual PBX runs at the provider; an IP PBX runs on a server in your office. Virtual is cheaper to start; the IP PBX gives more local control." },
  { question: "Does it work during load shedding or an internet outage?", answer: "The PBX stays online in our data center. Set failover forwarding to mobiles, use the mobile apps, and keep a backup connection and UPS so your team stays reachable." },
  { question: "Can I use my existing phone?", answer: "Yes, if it is a SIP phone. Analog phones need an adapter. Otherwise we supply desk phones or you use the apps." },
  { question: "Can I add a menu in Urdu and English?", answer: "Yes. We script and record IVR prompts in both languages." },
  { question: "Can I keep my current numbers?", answer: "Sometimes. It depends on the number type and your current carrier. We confirm this at the quote stage." },
];