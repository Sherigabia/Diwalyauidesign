import React from 'react';
import { Search, MapPin, Wrench, Hammer, Zap, Droplet, PaintBucket, Car, Shield, DollarSign, Clock, CheckCircle, Star, TrendingUp, Users, Award } from 'lucide-react';
import { Navbar } from './navbar';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Input } from './input';
import { Badge } from './badge';

interface LandingPageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export function LandingPage({ onGetStarted, onSignIn }: LandingPageProps) {
  const services = [
    { icon: <Wrench className="w-6 h-6" />, name: 'Carpentry', color: 'text-blue-600' },
    { icon: <Zap className="w-6 h-6" />, name: 'Electrician', color: 'text-yellow-600' },
    { icon: <Droplet className="w-6 h-6" />, name: 'Plumbing', color: 'text-blue-500' },
    { icon: <PaintBucket className="w-6 h-6" />, name: 'Painting', color: 'text-purple-600' },
    { icon: <Hammer className="w-6 h-6" />, name: 'Masonry', color: 'text-orange-600' },
    { icon: <Car className="w-6 h-6" />, name: 'Auto Repair', color: 'text-red-600' },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Describe Your Need',
      description: 'Tell us what you need - text, voice, or photos',
      icon: <Search className="w-8 h-8" />
    },
    {
      step: 2,
      title: 'Get AI-Matched',
      description: 'Diwalya AI finds the best verified worker for you',
      icon: <Users className="w-8 h-8" />
    },
    {
      step: 3,
      title: 'Track & Pay Securely',
      description: 'Real-time tracking with secure escrow payment',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const trustFeatures = [
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Verified Workers', description: 'All workers background-checked' },
    { icon: <DollarSign className="w-6 h-6" />, title: 'Escrow Payments', description: 'Payment released after completion' },
    { icon: <Clock className="w-6 h-6" />, title: 'Real-Time Tracking', description: 'Know exactly when they arrive' },
    { icon: <Award className="w-6 h-6" />, title: 'Quality Guarantee', description: 'Satisfaction or money back' },
  ];

  const stats = [
    { value: '50K+', label: 'Verified Workers' },
    { value: '4.8/5', label: 'Average Rating' },
    { value: '100K+', label: 'Jobs Completed' },
    { value: '<15min', label: 'Avg Response Time' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="landing" onAuthClick={onSignIn} />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              🚀 Powered by Diwalya AI
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Reliable Skilled Workers.<br />
              <span className="text-accent">Right When You Need Them.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with verified, professional workers on demand. AI-powered matching, secure payments, and real-time tracking.
            </p>
            
            {/* Search Box */}
            <div className="max-w-3xl mx-auto mb-12">
              <Card className="p-2 shadow-xl">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1">
                    <Input
                      placeholder="What service do you need?"
                      icon={<Search className="w-5 h-5" />}
                      className="border-0"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      placeholder="Your location"
                      icon={<MapPin className="w-5 h-5" />}
                      className="border-0"
                    />
                  </div>
                  <Button variant="primary" size="lg" onClick={onGetStarted}>
                    Find Workers
                  </Button>
                </div>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-heading font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section id="services" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Popular Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to planned projects - we have skilled workers for every need
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} hover className="text-center">
                <div className={`${service.color} mb-3 flex justify-center`}>
                  {service.icon}
                </div>
                <h4 className="font-medium">{service.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How Diwalya Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get help in three simple steps - it's that easy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center h-full">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-heading font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="mt-8 mb-4 text-primary flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Trust Diwalya?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Safety, security, and satisfaction - built into every job
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-accent mb-3">{feature.icon}</div>
                <h4 className="font-heading font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Workers CTA */}
      <section id="for-workers" className="py-16 bg-gradient-to-r from-accent to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Are You a Skilled Worker?</h2>
            <p className="text-lg mb-8 text-orange-50">
              Join Diwalya Pro and get more clients, better pay, and flexible work schedules
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-accent hover:bg-white/90">
                Become a Worker
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What People Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Diwalya made it so easy to find a reliable electrician. The AI matching was spot on, and the payment system gave me peace of mind."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                  <div>
                    <div className="font-medium">Customer {i}</div>
                    <div className="text-sm text-muted-foreground">Verified User</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Diwalya for their skilled worker needs
          </p>
          <Button variant="primary" size="lg" onClick={onGetStarted}>
            Request a Service Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4 filter brightness-0 invert">
                <h3 className="font-heading font-bold text-xl">Diwalya</h3>
              </div>
              <p className="text-sm text-blue-100">
                Connecting skilled workers with people who need them - safely, securely, intelligently.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Safety</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">For Workers</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#" className="hover:text-white">Become a Worker</a></li>
                <li><a href="#" className="hover:text-white">Worker Benefits</a></li>
                <li><a href="#" className="hover:text-white">Resources</a></li>
                <li><a href="#" className="hover:text-white">Worker Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-blue-100">
            <p>© 2026 Diwalya. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
