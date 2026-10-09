# Site-wide Navigation Wiring Pass

## Was this intentional?

No. The merge work so far focused on porting pages, brand isolation, URL structure, and SEO. Navigation was fixed where it was structurally required (headers, footers, brand bar, breadcrumbs — those are wired and use client-side routing), but decorative CTAs that came from the five source projects were never re-pointed. Those source sites shipped many buttons as visual placeholders with no handler, and the merge preserved them as-is.

## What the audit actually found

Good news first — several of your requirements are already satisfied:

- Zero `href="#"` and zero empty `onClick` handlers anywhere in the codebase.
- All navbars (parent, cloud, sms, internet, software, plus per-product headers) route with client-side `<Link>`, logos point home, and every mobile hamburger opens/closes and navigates.
- Footers use `<Link>`; social icons already open in a new tab with `rel="noopener noreferrer"`; parent phone/email use `tel:`/`mailto:`.
- Breadcrumbs, tabs, and accordions are wired.

The real gap is roughly 50 dead CTA buttons — buttons that render but do nothing on click — plus a missing global 404.

### Dead buttons by area (representative, full list handled in the pass)

- Internet: `PackageCard` "Order Now", `BusinessServiceCard`, `VoiceServiceCard`, `BusinessSection` CTA, `CoverageSection` CTA, header top-bar coverage button, header "Get Started" CTA, mobile CTA, coverage-area page CTAs.
- SMS: hero secondary buttons on Main/Branded/Features/API/Marketing heroes, `PricingTierCard` CTA, OTP hero + use-case CTAs, API docs CTA, Features section demo buttons.
- Software: ERP / mobile-app / web-design / web-dev / SEO-Lahore page CTAs, `CaseStudyLayout` bottom CTA, `Support` page CTAs.
- Parent: Careers CTAs and "Learn More", About Us CTAs, all nine Industry Solutions "Learn More" cards, Footer newsletter/CTA button.
- Cloud: mobile menu trigger in `chrome.tsx`.

### Missing 404

`__root.tsx` and `router.tsx` define no `notFoundComponent` / `defaultNotFoundComponent`. Brand-scoped splat routes exist (`/services/software/$` etc.) but an unmatched top-level URL has no styled page.

## Plan

1. **Wire every dead CTA** to its brand-correct destination using `<Link>` (or `asChild` for `Button`), never a raw anchor reload. Anchor-scroll CTAs ("View Plans" on the same page) keep smooth in-page scroll.
2. **Verify each destination resolves** against the generated route tree; no link may point at a non-existent path.
3. **404 page**: add a styled `notFoundComponent` on `__root` plus `defaultNotFoundComponent` on the router, matching the parent design (BrainTEL header/footer, links back home and to `/services`).
4. **Focus/hover states**: add `focus-visible` rings and `cursor-pointer` only where missing. No visual redesign — resting-state appearance is untouched.
5. **Deliverables**: full route map, per-page wiring table with destinations, list of any placeholder pages created, and a list of ambiguous targets for your confirmation.

## Default destinations I will use (tell me if any are wrong)


| Element                                            | Destination                                                                                                                                                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Internet "Order Now" / package + service card CTAs | `Internet Pop-up form which is a planner in which users select home or business, enter their details, and submit it, that pop-up form needs a redesign too as per the internet website design.` |
| Internet coverage CTAs                             | `/services/internet/coverage-area`                                                                                                                                                              |
| SMS hero secondary + pricing tier CTAs             | `/services/sms/contact` (pricing "View Pricing" → `/services/sms/pricing`)                                                                                                                      |
| SMS API docs CTA                                   | `/services/sms/contact`                                                                                                                                                                         |
| Software product-page CTAs / case study CTA        | `/services/software/contact-us`                                                                                                                                                                 |
| Software Support page CTAs                         | `/services/software/contact-us`                                                                                                                                                                 |
| Industry Solutions "Learn More" (9 cards)          | the matching `/industry-solutions/*` detail route                                                                                                                                               |
| Careers CTAs                                       | `/careers` job section anchor; "Learn More" → `/company/about-us`                                                                                                                               |
| About Us CTAs                                      | `/contact-us` and `/company/about-us`                                                                                                                                                           |
| Footer newsletter button                           | submit handler with success toast (no backend)                                                                                                                                                  |


## Placeholder pages

I expect to need none — every default above maps to a route that already exists. If a target turns out to be missing, I create a minimal placeholder in the owning brand's style and list it.

## Technical notes

- `Button` gets `asChild` + `<Link>` so routing stays client-side and keeps the anchor semantics (cmd-click, preload).
- No changes to `styles.css` or the brand CSS files beyond additive `focus-visible` utilities, so brand isolation stays intact.
- Prefetching via the existing `RoutePrefetcher` continues to apply to newly added links automatically.