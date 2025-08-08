import { NavItem, PricingTier, SiteConfig, SubscriptionTier } from './types';

export const siteConfig: SiteConfig = {
  name: "SaaSify",
  description: "Build and scale your SaaS applications faster with our comprehensive platform",
  url: "https://saasify.com",
  ogImage: "https://saasify.com/og.jpg",
  links: {
    twitter: "https://twitter.com/saasify",
    github: "https://github.com/saasify"
  }
};

export const navigationItems: NavItem[] = [
  {
    title: "Features",
    href: "#features"
  },
  {
    title: "Pricing",
    href: "#pricing"
  },
  {
    title: "Documentation",
    href: "/docs"
  },
  {
    title: "Support",
    href: "/support"
  }
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    tier: SubscriptionTier.FREE,
    price: {
      monthly: 0,
      yearly: 0
    },
    features: [
      {
        name: "Basic Authentication",
        description: "User registration and login",
        tier_required: SubscriptionTier.FREE,
        included: true
      },
      {
        name: "API Access",
        description: "1,000 API calls per month",
        tier_required: SubscriptionTier.FREE,
        included: true
      },
      {
        name: "Community Support",
        description: "Access to community forums",
        tier_required: SubscriptionTier.FREE,
        included: true
      }
    ]
  },
  {
    name: "Pro",
    tier: SubscriptionTier.PRO,
    price: {
      monthly: 29,
      yearly: 290
    },
    popular: true,
    features: [
      {
        name: "Advanced Authentication",
        description: "SSO, 2FA, and team management",
        tier_required: SubscriptionTier.PRO,
        included: true
      },
      {
        name: "Enhanced API Access",
        description: "100,000 API calls per month",
        tier_required: SubscriptionTier.PRO,
        included: true
      },
      {
        name: "Advanced Analytics",
        description: "Detailed usage analytics and insights",
        tier_required: SubscriptionTier.PRO,
        included: true
      },
      {
        name: "Priority Support",
        description: "Email support with 24h response",
        tier_required: SubscriptionTier.PRO,
        included: true
      }
    ]
  },
  {
    name: "Enterprise",
    tier: SubscriptionTier.ENTERPRISE,
    price: {
      monthly: 99,
      yearly: 990
    },
    features: [
      {
        name: "Custom Authentication",
        description: "White-label auth solutions",
        tier_required: SubscriptionTier.ENTERPRISE,
        included: true
      },
      {
        name: "Unlimited API Access",
        description: "No limits on API usage",
        tier_required: SubscriptionTier.ENTERPRISE,
        included: true
      },
      {
        name: "Custom Analytics",
        description: "Custom dashboards and reports",
        tier_required: SubscriptionTier.ENTERPRISE,
        included: true
      },
      {
        name: "Dedicated Support",
        description: "Phone & email support with 2h response",
        tier_required: SubscriptionTier.ENTERPRISE,
        included: true
      }
    ]
  }
];

export const COMPANY_INFO = {
  name: "SaaSify",
  tagline: "Build SaaS applications faster",
  description: "The comprehensive platform for building, scaling, and managing modern SaaS applications.",
  email: "hello@saasify.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Street, San Francisco, CA 94105"
} as const;

export const FEATURES = [
  {
    title: "Authentication & Authorization",
    description: "Complete authentication system with SSO, 2FA, and role-based access control.",
    icon: "🔐"
  },
  {
    title: "Payment Processing",
    description: "Integrated payment processing with subscription management and invoicing.",
    icon: "💳"
  },
  {
    title: "Analytics & Insights",
    description: "Comprehensive analytics dashboard with real-time metrics and reporting.",
    icon: "📊"
  },
  {
    title: "API Management",
    description: "Robust API gateway with rate limiting, monitoring, and documentation.",
    icon: "🔌"
  }
] as const;