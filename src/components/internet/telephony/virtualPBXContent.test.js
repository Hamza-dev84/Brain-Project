import { describe, expect, test } from "bun:test";
import { virtualPBXPlans, virtualPBXTerms } from "./virtualPBXContent";
describe("Virtual PBX supplied business terms", () => {
  test("written quotes are due within 24 hours", () => { expect(virtualPBXTerms.quoteWithinHours).toBe(24); });
  test("quotes use PKR", () => { expect(virtualPBXTerms.currency).toBe("PKR"); });
  test("Starter prices are unspecified", () => { expect(virtualPBXPlans[0]?.monthlyPerUser).toBeNull(); expect(virtualPBXPlans[0]?.setup).toBeNull(); });
  test("Business prices are unspecified", () => { expect(virtualPBXPlans[1]?.monthlyPerUser).toBeNull(); expect(virtualPBXPlans[1]?.setup).toBeNull(); });
  test("porting requires carrier support", () => { expect(virtualPBXTerms.portingRequiresCarrierSupport).toBe(true); });
  test("porting also depends on number type", () => { expect(virtualPBXTerms.portingRequiresNumberTypeCheck).toBe(true); });
  test("analog phones require an adapter", () => { expect(virtualPBXTerms.analogPhonesRequireAdapter).toBe(true); });
  test("G.711 needs approximately 90 kbps each way", () => { expect(virtualPBXTerms.bandwidthKbpsEachWay).toBe(90); expect(virtualPBXTerms.codec).toBe("G.711"); expect(virtualPBXTerms.bandwidthIsApproximate).toBe(true); });
  test("mobile failover forwarding is billed as outbound", () => { expect(virtualPBXTerms.forwardedCallsBilledAsOutbound).toBe(true); });
});