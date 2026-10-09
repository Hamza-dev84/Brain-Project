import * as React from "react";
import { cn } from "@/lib/utils";

/** Shared prose primitives for BrainCLOUD blog posts. */

export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 scroll-mt-28 font-display text-2xl font-extrabold leading-tight text-navy md:text-3xl"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-10 font-display text-lg font-bold text-navy md:text-xl">
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-base leading-relaxed text-navy/75 md:text-lg">{children}</p>;
}

export function UL({ children, columns }: { children: React.ReactNode; columns?: boolean }) {
  return (
    <ul
      className={cn(
        "mt-5 space-y-2.5",
        columns && "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:gap-y-2.5",
      )}
    >
      {children}
    </ul>
  );
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-base leading-relaxed text-navy/75">
      <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-green" />
      <span>{children}</span>
    </li>
  );
}

export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="card-surface mt-8 border-l-4 border-l-green p-6">
      <p className="font-display text-base font-bold text-navy">{title}</p>
      <div className="mt-3">{children}</div>
    </aside>
  );
}
