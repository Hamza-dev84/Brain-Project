import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowRight, Check, Menu, ChevronRight, Building2 } from "lucide-react";
import {
  IconWhatsApp as MessageCircle,
  IconLocation as MapPin,
  IconPhone as Phone,
  IconMail as Mail,
  IconCloud as Cloud,
  IconServer as Server,
  IconStorage as HardDrive,
} from "@/components/cloud/icons";
import logoBlue from "@/assets/cloud/braincloud-logo-blue.png";
import logoWhite from "@/assets/cloud/braincloud-logo-white.png";
import { useContactDialog } from "@/components/cloud/site/contact-dialog";
import { AI_INFRA, AI_SOLUTIONS, AiRow } from "@/components/cloud/site/ai-shared";

export const CTA_HREF = "mailto:support@brain.net.pk";
export const WHATSAPP_HREF = "https://wa.me/923276222888";
export const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafbfc]";
export const FOCUS_RING_DARK =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

/* ============================================================
 * Canonical CTA classNames. Three button identities, used everywhere.
 * Never inline a primary green button — import these constants.
 * ============================================================ */
export const CTA_PRIMARY =
  "group inline-flex items-center justify-center gap-2 rounded-none bg-green px-8 py-[18px] text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1da82d] " +
  FOCUS_RING;
export const CTA_PRIMARY_DARK =
  "group inline-flex items-center justify-center gap-2 rounded-none bg-green px-8 py-[18px] text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1da82d] " +
  FOCUS_RING_DARK;
export const CTA_SECONDARY =
  "inline-flex items-center justify-center gap-2 rounded-none border-2 border-navy/15 bg-white px-7 py-[14px] text-sm font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white " +
  FOCUS_RING;
export const CTA_SECONDARY_DARK =
  "inline-flex items-center justify-center gap-2 rounded-none border-2 border-white/25 bg-transparent px-7 py-[14px] text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-navy " +
  FOCUS_RING_DARK;
export const NAV_GHOST =
  "rounded-full px-4 py-2 text-sm font-bold text-navy/75 transition-colors hover:bg-navy/[0.05] hover:text-navy " +
  FOCUS_RING;

