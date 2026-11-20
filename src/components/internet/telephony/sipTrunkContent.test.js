import { describe, expect, test } from "bun:test";
import {
  sipTrunkTerms,
  sipTrunkPlans,
  sipTrunkFaqs,
  sipTrunkProviderChecklist,
  sipTrunkChannelSizing,
} from "./sipTrunkContent";

describe("SIP trunk content constraints", () => {
  test("quotes are in PKR within 24 hours", () => {
    expect(sipTrunkTerms.currency).toBe("PKR");
    expect(sipTrunkTerms.quoteWithinHours).toBe(24);
  });

  test("plan prices stay quoted, never invented", () => {
    for (const [, monthly, oneTime] of sipTrunkPlans) {
      expect(monthly.toLowerCase()).toContain("quot");
      expect(oneTime.toLowerCase()).toContain("quot");
      expect(monthly).not.toMatch(/\d{3,}/);
    }
  });

  test("bandwidth guidance stays approximate", () => {
    expect(sipTrunkTerms.bandwidthKbpsPerCall).toBe(100);
    expect(sipTrunkTerms.bandwidthIsApproximate).toBe(true);
  });

  test("headroom rule stays approximate at 10-20%", () => {
    expect(sipTrunkTerms.headroomPercent).toBe("10–20%");
    expect(sipTrunkTerms.headroomIsApproximate).toBe(true);
  });

  test("provider checklist keeps PTA licence and itemised PKR pricing rows", () => {
    const flat = sipTrunkProviderChecklist.flat().join(" ");
    expect(flat).toContain("PTA licence");
    expect(flat).toContain("All-in PKR pricing");
  });

  test("channel sizing covers small office to multi-branch", () => {
    expect(sipTrunkChannelSizing).toHaveLength(4);
    expect(sipTrunkChannelSizing[3][0]).toContain("Multi-branch");
  });

  test("FAQs cover legality and number porting", () => {
    const flat = sipTrunkFaqs.map(f => f.question + " " + f.answer).join(" ");
    expect(flat).toContain("licensed");
    expect(flat).toContain("porting");
    expect(sipTrunkFaqs).toHaveLength(8);
  });
});
