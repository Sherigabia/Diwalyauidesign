import React from 'react';
import { Plus, Clock, CheckCircle, Wallet, MapPin, Star, MessageCircle, Phone } from 'lucide-react';
import { Navbar } from './navbar';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Badge } from './badge';

interface UserDashboardProps {
  onRequestService: () => void;
  userName?: string;
}

export function UserDashboard({ onRequestService, userName = 'Alex' }: UserDashboardProps) {
  const activeJob = {
    id: 'JOB-001',
    service: 'Electrical Repair',
    status: 'In Progress',
    worker: {
      name: 'Michael Chen',
      photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 4.9
    },
    eta: '15 mins',
    location: '123 Main Street, Apt 4B'
  };

  const jobHistory = [
    {
      id: 'JOB-002',
      service: 'Plumbing Repair',
      date: 'Jan 10, 2026',
      worker: 'Sarah Johnson',
      amount: '$85',
      rating: 5
    },
    {
      id: 'JOB-003',
      service: 'Carpentry Work',
      date: 'Jan 5, 2026',
      worker: 'David Williams',
      amount: '$120',
      rating: 5
    },
    {
      id: 'JOB-004',
      service: 'Painting',
      date: 'Dec 28, 2025',
      worker: 'Emma Davis',
      amount: '$200',
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="app" />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">
            Welcome back, {userName}! 👋
          </h1>
          <p className="text-muted-foreground">
            Ready to get things done? Request a skilled worker or track your active jobs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Primary Action Card */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-2">
                    Need a Skilled Worker?
                  </h2>
                  <p className="text-blue-100 mb-4">
                    Get matched with verified professionals in minutes
                  </p>
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="bg-accent hover:bg-accent/90"
                    onClick={onRequestService}
                  >
                    <Plus className="w-5 h-5" />
                    Request Service
                  </Button>
                </div>
                <div className="hidden md:block text-8xl opacity-20">🔧</div>
              </div>
            </Card>

            {/* Active Job */}
            {activeJob && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Active Job</CardTitle>
                    <Badge variant="success">
                      <Clock className="w-3 h-3" />
                      {activeJob.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={activeJob.worker.photo}
                        alt={activeJob.worker.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{activeJob.worker.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{activeJob.service}</p>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-medium">{activeJob.worker.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="warning" className="mb-2">
                          ETA: {activeJob.eta}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{activeJob.location}</span>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageCircle className="w-4 h-4" />
                        Chat
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                      <Button variant="primary" size="sm" className="flex-1">
                        Track Job
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Job History */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobHistory.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{job.service}</h4>
                        <p className="text-sm text-muted-foreground">
                          {job.worker} • {job.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold">{job.amount}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium">{job.rating}</span>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wallet */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="w-5 h-5" />
                  Wallet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <p className="text-sm text-muted-foreground mb-2">Available Balance</p>
                  <p className="text-3xl font-heading font-bold text-accent">$250.00</p>
                  <Button variant="outline" size="sm" fullWidth className="mt-4">
                    Add Funds
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Jobs</span>
                  <span className="font-semibold text-xl">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Avg Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-xl">4.9</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Money Saved</span>
                  <span className="font-semibold text-xl text-green-600">$480</span>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm p-3 bg-accent/10 border border-accent/20 rounded-lg">
                  <p className="font-medium text-accent mb-1">Special Offer!</p>
                  <p className="text-muted-foreground">Get 10% off your next electrical service</p>
                </div>
                <div className="text-sm p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium mb-1">New worker nearby</p>
                  <p className="text-muted-foreground">3 new plumbers joined in your area</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
