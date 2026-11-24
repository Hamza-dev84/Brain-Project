export interface ProjectType {
  id: string;
  icon: string;
  title: string;
  description: string;
  baseValue: number;
  isPopular?: boolean;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  impactMetric: string;
  valuePoints: number;
  category: string;
  recommended?: boolean;
  popular?: boolean;
}

export interface CalculationMetrics {
  totalValue: number;
  trafficImpact: string;
  leadImpact: string;
  timeSavings: string;
  roiEstimate: string;
}

export interface CalculationConfig {
  trafficMultiplier: number;
  leadMultiplier: number;
  timeMultiplier: number;
}

export interface Preset {
  name: string;
  featureIds: string[];
}

export interface ServiceConfig {
  serviceName: string;
  projectTypes: ProjectType[];
  features: Record<string, Feature[]>;
  calculations: CalculationConfig;
  quickPresets?: Record<string, Preset[]>;
}

export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  projectType: string;
  selectedFeatures: string[];
  estimatedValue?: number;
  metrics?: CalculationMetrics;
  serviceName?: string;
}
