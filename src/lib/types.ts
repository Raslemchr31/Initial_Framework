export interface User {
  id: string;
  email: string;
  name: string | null;
  avatar_url: string | null;
}

export enum SubscriptionTier {
  FREE = 'free',
  PRO = 'pro',
  ENTERPRISE = 'enterprise'
}

export interface Feature {
  name: string;
  description: string;
  tier_required: SubscriptionTier;
  included: boolean;
}

export interface PricingTier {
  name: string;
  tier: SubscriptionTier;
  price: {
    monthly: number;
    yearly: number;
  };
  features: Feature[];
  popular?: boolean;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}