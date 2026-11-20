import { describe, test, expect } from "bun:test";
import { pbxPriceListings, pbxPriceTerms, threeYearCost } from "./pbxPriceContent.ts";
describe("Uploaded PBX pricing rules", () => {
  test("preserves all four public hardware prices", () => {
    expect(pbxPriceListings.map(p => [p.model, p.price])).toEqual([["Yeastar P520", 104800], ["Yeastar P550", 233800], ["Yeastar P560", 334100], ["Grandstream UCM6308A", 280600]]);
  });
  test("preserves listed users and concurrent calls", () => {
    expect(pbxPriceListings.map(p => [p.users, p.calls])).toEqual([["20", "10"], ["50", "25"], ["100 (up to 200)", "30 (up to 60)"], ["Up to 1,500", "200"]]);
  });
  test("market listings are dated and not BrainNET quotes", () => {
    expect(pbxPriceTerms.listingDate).toBe("22 Oct 2026"); expect(pbxPriceTerms.listingsAreBrainNETPrices).toBe(false);
  });
  test("written quotes use PKR within 24 hours", () => {
    expect(pbxPriceTerms.currency).toBe("PKR"); expect(pbxPriceTerms.quoteWithinHours).toBe(24);
  });
  test("three-year comparison includes exactly 36 monthly payments", () => {
    expect(threeYearCost(104800, 2000)).toBe(176800); expect(pbxPriceTerms.comparisonMonths).toBe(36);
  });
  test("virtual PBX has no PBX hardware cost", () => { expect(pbxPriceTerms.virtualHardwareCost).toBe(0); });
  test("10–20% concurrent-call guidance stays approximate", () => {
    expect(pbxPriceTerms.concurrencyPercent).toBe("10–20%"); expect(pbxPriceTerms.concurrencyIsApproximate).toBe(true);
  });
});