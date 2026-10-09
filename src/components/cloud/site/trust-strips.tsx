import * as React from "react";
import { Section } from "@/components/cloud/site/primitives";
import { LogoStrip, type LogoItem } from "@/components/cloud/site/LogoStrip";
import { CustomerMarquee } from "@/components/cloud/site/CustomerMarquee";
import { cn } from "@/lib/utils";

import logoWordpress from "@/assets/cloud/logos/wordpress.webp";
import logoShopify from "@/assets/cloud/logos/shopify.webp";
import logoWoocommerce from "@/assets/cloud/logos/woocommerce.png";
import logoMagento from "@/assets/cloud/logos/magento.webp";
import logoOpencart from "@/assets/cloud/logos/opencart.webp";
import logoNodejs from "@/assets/cloud/logos/nodejs.webp";
import logoReact from "@/assets/cloud/logos/react.webp";
import logoPython from "@/assets/cloud/logos/python.webp";
import logoNextjs from "@/assets/cloud/logos/nextjs.png";

import logoUbuntu from "@/assets/cloud/stack/ubuntu.png";
import logoDebian from "@/assets/cloud/stack/debian.webp";
import logoAlma from "@/assets/cloud/stack/almalinux.webp";
import logoRocky from "@/assets/cloud/stack/rocky.webp";
import logoCentos from "@/assets/cloud/stack/centos.webp";
import logoWinServer from "@/assets/cloud/stack/windows-server.webp";
import logoFedora from "@/assets/cloud/stack/fedora.webp";
import logoRhel from "@/assets/cloud/stack/rhel.png";
import logoCloudLinux from "@/assets/cloud/stack/cloudlinux.webp";

import payJazzCash from "@/assets/cloud/payments/jazzcash.webp";
import payEasyPaisa from "@/assets/cloud/payments/easypaisa.png";
import payVisa from "@/assets/cloud/payments/visa.webp";
import payMastercard from "@/assets/cloud/payments/mastercard.webp";
import pay1Link from "@/assets/cloud/payments/1link.webp";
import payRaast from "@/assets/cloud/payments/raast.webp";

/* ============================================================
 * Shared trust strips. Use these — do not re-inline.
 * ============================================================ */

const STACK_LOGOS = [
  { name: "WordPress", src: logoWordpress },
  { name: "Shopify", src: logoShopify },
  { name: "WooCommerce", src: logoWoocommerce },
  { name: "Magento", src: logoMagento },
  { name: "OpenCart", src: logoOpencart },
  { name: "Node.js", src: logoNodejs },
  { name: "React", src: logoReact },
  { name: "Python", src: logoPython },
  { name: "Next.js", src: logoNextjs },
];

export const OS_LOGOS: LogoItem[] = [
  { src: logoUbuntu, alt: "Ubuntu", label: "Ubuntu" },
  { src: logoDebian, alt: "Debian", label: "Debian" },
  { src: logoAlma, alt: "AlmaLinux", label: "AlmaLinux" },
  { src: logoRocky, alt: "Rocky Linux", label: "Rocky" },
  { src: logoCentos, alt: "CentOS", label: "CentOS" },
  { src: logoFedora, alt: "Fedora", label: "Fedora" },
  { src: logoRhel, alt: "Red Hat Enterprise Linux", label: "RHEL" },
  { src: logoCloudLinux, alt: "CloudLinux", label: "CloudLinux" },
  { src: logoWinServer, alt: "Windows Server", label: "Windows Server" },
];

export const PAYMENT_LOGOS: LogoItem[] = [
  { src: payJazzCash, alt: "JazzCash", label: "JazzCash" },
  { src: payEasyPaisa, alt: "EasyPaisa", label: "EasyPaisa" },
  { src: payRaast, alt: "Raast — State Bank of Pakistan", label: "Raast" },
  { src: pay1Link, alt: "1LINK", label: "1LINK" },
  { src: payVisa, alt: "Visa", label: "Visa" },
  { src: payMastercard, alt: "Mastercard", label: "Mastercard" },
];

/* PaymentsStrip — "PAY IN PKR WITH FIXED PRICING — NO USAGE SPIKE SURPRISES." */
export function PaymentsStrip({
  tone = "white",
  heading = "PAY IN PKR WITH FIXED PRICING — NO USAGE SPIKE SURPRISES.",
}: {
  tone?: Tone;
  heading?: string;
}) {
  return (
    <Section tone={tone} className="!section-y-tight">
      <LogoStrip heading={heading} items={PAYMENT_LOGOS} size={56} />
    </Section>
  );
}

type Tone = "surface" | "white" | "tint";

/* ToolingStrip — "Pre-tuned for the tools your team already uses" */
export function ToolingStrip({ tone = "white", className }: { tone?: Tone; className?: string }) {
  return (
    <Section tone={tone} className={cn("!section-y-tight", className)}>
      <p className="mb-8 text-center font-display text-eyebrow text-navy/50">
        Pre-tuned for the tools your team already uses
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
        {STACK_LOGOS.map((l) => (
          <img decoding="async"
            key={l.name}
            src={l.src}
            alt={`${l.name} logo`}
            loading="lazy"
            className="h-7 w-auto opacity-70 transition-opacity hover:opacity-100"
          />
        ))}
      </div>
    </Section>
  );
}

/* CustomersStrip — "Used by Renowned Organizations" */
export function CustomersStrip({ tone = "surface" }: { tone?: Tone }) {
  return (
    <Section tone={tone} className="!py-8 sm:!py-10">
      <p className="mb-6 text-center text-eyebrow text-navy/60">
        Used by Renowned Organizations
      </p>
      <CustomerMarquee />
    </Section>
  );
}

/* OSStrip — "Operating systems supported" */
export function OSStrip({
  tone = "white",
  variant = "section",
  className,
}: {
  tone?: Tone;
  /** "section" renders inside a Section band; "compact" is just the inner block for nesting. */
  variant?: "section" | "compact";
  className?: string;
}) {
  const inner = (
    <LogoStrip
      heading="Operating systems supported"
      items={OS_LOGOS}
      size={36}
    />
  );
  if (variant === "compact") {
    return <div className={cn("py-2", className)}>{inner}</div>;
  }
  return (
    <Section tone={tone} className={cn("!section-y-tight", className)}>
      {inner}
    </Section>
  );
}
