import React, { useState } from 'react';
import { LandingPage } from './components/landing-page';
import { AuthPage } from './components/auth-page';
import { UserDashboard } from './components/user-dashboard';
import { ServiceRequest } from './components/service-request';
import { WorkerMatching } from './components/worker-matching';
import { JobTracking } from './components/job-tracking';
import { PaymentReview } from './components/payment-review';
import { WorkerDashboard } from './components/worker-dashboard';
import { AdminDashboard } from './components/admin-dashboard';
import { AICopilot } from './components/ai-copilot';

type AppView = 
  | 'landing' 
  | 'auth' 
  | 'user-dashboard' 
  | 'service-request' 
  | 'worker-matching' 
  | 'job-tracking' 
  | 'payment-review'
  | 'worker-dashboard'
  | 'admin-dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');

  // Navigation functions
  const goToAuth = () => setCurrentView('auth');
  const goToUserDashboard = () => setCurrentView('user-dashboard');
  const goToServiceRequest = () => setCurrentView('service-request');
  const goToWorkerMatching = () => setCurrentView('worker-matching');
  const goToJobTracking = () => setCurrentView('job-tracking');
  const goToPaymentReview = () => setCurrentView('payment-review');
  const goToLanding = () => setCurrentView('landing');

  // Demo mode - Quick access buttons
  const DemoControls = () => (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-card border border-border rounded-xl shadow-xl p-4 max-w-xs">
        <h4 className="font-heading font-semibold mb-3 text-sm">Demo Navigation</h4>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={goToLanding}
            className="px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded-lg transition-colors"
          >
            Landing
          </button>
          <button
            onClick={goToAuth}
            className="px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded-lg transition-colors"
          >
            Auth
          </button>
          <button
            onClick={goToUserDashboard}
            className="px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded-lg transition-colors"
          >
            User
          </button>
          <button
            onClick={() => setCurrentView('worker-dashboard')}
            className="px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded-lg transition-colors"
          >
            Worker
          </button>
          <button
            onClick={() => setCurrentView('admin-dashboard')}
            className="px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded-lg transition-colors col-span-2"
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentView === 'landing' && (
        <LandingPage 
          onGetStarted={goToAuth}
          onSignIn={goToAuth}
        />
      )}

      {currentView === 'auth' && (
        <AuthPage 
          onComplete={goToUserDashboard}
          onBack={goToLanding}
        />
      )}

      {currentView === 'user-dashboard' && (
        <UserDashboard 
          onRequestService={goToServiceRequest}
        />
      )}

      {currentView === 'service-request' && (
        <ServiceRequest 
          onComplete={goToWorkerMatching}
          onBack={goToUserDashboard}
        />
      )}

      {currentView === 'worker-matching' && (
        <WorkerMatching 
          onSelectWorker={goToJobTracking}
          onBack={goToServiceRequest}
        />
      )}

      {currentView === 'job-tracking' && (
        <JobTracking 
          onComplete={goToPaymentReview}
          onBack={goToUserDashboard}
        />
      )}

      {currentView === 'payment-review' && (
        <PaymentReview 
          onComplete={goToUserDashboard}
          onBack={goToJobTracking}
        />
      )}

      {currentView === 'worker-dashboard' && (
        <WorkerDashboard />
      )}

      {currentView === 'admin-dashboard' && (
        <AdminDashboard />
      )}

      {/* AI Copilot - Available on all user-facing pages */}
      {!['landing', 'auth', 'admin-dashboard'].includes(currentView) && (
        <AICopilot />
      )}

      <DemoControls />
    </>
  );
}