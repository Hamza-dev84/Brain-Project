import { ProjectType, Feature, CalculationMetrics, ServiceConfig } from "@/types/softwarePlanner";

export const calculateProjectValue = (
  projectType: ProjectType | null,
  features: Feature[],
  config: ServiceConfig
): CalculationMetrics => {
  if (!projectType) {
    return {
      totalValue: 0,
      trafficImpact: "Select a project to see impact",
      leadImpact: "Select a project to see impact",
      timeSavings: "Select a project to see impact",
      roiEstimate: "Select a project to see impact",
    };
  }

  // Calculate base value from project type and features
  const baseValue = projectType.baseValue;
  const featureValue = features.reduce((sum, f) => sum + f.valuePoints, 0);
  
  // Calculate total value (0-100 scale)
  const rawTotal = baseValue + featureValue;
  const totalValue = Math.min(100, rawTotal);

  // Calculate traffic impact
  const trafficFeatures = features.filter(f => 
    f.impactMetric.includes('traffic') || f.impactMetric.includes('reach') || f.impactMetric.includes('downloads')
  );
  const trafficPoints = trafficFeatures.reduce((sum, f) => {
    const match = f.impactMetric.match(/\+?(\d+)%/);
    return sum + (match ? parseInt(match[1]) : 0);
  }, 0);
  const trafficImpact = trafficPoints > 0 ? `+${Math.round(trafficPoints * config.calculations.trafficMultiplier)}% Traffic` : "+0% Traffic";

  // Calculate lead/conversion impact
  const leadFeatures = features.filter(f => 
    f.impactMetric.includes('conversion') || f.impactMetric.includes('leads') || f.impactMetric.includes('sales')
  );
  const leadPoints = leadFeatures.reduce((sum, f) => {
    const match = f.impactMetric.match(/\+?(\d+)%/);
    if (match) return sum + parseInt(match[1]);
    const leadMatch = f.impactMetric.match(/\+?(\d+)\s+lead/);
    return sum + (leadMatch ? parseInt(leadMatch[1]) : 0);
  }, 0);
  const leadImpact = leadPoints > 0 
    ? leadPoints > 50 
      ? `+${Math.round(leadPoints * config.calculations.leadMultiplier)}% Conversions`
      : `+${Math.round(leadPoints * config.calculations.leadMultiplier)} Leads/Month`
    : "+0 Leads";

  // Calculate time savings
  const timeFeatures = features.filter(f => 
    f.impactMetric.includes('hrs') || f.impactMetric.includes('hours') || f.impactMetric.includes('saved')
  );
  const timePoints = timeFeatures.reduce((sum, f) => {
    const match = f.impactMetric.match(/(\d+)\s*hrs?/);
    return sum + (match ? parseInt(match[1]) : 0);
  }, 0);
  const timeSavings = timePoints > 0 ? `${Math.round(timePoints * config.calculations.timeMultiplier)} Hours Saved/Week` : "No time savings yet";

  // Calculate ROI estimate
  const roiMultiplier = totalValue / 10;
  const monthlyValue = Math.round(500 + (features.length * 150 * roiMultiplier));
  const roiEstimate = features.length > 0 ? `~$${monthlyValue.toLocaleString()} Monthly Value` : "$0 Monthly Value";

  return {
    totalValue,
    trafficImpact,
    leadImpact,
    timeSavings,
    roiEstimate,
  };
};
