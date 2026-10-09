export const SITE = "https://brainnet.com.pk";
export const WHATSAPP = "https://api.whatsapp.com/send/?phone=923276222888";

export interface TelephonyLink {
  path: string;
  label: string;
  blurb: string;
}

/** Single source of truth for the Corporate Telephony cluster. */
export const telephonyLinks: TelephonyLink[] = [
  {
    path: "/services/internet/voip-providers-pakistan",
    label: "VoIP Services",
    blurb: "The full picture — business VoIP, cloud voice and everything below in one service.",
  },
  {
    path: "/services/internet/sip-trunk-providers-pakistan",
    label: "SIP Trunk",
    blurb: "Licensed SIP channels that replace your PRI/E1 lines and plug into any IP PBX.",
  },
  {
    path: "/services/internet/ivr-services-pakistan",
    label: "IVR Services",
    blurb: "Auto attendant, Urdu & English prompts, queues and skills-based call routing.",
  },
  {
    path: "/services/internet/ip-pbx-pakistan",
    label: "IP PBX",
    blurb: "On-premise phone systems — hardware, licensing, installation and maintenance.",
  },
  {
    path: "/services/internet/virtual-pbx-pakistan",
    label: "Virtual PBX",
    blurb: "A cloud phone system with no hardware, billed per extension and scaled instantly.",
  },
  {
    path: "/services/internet/pbx-price-in-pakistan",
    label: "PBX Price & Systems",
    blurb: "What a PBX or PABX system actually costs in Pakistan, and what drives the price.",
  },
];

export const internetLinks: TelephonyLink[] = [
  {
    path: "/services/internet/business-internet",
    label: "Dedicated Internet",
    blurb: "Uncontended 1:1 fiber with a written 99.9% uptime SLA.",
  },
];
