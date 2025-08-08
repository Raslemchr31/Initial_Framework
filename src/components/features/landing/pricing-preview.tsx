import { Check, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { pricingTiers } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function PricingPreview() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Choose the perfect plan for your needs. Start free, upgrade as you grow.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center rounded-lg bg-muted p-1">
            <button className="relative z-10 rounded-md bg-background px-6 py-2 text-sm font-medium text-foreground shadow-sm">
              Monthly
            </button>
            <button className="relative z-10 rounded-md px-6 py-2 text-sm font-medium text-muted-foreground">
              Yearly
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.tier} 
              className={cn(
                "relative overflow-hidden",
                tier.popular && "border-primary shadow-lg scale-105"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-1 -right-1">
                  <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold tracking-tight">
                      ${tier.price.monthly}
                    </span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  {tier.price.yearly < tier.price.monthly * 12 && (
                    <div className="text-sm text-muted-foreground mt-1">
                      or ${tier.price.yearly}/year
                    </div>
                  )}
                </div>
                <CardDescription className="text-base mt-4">
                  {tier.tier === 'free' && "Perfect for getting started with basic features"}
                  {tier.tier === 'pro' && "Ideal for growing businesses and teams"}
                  {tier.tier === 'enterprise' && "Advanced features for large organizations"}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm">{feature.name}</div>
                        <div className="text-xs text-muted-foreground">{feature.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button 
                  className={cn(
                    "w-full",
                    tier.popular 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : tier.tier === 'free' 
                        ? "variant-outline" 
                        : "variant-default"
                  )}
                  size="lg"
                >
                  {tier.tier === 'free' ? 'Get Started Free' : 'Upgrade Now'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include 24/7 support and a 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-primary" />
              <span>30-day free trial</span>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 rounded-2xl border-2 border-dashed border-muted-foreground/25 p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold">Need Something Custom?</h3>
          <p className="text-muted-foreground mb-4">
            Contact our sales team for custom pricing and enterprise features.
          </p>
          <Button variant="outline">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}