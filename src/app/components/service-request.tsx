import React, { useState } from 'react';
import { ArrowLeft, Wrench, Hammer, Zap, Droplet, PaintBucket, Car, Camera, Mic, MapPin, DollarSign, Clock, Sparkles } from 'lucide-react';
import { Navbar } from './navbar';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Input, Textarea } from './input';
import { ProgressSteps } from './progress-steps';
import { Badge } from './badge';

interface ServiceRequestProps {
  onComplete: (data: any) => void;
  onBack: () => void;
}

export function ServiceRequest({ onComplete, onBack }: ServiceRequestProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    location: '123 Main Street, Apt 4B',
    urgency: 'normal',
    budget: ''
  });

  const services = [
    { id: 'carpentry', icon: <Wrench className="w-8 h-8" />, name: 'Carpentry', color: 'bg-blue-100 text-blue-700' },
    { id: 'electrical', icon: <Zap className="w-8 h-8" />, name: 'Electrician', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'plumbing', icon: <Droplet className="w-8 h-8" />, name: 'Plumbing', color: 'bg-blue-100 text-blue-600' },
    { id: 'painting', icon: <PaintBucket className="w-8 h-8" />, name: 'Painting', color: 'bg-purple-100 text-purple-700' },
    { id: 'masonry', icon: <Hammer className="w-8 h-8" />, name: 'Masonry', color: 'bg-orange-100 text-orange-700' },
    { id: 'auto', icon: <Car className="w-8 h-8" />, name: 'Auto Repair', color: 'bg-red-100 text-red-700' },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="app" />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-3xl font-heading font-bold mb-2">Request a Service</h1>
          <p className="text-muted-foreground">Tell us what you need - we'll find the perfect worker</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <ProgressSteps
            steps={['Category', 'Details', 'Location', 'Review']}
            currentStep={step}
          />
        </div>

        {/* Step Content */}
        <Card>
          {/* Step 1: Category */}
          {step === 1 && (
            <div>
              <CardHeader>
                <CardTitle>What service do you need?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setFormData({ ...formData, category: service.id })}
                      className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                        formData.category === service.id
                          ? 'border-accent bg-accent/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className={`${service.color} rounded-xl p-3 inline-flex mb-3`}>
                        {service.icon}
                      </div>
                      <h4 className="font-medium">{service.name}</h4>
                    </button>
                  ))}
                </div>
              </CardContent>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div>
              <CardHeader>
                <CardTitle>Describe what you need</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Textarea
                  label="Problem Description"
                  placeholder="Please describe the issue or work needed..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={5}
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1">
                    <Camera className="w-4 h-4" />
                    Add Photos
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Mic className="w-4 h-4" />
                    Voice Input
                  </Button>
                </div>

                <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
                  <div className="flex gap-3 p-4">
                    <Sparkles className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">AI Suggestion</h4>
                      <p className="text-sm text-muted-foreground">
                        Based on your description, we recommend a certified electrician with experience in residential wiring.
                      </p>
                    </div>
                  </div>
                </Card>
              </CardContent>
            </div>
          )}

          {/* Step 3: Location & Urgency */}
          {step === 3 && (
            <div>
              <CardHeader>
                <CardTitle>Location & Timing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Input
                  label="Service Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  icon={<MapPin className="w-5 h-5" />}
                />

                <div>
                  <label className="block mb-3 font-medium">When do you need this?</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setFormData({ ...formData, urgency: 'normal' })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.urgency === 'normal'
                          ? 'border-accent bg-accent/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <Clock className="w-6 h-6 mb-2 mx-auto text-primary" />
                      <h4 className="font-medium mb-1">Normal</h4>
                      <p className="text-sm text-muted-foreground">Within 24-48 hours</p>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, urgency: 'emergency' })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.urgency === 'emergency'
                          ? 'border-accent bg-accent/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <Zap className="w-6 h-6 mb-2 mx-auto text-accent" />
                      <h4 className="font-medium mb-1">Emergency</h4>
                      <p className="text-sm text-muted-foreground">ASAP (2-4 hours)</p>
                      <Badge variant="warning" className="mt-2">+50% fee</Badge>
                    </button>
                  </div>
                </div>

                <Input
                  label="Budget Range (Optional)"
                  type="text"
                  placeholder="e.g., $100 - $200"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  icon={<DollarSign className="w-5 h-5" />}
                />
              </CardContent>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div>
              <CardHeader>
                <CardTitle>Review Your Request</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between p-4 bg-muted/50 rounded-xl">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-medium capitalize">{formData.category}</span>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <span className="text-muted-foreground block mb-2">Description</span>
                    <p className="font-medium">{formData.description || 'No description provided'}</p>
                  </div>
                  <div className="flex justify-between p-4 bg-muted/50 rounded-xl">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{formData.location}</span>
                  </div>
                  <div className="flex justify-between p-4 bg-muted/50 rounded-xl">
                    <span className="text-muted-foreground">Urgency</span>
                    <Badge variant={formData.urgency === 'emergency' ? 'warning' : 'default'}>
                      {formData.urgency === 'emergency' ? 'Emergency' : 'Normal'}
                    </Badge>
                  </div>
                  {formData.budget && (
                    <div className="flex justify-between p-4 bg-muted/50 rounded-xl">
                      <span className="text-muted-foreground">Budget</span>
                      <span className="font-medium">{formData.budget}</span>
                    </div>
                  )}
                </div>

                <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
                  <div className="flex gap-3 p-4">
                    <Sparkles className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Diwalya AI is ready to help!</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll match you with 3-5 verified workers who are perfect for your job.
                      </p>
                    </div>
                  </div>
                </Card>
              </CardContent>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 p-6 border-t border-border">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Previous
              </Button>
            )}
            <Button
              variant="primary"
              onClick={handleNext}
              fullWidth={step === 1}
              className="ml-auto"
              disabled={step === 1 && !formData.category}
            >
              {step === 4 ? 'Find Workers' : 'Continue'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
