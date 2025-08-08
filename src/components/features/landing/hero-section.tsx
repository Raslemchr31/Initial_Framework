import Link from 'next/link';
import { ArrowRight, Play, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-16 pb-20 sm:pt-24 sm:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-neutral-200/50 dark:bg-grid-neutral-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container relative mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <Badge variant="outline" className="mb-6 px-3 py-1">
            <Star className="mr-1 h-3 w-3" />
            New: Advanced Analytics Dashboard
          </Badge>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Build SaaS Applications{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              10x Faster
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            The comprehensive platform for building, scaling, and managing modern SaaS applications. 
            Complete with authentication, payments, analytics, and API management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button size="lg" className="px-8 py-6 text-base" asChild>
              <Link href="/auth/register">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-6 text-base group" asChild>
              <Link href="/demo">
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
            <div className="text-sm text-muted-foreground">
              Trusted by developers at
            </div>
            <div className="flex items-center space-x-6 opacity-60">
              <div className="h-8 w-20 rounded bg-muted flex items-center justify-center text-xs font-medium">
                Startup
              </div>
              <div className="h-8 w-20 rounded bg-muted flex items-center justify-center text-xs font-medium">
                Scale-up
              </div>
              <div className="h-8 w-20 rounded bg-muted flex items-center justify-center text-xs font-medium">
                Enterprise
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
            <div>
              <div className="text-3xl font-bold text-foreground">10k+</div>
              <div className="text-sm text-muted-foreground">Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">50ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}