type ProductItem = {
  to:
  | "/"
  | "/services/cloud/web-hosting-pakistan"
  | "/services/cloud/vps-hosting-pakistan"
  | "/services/cloud/dedicated-server-hosting-pakistan"
  | "/services/cloud/colocation-services-pakistan"
  | "/services/cloud/data-center-solutions-pakistan";
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const PRODUCTS: ProductItem[] = [
  {
    to: "/services/cloud",
    title: "Cloud Hosting",
    desc: "Managed cloud hosting for Pakistani businesses",
    icon: Cloud,
  },
  {
    to: "/services/cloud/web-hosting-pakistan",
    title: "Web Hosting",
    desc: "Shared & WordPress hosting with cPanel, from Rs 2,250/mo",
    icon: Cloud,
  },
  {
    to: "/services/cloud/vps-hosting-pakistan",
    title: "VPS Hosting",
    desc: "NVMe VPS in Lahore & Karachi, from PKR 12,500/mo",
    icon: Server,
  },
  {
    to: "/services/cloud/dedicated-server-hosting-pakistan",
    title: "Dedicated Servers",
    desc: "Single-tenant bare metal, Tier III compliant",
    icon: HardDrive,
  },
  {
    to: "/services/cloud/colocation-services-pakistan",
    title: "Colocation Services",
    desc: "Your hardware in our Tier III facility — N+1 power, carrier-neutral",
    icon: Building2,
  },
  {
    to: "/services/cloud/data-center-solutions-pakistan",
    title: "Data Center Solutions",
    desc: "Design, build & Tier 3 hosting across Pakistan",
    icon: Building2,
  },
];



function ProductRow({
  item,
  onClick,
}: {
  item: ProductItem;
  onClick?: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      preload="intent"
      activeOptions={{ exact: true }}
      onClick={onClick}
      className={"group/row flex items-start gap-4 rounded-[var(--radius-card)] p-3 transition-colors hover:bg-navy/[0.04] " +
        FOCUS_RING
      }
      activeProps={{ className: "bg-green/5 ring-1 ring-inset ring-green/30" }}
    >
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-card)] bg-green/10 text-green transition-colors group-hover/row:bg-green group-hover/row:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 font-display text-sm font-bold text-navy">
          {item.title}
          <ChevronRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover/row:translate-x-0 group-hover/row:opacity-100" />
        </span>
        <span className="mt-0.5 block text-xs leading-relaxed text-navy/60">
          {item.desc}
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { open: openContact } = useContactDialog();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8ecf1] bg-[#fafbfc]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/services/cloud"
          preload="intent"
          className={"flex items-center " + FOCUS_RING}
          aria-label="BrainCLOUD Plus home"
        >
          <img width={768} height={89} loading="eager" decoding="async" fetchPriority="high"
            src={logoBlue}
            alt="BrainCLOUD Plus"
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={"h-10 rounded-full bg-transparent px-4 text-sm font-bold text-navy/75 hover:bg-navy/[0.05] hover:text-navy data-[state=open]:bg-navy/[0.05] data-[state=open]:text-navy " +
                    FOCUS_RING
                  }
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[460px] p-3">
                    <div className="px-3 pb-2 pt-1 text-eyebrow text-navy/50">
                      Hosting solutions
                    </div>
                    <div className="space-y-1">
                      {PRODUCTS.map((p) => (
                        <ProductRow key={p.to} item={p} />
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between rounded-[var(--radius-card)] bg-navy/[0.03] px-4 py-3">
                      <span className="text-xs font-bold text-navy/70">
                        Not sure which one? Talk to an engineer.
                      </span>
                      <a
                        href={WHATSAPP_HREF}
                        className="inline-flex items-center gap-1 text-xs font-bold text-green hover:underline"
                      >
                        WhatsApp <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={"h-10 rounded-full bg-transparent px-4 text-sm font-bold text-navy/75 hover:bg-navy/[0.05] hover:text-navy data-[state=open]:bg-navy/[0.05] data-[state=open]:text-navy " +
                    FOCUS_RING
                  }
                >
                  AI
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[720px] p-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="px-3 pb-2 pt-1 text-eyebrow text-navy/50">
                          Infrastructure
                        </div>
                        <div className="space-y-1">
                          {AI_INFRA.map((p) => (
                            <AiRow key={p.to} item={p} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="px-3 pb-2 pt-1 text-eyebrow text-navy/50">
                          Solutions &amp; Locations
                        </div>
                        <div className="space-y-1">
                          {AI_SOLUTIONS.map((p) => (
                            <AiRow key={p.to} item={p} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between rounded-[var(--radius-card)] bg-navy/[0.03] px-4 py-3">
                      <span className="text-xs font-bold text-navy/70">
                        Building AI in Pakistan? We handle the infrastructure.
                      </span>
                      <a
                        href={WHATSAPP_HREF}
                        className="inline-flex items-center gap-1 text-xs font-bold text-green hover:underline"
                      >
                        WhatsApp <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/services/cloud/blog"
            preload="intent"
            className={"rounded-full px-4 py-2 text-sm font-bold text-navy/75 transition-colors hover:bg-navy/[0.05] hover:text-navy " +
              FOCUS_RING
            }
          >
            Blog
          </Link>

          <Link
            to="/services/cloud/contact"
            preload="intent"
            className={"rounded-full px-4 py-2 text-sm font-bold text-navy/75 transition-colors hover:bg-navy/[0.05] hover:text-navy " +
              FOCUS_RING
            }
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_HREF}
            aria-label="Chat on WhatsApp +92 327 622 2888"
            className={"hidden h-11 items-center gap-2 rounded-[var(--radius-card)] border border-navy/10 bg-white px-4 text-navy transition-all hover:border-green hover:bg-green hover:text-white lg:inline-flex " +
              FOCUS_RING
            }
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-display text-xs font-bold tracking-tight">
              +92 327 622 2888
            </span>
          </a>
          <a
            href={WHATSAPP_HREF}
            aria-label="Chat on WhatsApp"
            className={"hidden h-11 w-11 items-center justify-center rounded-[var(--radius-card)] border border-navy/10 bg-white text-navy transition-all hover:border-green hover:bg-green hover:text-white sm:inline-flex lg:hidden " +
              FOCUS_RING
            }
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Button
            type="button"
            onClick={() => openContact({ intent: "Header · Talk to sales" })}
            className={"hidden rounded-none bg-green px-6 py-2 font-extrabold uppercase tracking-[0.12em] text-white text-xs transition-colors hover:bg-[#1da82d] sm:inline-flex " +
              FOCUS_RING
            }
          >
            Talk to sales
          </Button>

          {/* Mobile menu trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className={"inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy md:hidden " +
                  FOCUS_RING
                }
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] border-l border-[#e8ecf1] bg-[#fafbfc] p-0 sm:w-[380px] overflow-y-scroll"
            >
              <SheetHeader className="border-b border-[#e8ecf1] px-5 py-4 text-left">
                <SheetTitle className="font-display text-base font-extrabold text-navy">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="px-3 py-4">
                <div className="px-3 pb-2 text-eyebrow text-navy/50">
                  Hosting solutions
                </div>
                <div className="space-y-1">
                  {PRODUCTS.map((p) => (
                    <ProductRow
                      key={p.to}
                      item={p}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                </div>

                <div className="my-4 h-px bg-navy/10" />

                <div className="px-3 pb-2 text-eyebrow text-navy/50">
                  AI · Infrastructure
                </div>
                <div className="space-y-1">
                  {AI_INFRA.map((p) => (
                    <AiRow key={p.to} item={p} onClick={() => setOpen(false)} />
                  ))}
                </div>

                <div className="my-4 h-px bg-navy/10" />

                <div className="px-3 pb-2 text-eyebrow text-navy/50">
                  AI · Solutions &amp; Locations
                </div>
                <div className="space-y-1">
                  {AI_SOLUTIONS.map((p) => (
                    <AiRow key={p.to} item={p} onClick={() => setOpen(false)} />
                  ))}
                </div>

                <div className="my-4 h-px bg-navy/10" />

                <div className="space-y-1">
                  <Link
                    to="/services/cloud/blog"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-[var(--radius-card)] px-3 py-3 text-sm font-bold text-navy hover:bg-navy/[0.04]"
                  >
                    Blog <ChevronRight className="h-4 w-4 text-navy/40" />
                  </Link>
                </div>

                <div className="space-y-1">
                  <a
                    href="#cta"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-[var(--radius-card)] px-3 py-3 text-sm font-bold text-navy hover:bg-navy/[0.04]"
                  >
                    Contact <ChevronRight className="h-4 w-4 text-navy/40" />
                  </a>
                </div>

                <div className="mt-6 space-y-2 px-1">
                  <Button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      openContact({ intent: "Mobile menu · Get Started" });
                    }}
                    className={"w-full rounded-full bg-green py-6 font-bold text-white hover:bg-green " +
                      FOCUS_RING
                    }
                  >
                    GET STARTED TODAY
                  </Button>
                  <a
                    href={WHATSAPP_HREF}
                    onClick={() => setOpen(false)}
                    className={"flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy/10 bg-white py-3 text-sm font-bold text-navy hover:border-navy hover:bg-navy hover:text-white " +
                      FOCUS_RING
                    }
                  >
                    <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFinalCTA({
  title,
  subtitle,
  buttonLabel,
}: {
  title?: React.ReactNode;
  subtitle?: string;
  buttonLabel?: string;
}) {
  const { open: openContact } = useContactDialog();
  return (
    <section id="cta" className="bg-surface section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden border border-white/10 bg-navy px-8 py-20 text-center sm:px-16">
          <div className="relative">
            <h2 className="font-display text-hero font-extrabold tracking-tight text-white!">
              {title ?? <>Stop firefighting your <span className="text-green">infrastructure</span>.</>}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lede text-white/75">
              {subtitle ??
                "Tell us what's breaking — slow load times, crashes under traffic, surprise USD invoices. We'll send a written migration plan and a PKR quote within one business hour."}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openContact({ intent: "Final CTA · " + (buttonLabel ?? "Free migration plan") })}
                className={CTA_PRIMARY_DARK}
              >
                {buttonLabel ?? "Get my free migration plan"}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href={WHATSAPP_HREF} className={CTA_SECONDARY_DARK}>
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
            <p className="mt-3 text-xs font-medium text-white/55">
              We reply within 1 business hour · Available 24/7
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-eyebrow text-white/50">
              <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-green" strokeWidth={3} /> Tier III Compliant</span>
              <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-green" strokeWidth={3} /> 99.9% Uptime SLA</span>
              <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-green" strokeWidth={3} /> 24/7/365 Human Support</span>
              <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-green" strokeWidth={3} /> Free Migration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep section-y text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-2">
          <img width={768} height={89} loading="eager" decoding="async" fetchPriority="high" src={logoWhite} alt="BrainCLOUD Plus" className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Scalable cloud, hosting, and infrastructure for modern businesses. A
            BrainTEL Group sub-brand — Tier III compliant, operated locally in Pakistan.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-white!">
            Solutions
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/cloud" className="hover:text-white">Cloud Hosting</Link></li>
            <li><Link to="/services/cloud/vps-hosting-pakistan" className="hover:text-white">VPS Hosting</Link></li>
            <li><Link to="/services/cloud/dedicated-server-hosting-pakistan" className="hover:text-white">Dedicated Servers</Link></li>
            <li><Link to="/services/cloud/colocation-services-pakistan" className="hover:text-white">Colocation Services</Link></li>
            <li><Link to="/services/cloud/data-center-solutions-pakistan" className="hover:text-white">Data Center Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-white!">
            AI
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/cloud/ai-company-in-pakistan" className="hover:text-white">AI Company in Pakistan</Link></li>
            <li><Link to="/services/cloud/ai-data-center-pakistan" className="hover:text-white">AI Data Center</Link></li>
            <li><Link to="/services/cloud/gpu-server-hosting-pakistan" className="hover:text-white">GPU Server Hosting</Link></li>
            <li><Link to="/services/cloud/ai-colocation-pakistan" className="hover:text-white">AI Colocation</Link></li>
            <li><Link to="/services/cloud/ai-inference-llm-hosting-pakistan" className="hover:text-white">LLM Hosting</Link></li>
            <li><Link to="/services/cloud/sovereign-ai-hosting-pakistan" className="hover:text-white">Sovereign AI</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-white!">
            AI in your city
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/cloud/ai-companies-in-lahore" className="hover:text-white">AI Companies in Lahore</Link></li>
            <li><Link to="/services/cloud/ai-companies-in-karachi" className="hover:text-white">AI Companies in Karachi</Link></li>
            <li><Link to="/services/cloud/ai-companies-in-islamabad" className="hover:text-white">AI Companies in Islamabad</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-white!">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-green" />
              <span>730 Nizam Block, Allama Iqbal Town, Lahore 54570, Pakistan</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-none text-green" />
              <a href="tel:+924211122888" className="hover:text-white">
                UAN (042) 111 222 888
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 flex-none text-green" />
              <a href={WHATSAPP_HREF} className="hover:text-white">
                WhatsApp +92 327 622 2888
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-none text-green" />
              <a href="mailto:support@brain.net.pk" className="hover:text-white">
                support@brain.net.pk
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} Brain Telecommunication Ltd. · BrainCLOUD is a BrainTEL Group sub-brand.
      </div>
    </footer>
  );
}

export function SiteMobileStickyCTA() {
  const { open: openContact } = useContactDialog();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-[#e8ecf1] bg-[#fafbfc]/95 px-3 py-3 backdrop-blur md:hidden">
      <button
        type="button"
        onClick={() => openContact({ intent: "Site mobile sticky · Get Started" })}
        className={"flex-1 rounded-full bg-green px-5 py-3 text-center text-sm font-extrabold text-white " +
          FOCUS_RING
        }
      >
        Get Started
      </button>
      <a
        href={WHATSAPP_HREF}
        aria-label="Chat on WhatsApp"
        className={"flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy/10 bg-white text-navy " +
          FOCUS_RING
        }
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
