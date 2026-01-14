import React, { useState } from 'react';
import { ArrowLeft, Shield, CreditCard, Wallet, CheckCircle, Star, DollarSign } from 'lucide-react';
import { Navbar } from './navbar';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Badge } from './badge';
import { Textarea } from './input';

interface PaymentReviewProps {
  onComplete: () => void;
  onBack: () => void;
}

export function PaymentReview({ onComplete, onBack }: PaymentReviewProps) {
  const [step, setStep] = useState<'payment' | 'review'>('payment');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedFeedback, setSelectedFeedback] = useState<string[]>([]);
  const [review, setReview] = useState('');
  const [tipAmount, setTipAmount] = useState(0);

  const jobDetails = {
    id: 'JOB-001',
    service: 'Electrical Repair',
    worker: {
      name: 'Michael Chen',
      photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    },
    subtotal: 95,
    serviceFee: 9.50,
    total: 104.50,
    duration: '2 hours',
    completedAt: 'Jan 13, 2026 at 4:30 PM'
  };

  const feedbackOptions = [
    'Professional',
    'On Time',
    'Quality Work',
    'Clean Workspace',
    'Great Communication',
    'Fair Pricing'
  ];

  const tipOptions = [
    { label: '10%', value: jobDetails.subtotal * 0.1 },
    { label: '15%', value: jobDetails.subtotal * 0.15 },
    { label: '20%', value: jobDetails.subtotal * 0.2 },
    { label: 'Custom', value: 0 }
  ];

  const handleFeedbackToggle = (feedback: string) => {
    setSelectedFeedback(prev =>
      prev.includes(feedback)
        ? prev.filter(f => f !== feedback)
        : [...prev, feedback]
    );
  };

  const handlePayment = () => {
    setStep('review');
  };

  const handleSubmitReview = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="app" />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-3xl font-heading font-bold mb-2">
            {step === 'payment' ? 'Complete Payment' : 'Rate Your Experience'}
          </h1>
          <p className="text-muted-foreground">
            {step === 'payment' 
              ? 'Release payment from escrow after reviewing the work'
              : 'Help others by sharing your experience'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 'payment' ? (
              <Card>
                {/* Escrow Status */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-t-xl border-b border-border">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Secure Escrow Payment</h3>
                      <p className="text-sm text-muted-foreground">
                        Your payment has been held securely in escrow. Review the work and release payment when satisfied.
                      </p>
                    </div>
                  </div>
                </div>

                <CardContent className="pt-6 space-y-6">
                  {/* Job Summary */}
                  <div>
                    <h4 className="font-medium mb-3">Job Completed</h4>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                      <img
                        src={jobDetails.worker.photo}
                        alt={jobDetails.worker.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{jobDetails.worker.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{jobDetails.service}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Duration: {jobDetails.duration}</span>
                          <span>•</span>
                          <span>{jobDetails.completedAt}</span>
                        </div>
                      </div>
                      <Badge variant="success">Completed</Badge>
                    </div>
                  </div>

                  {/* Add Tip */}
                  <div>
                    <h4 className="font-medium mb-3">Add a Tip (Optional)</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {tipOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => setTipAmount(option.value)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            tipAmount === option.value
                              ? 'border-accent bg-accent/5'
                              : 'border-border hover:border-accent/50'
                          }`}
                        >
                          <span className="font-semibold">{option.label}</span>
                          {option.value > 0 && (
                            <p className="text-sm text-muted-foreground mt-1">
                              ${option.value.toFixed(2)}
                            </p>
                          )}
                        </button>
                      ))}
                    </div>
                    {tipAmount > 0 && (
                      <p className="text-sm text-accent mt-3">
                        ✨ Great! You're adding a ${tipAmount.toFixed(2)} tip
                      </p>
                    )}
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h4 className="font-medium mb-3">Payment Method</h4>
                    <div className="space-y-2">
                      <button className="w-full flex items-center justify-between p-4 bg-muted/50 rounded-xl border-2 border-accent">
                        <div className="flex items-center gap-3">
                          <Wallet className="w-5 h-5 text-accent" />
                          <div className="text-left">
                            <p className="font-medium">Diwalya Wallet</p>
                            <p className="text-sm text-muted-foreground">Balance: $250.00</p>
                          </div>
                        </div>
                        <CheckCircle className="w-5 h-5 text-accent" />
                      </button>
                      <button className="w-full flex items-center gap-3 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                        <CreditCard className="w-5 h-5 text-muted-foreground" />
                        <div className="text-left">
                          <p className="font-medium">Credit Card</p>
                          <p className="text-sm text-muted-foreground">•••• 4242</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Action */}
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth 
                    onClick={handlePayment}
                  >
                    Release Payment (${(jobDetails.total + tipAmount).toFixed(2)})
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6 space-y-6">
                  {/* Rating */}
                  <div className="text-center">
                    <h3 className="font-heading font-semibold mb-4">How was your experience?</h3>
                    <div className="flex justify-center gap-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-12 h-12 ${
                              star <= (hoveredRating || rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-muted'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {rating > 0 && (
                      <p className="text-muted-foreground">
                        {rating === 5 ? 'Excellent!' : rating === 4 ? 'Great!' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Needs Improvement'}
                      </p>
                    )}
                  </div>

                  {/* Quick Feedback */}
                  <div>
                    <h4 className="font-medium mb-3">Quick Feedback</h4>
                    <div className="flex flex-wrap gap-2">
                      {feedbackOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleFeedbackToggle(option)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedFeedback.includes(option)
                              ? 'bg-accent text-white'
                              : 'bg-muted hover:bg-muted/80'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Review */}
                  <Textarea
                    label="Share More Details (Optional)"
                    placeholder="Tell us about your experience with this worker..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    rows={4}
                  />

                  {/* Submit */}
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth 
                    onClick={handleSubmitReview}
                    disabled={rating === 0}
                  >
                    Submit Review
                  </Button>
                  <button 
                    className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={handleSubmitReview}
                  >
                    Skip for now
                  </button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Price Breakdown */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service Cost</span>
                  <span className="font-medium">${jobDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service Fee (10%)</span>
                  <span className="font-medium">${jobDetails.serviceFee.toFixed(2)}</span>
                </div>
                {tipAmount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tip</span>
                    <span className="font-medium text-accent">${tipAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-xl text-accent">
                      ${(jobDetails.total + tipAmount).toFixed(2)}
                    </span>
                  </div>
                </div>

                {step === 'payment' && (
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Shield className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>
                        Payment is securely held in escrow until you approve. You have 24 hours to report any issues.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {step === 'review' && (
              <Card className="mt-4 bg-accent/5 border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium mb-1">Payment Released!</p>
                      <p className="text-muted-foreground">
                        Your payment of ${(jobDetails.total + tipAmount).toFixed(2)} has been released to {jobDetails.worker.name}.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
