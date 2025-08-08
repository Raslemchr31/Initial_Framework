import { 
  Shield, 
  CreditCard, 
  BarChart3, 
  Zap, 
  Users, 
  Globe,
  Lock,
  Smartphone
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const detailedFeatures = [
  {
    icon: Shield,
    title: 'Authentication & Authorization',
    description: 'Complete auth system with SSO, 2FA, role-based access control, and session management.',
    features: ['Single Sign-On (SSO)', 'Multi-Factor Authentication', 'Role-Based Access', 'Session Management']
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Integrated payment processing with subscription management, invoicing, and billing automation.',
    features: ['Stripe Integration', 'Subscription Management', 'Automated Invoicing', 'Payment Analytics']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics dashboard with real-time metrics, custom reports, and data visualization.',
    features: ['Real-time Metrics', 'Custom Dashboards', 'Export Reports', 'User Behavior Analytics']
  },
  {
    icon: Zap,
    title: 'API Management',
    description: 'Robust API gateway with rate limiting, monitoring, versioning, and comprehensive documentation.',
    features: ['Rate Limiting', 'API Versioning', 'Real-time Monitoring', 'Auto Documentation']
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Advanced team collaboration tools with permissions, workspaces, and activity tracking.',
    features: ['Team Workspaces', 'Permission Control', 'Activity Logs', 'Collaboration Tools']
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Worldwide CDN, edge computing, multi-region deployments for optimal performance.',
    features: ['Global CDN', 'Edge Computing', 'Multi-Region', 'Auto Scaling']
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with SOC2, GDPR compliance, encryption, and audit logs.',
    features: ['SOC2 Compliant', 'GDPR Ready', 'End-to-End Encryption', 'Audit Logs']
  },
  {
    icon: Smartphone,
    title: 'Mobile Support',
    description: 'Native mobile SDKs, responsive design, and mobile-first authentication flows.',
    features: ['Mobile SDKs', 'Responsive Design', 'Mobile Auth', 'Push Notifications']
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything You Need to Build SaaS
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            From authentication to analytics, we provide all the building blocks 
            for modern SaaS applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
          {detailedFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-foreground">
            Ready to Build Your Next SaaS?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Join thousands of developers who trust our platform to build, scale, and manage their SaaS applications.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Start Building Today
            </button>
            <button className="rounded-lg border border-border px-6 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}