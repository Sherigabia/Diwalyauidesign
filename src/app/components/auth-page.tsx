import React, { useState } from 'react';
import { Mail, Phone, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { DiwalyaLogo } from './diwalya-logo';
import { Button } from './button';
import { Input } from './input';
import { Card } from './card';

interface AuthPageProps {
  onComplete: () => void;
  onBack: () => void;
}

export function AuthPage({ onComplete, onBack }: AuthPageProps) {
  const [mode, setMode] = useState<'signin' | 'signup' | 'otp'>('signin');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpSubmit = () => {
    // Simulate OTP verification
    if (otp.join('').length === 6) {
      onComplete();
    }
  };

  if (mode === 'otp') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <button
            onClick={() => setMode('signin')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-2">Enter OTP</h2>
            <p className="text-muted-foreground">
              We sent a code to {phoneNumber}
            </p>
          </div>

          <div className="flex gap-2 justify-center mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-12 h-14 text-center text-2xl font-bold bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
              />
            ))}
          </div>

          <Button
            variant="primary"
            fullWidth
            onClick={handleOtpSubmit}
            disabled={otp.join('').length !== 6}
          >
            Verify & Continue
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Didn't receive code?{' '}
            <button className="text-accent hover:underline">Resend</button>
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden md:block">
          <DiwalyaLogo size="lg" className="mb-8" />
          <h1 className="text-4xl font-heading font-bold mb-4">
            Welcome to Diwalya
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your trusted platform for connecting with verified skilled workers on demand.
          </p>
          
          <div className="space-y-4">
            {[
              'AI-powered worker matching',
              'Secure escrow payments',
              'Real-time job tracking',
              'Verified professionals only'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <Card>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 md:hidden"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="text-center md:text-left mb-8">
            <h2 className="text-2xl font-heading font-bold mb-2">
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
            </h2>
            <p className="text-muted-foreground">
              {mode === 'signin' 
                ? 'Welcome back! Please enter your details.' 
                : 'Join Diwalya to get started.'}
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone Number */}
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 000-0000"
              icon={<Phone className="w-5 h-5" />}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {mode === 'signup' && (
              <>
                <Input
                  label="Email (Optional)"
                  type="email"
                  placeholder="your@email.com"
                  icon={<Mail className="w-5 h-5" />}
                />
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                />
              </>
            )}

            <Button
              variant="primary"
              fullWidth
              onClick={() => setMode('otp')}
              disabled={!phoneNumber}
            >
              {mode === 'signin' ? 'Send OTP' : 'Create Account'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" type="button">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                className="text-accent hover:underline font-medium"
              >
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">
            By continuing, you agree to Diwalya's{' '}
            <a href="#" className="text-accent hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-accent hover:underline">Privacy Policy</a>
          </p>
        </Card>
      </div>
    </div>
  );
}
