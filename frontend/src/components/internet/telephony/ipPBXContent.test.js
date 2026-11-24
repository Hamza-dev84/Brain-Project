import { describe, expect, test } from "bun:test";
import { ipPBXTerms, ipPBXStartingPrices, ipPBXSupportTerms, ipPBXLegality, ipPBXFaqs } from "./ipPBXContent";

describe("IP PBX supplied business terms", () => {
  test("written quotes are due within 24 hours", () => { expect(ipPBXTerms.quoteWithinHours).toBe(24); });
  test("quotes use PKR", () => { expect(ipPBXTerms.currency).toBe("PKR"); });
  test("starting price amounts are unspecified", () => { for (const p of ipPBXStartingPrices) expect(p.amountPkr).toBeNull(); });
  test("starting prices exclude SIP trunk and call charges", () => { expect(ipPBXTerms.pricesExcludeSipTrunkAndCalls).toBe(true); });
  test("bandwidth guidance is approximate, per direction and G.711", () => {
    expect(ipPBXTerms.bandwidthKbpsEachWay).toBe(90);
    expect(ipPBXTerms.bandwidthIsApproximate).toBe(true);
    expect(ipPBXTerms.codec).toBe("G.711");
  });
  test("concurrency rule of thumb is 15–30% and approximate", () => {
    expect(ipPBXTerms.concurrencyRuleOfThumbPercent).toBe("15–30%");
    expect(ipPBXTerms.concurrencyIsApproximate).toBe(true);
  });
  test("support terms are agreed per customer, not invented", () => {
    for (const s of ipPBXSupportTerms) expect(s.detail).not.toMatch(/within \d+ hours|free for/);
  });
  test("PTA source and licence details are not invented", () => {
    expect(ipPBXLegality.ptaSourceSupplied).toBe(false);
    expect(ipPBXLegality.licenceSupplied).toBe(false);
  });
  test("FAQs match the supplied answers", () => {
    expect(ipPBXFaqs).toHaveLength(8);
    expect(ipPBXFaqs[3].answer).toContain("15 to 30%");
    expect(ipPBXFaqs[4].answer).toContain("number type and carrier");
  });
});
