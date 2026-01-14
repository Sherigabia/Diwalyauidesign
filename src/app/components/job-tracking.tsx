import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Phone, AlertCircle, MapPin, Star, Clock, User } from 'lucide-react';
import { Navbar } from './navbar';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Badge } from './badge';
import { StatusTimeline } from './status-timeline';

interface JobTrackingProps {
  onComplete: () => void;
  onBack: () => void;
}

export function JobTracking({ onComplete, onBack }: JobTrackingProps) {
  const [activeTab, setActiveTab] = useState<'status' | 'chat'>('status');

  const jobDetails = {
    id: 'JOB-001',
    service: 'Electrical Repair',
    status: 'In Progress',
    worker: {
      name: 'Michael Chen',
      photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 4.9,
      phone: '+1 (555) 123-4567'
    },
    location: '123 Main Street, Apt 4B',
    startTime: '2:30 PM',
    estimatedCompletion: '4:30 PM',
    price: '$95'
  };

  const timeline = [
    { title: 'Job Accepted', time: '2:15 PM', status: 'completed' as const },
    { title: 'Worker En Route', time: '2:25 PM', status: 'completed' as const },
    { title: 'Work In Progress', time: '2:45 PM', status: 'current' as const },
    { title: 'Quality Check', time: 'Est. 4:15 PM', status: 'pending' as const },
    { title: 'Job Complete', time: 'Est. 4:30 PM', status: 'pending' as const }
  ];

  const messages = [
    { sender: 'worker', text: "Hi! I'm on my way to your location. Should arrive in about 10 minutes.", time: '2:25 PM' },
    { sender: 'user', text: "Great! I'll be waiting at the front entrance.", time: '2:26 PM' },
    { sender: 'worker', text: "I've arrived and started inspecting the electrical panel. Found the issue - it's a faulty breaker.", time: '2:45 PM' },
    { sender: 'worker', text: "I have the replacement part. Should take about 45 minutes to complete.", time: '2:47 PM' },
    { sender: 'user', text: "Perfect, thank you for the update!", time: '2:48 PM' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="app" />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold mb-2">Job Tracking</h1>
              <p className="text-muted-foreground">Track your job in real-time</p>
            </div>
            <Badge variant="success" className="text-base px-4 py-2">
              <Clock className="w-4 h-4" />
              {jobDetails.status}
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Map Placeholder */}
            <Card>
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-accent mx-auto mb-2" />
                    <p className="font-medium">Live Location Tracking</p>
                    <p className="text-sm text-muted-foreground">{jobDetails.location}</p>
                  </div>
                </div>
                {/* Simulated map pin */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse shadow-lg"></div>
                </div>
              </div>
            </Card>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-border">
              <button
                onClick={() => setActiveTab('status')}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === 'status'
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Status Timeline
                {activeTab === 'status' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === 'chat'
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Messages
                {activeTab === 'chat' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                )}
              </button>
            </div>

            {/* Tab Content */}
            <Card>
              {activeTab === 'status' ? (
                <CardContent className="pt-6">
                  <StatusTimeline items={timeline} />
                </CardContent>
              ) : (
                <CardContent className="pt-6">
                  {/* Chat Messages */}
                  <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                          <div
                            className={`px-4 py-3 rounded-xl ${
                              message.sender === 'user'
                                ? 'bg-accent text-white'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 px-2">
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <Button variant="primary">Send</Button>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Worker Info */}
            <Card>
              <CardHeader>
                <CardTitle>Worker Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={jobDetails.worker.photo}
                    alt={jobDetails.worker.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{jobDetails.worker.name}</h4>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{jobDetails.worker.rating}</span>
                    </div>
                    <Badge variant="success" className="text-xs">Verified Pro</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button variant="primary" size="sm" fullWidth>
                    <Phone className="w-4 h-4" />
                    Call Worker
                  </Button>
                  <Button variant="outline" size="sm" fullWidth>
                    <MessageCircle className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Job Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service</span>
                  <span className="font-medium">{jobDetails.service}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Started</span>
                  <span className="font-medium">{jobDetails.startTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Est. Completion</span>
                  <span className="font-medium">{jobDetails.estimatedCompletion}</span>
                </div>
                <div className="flex justify-between text-sm pt-3 border-t border-border">
                  <span className="text-muted-foreground">Estimated Cost</span>
                  <span className="font-semibold text-accent text-base">{jobDetails.price}</span>
                </div>
              </CardContent>
            </Card>

            {/* Safety & Support */}
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Safety & Support</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Need help or have concerns? We're here 24/7.
                    </p>
                    <Button variant="outline" size="sm" fullWidth>
                      Contact Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Complete Job Button */}
            <Button variant="primary" size="lg" fullWidth onClick={onComplete}>
              Mark as Complete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
