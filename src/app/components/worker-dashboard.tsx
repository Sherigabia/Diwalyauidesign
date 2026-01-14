import React, { useState } from 'react';
import { TrendingUp, DollarSign, Star, Clock, CheckCircle, X, MapPin, Briefcase } from 'lucide-react';
import { Navbar } from './navbar';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Badge } from './badge';

export function WorkerDashboard() {
  const [isAvailable, setIsAvailable] = useState(true);

  const stats = {
    todayEarnings: 285,
    weekEarnings: 1240,
    rating: 4.9,
    completedJobs: 127,
    activeJobs: 2
  };

  const jobRequests = [
    {
      id: '1',
      service: 'Electrical Repair',
      location: '456 Oak Street',
      distance: '2.3 km',
      estimatedPay: '$95',
      urgency: 'normal',
      description: 'Kitchen outlet not working, needs inspection',
      postedTime: '5 mins ago'
    },
    {
      id: '2',
      service: 'Emergency Electrical',
      location: '789 Pine Avenue',
      distance: '4.1 km',
      estimatedPay: '$180',
      urgency: 'emergency',
      description: 'Circuit breaker keeps tripping',
      postedTime: '12 mins ago'
    }
  ];

  const activeJobs = [
    {
      id: 'JOB-001',
      service: 'Panel Upgrade',
      customer: 'Sarah Johnson',
      location: '123 Main St',
      status: 'In Progress',
      startTime: '2:30 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="app" />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-heading font-bold mb-2">Diwalya Pro Dashboard</h1>
              <p className="text-muted-foreground">Manage your jobs and earnings</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">
                {isAvailable ? 'Available' : 'Unavailable'}
              </span>
              <button
                onClick={() => setIsAvailable(!isAvailable)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  isAvailable ? 'bg-accent' : 'bg-muted'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    isAvailable ? 'translate-x-7' : 'translate-x-1'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-accent to-accent/80 text-white border-0">
                <CardContent className="pt-6">
                  <DollarSign className="w-8 h-8 mb-2 opacity-80" />
                  <p className="text-sm opacity-90 mb-1">Today's Earnings</p>
                  <p className="text-3xl font-heading font-bold">${stats.todayEarnings}</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
                  <p className="text-sm opacity-90 mb-1">This Week</p>
                  <p className="text-3xl font-heading font-bold">${stats.weekEarnings}</p>
                </CardContent>
              </Card>
            </div>

            {/* Active Jobs */}
            {activeJobs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Active Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  {activeJobs.map((job) => (
                    <div key={job.id} className="p-4 bg-accent/5 border border-accent/20 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold mb-1">{job.service}</h4>
                          <p className="text-sm text-muted-foreground">{job.customer}</p>
                        </div>
                        <Badge variant="success">
                          <Clock className="w-3 h-3" />
                          {job.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="primary" size="sm" className="flex-1">
                          Navigate
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Contact Customer
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Job Requests */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>New Job Requests</CardTitle>
                  <Badge>{jobRequests.length} Available</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {jobRequests.map((job) => (
                  <div
                    key={job.id}
                    className="p-4 border border-border rounded-xl hover:border-accent/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{job.service}</h4>
                          {job.urgency === 'emergency' && (
                            <Badge variant="warning">Emergency</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.distance}</span>
                          </div>
                          <span>•</span>
                          <span>{job.postedTime}</span>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-xl font-semibold text-accent">{job.estimatedPay}</p>
                        <p className="text-xs text-muted-foreground">Estimated</p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-3 border-t border-border">
                      <Button variant="primary" size="sm" className="flex-1">
                        <CheckCircle className="w-4 h-4" />
                        Accept
                      </Button>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Your Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-xl">{stats.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Jobs Completed</span>
                  <span className="font-semibold text-xl">{stats.completedJobs}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Acceptance Rate</span>
                  <span className="font-semibold text-xl text-green-600">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">On-Time Rate</span>
                  <span className="font-semibold text-xl text-green-600">98%</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" fullWidth className="justify-start">
                  <Briefcase className="w-4 h-4" />
                  View All Jobs
                </Button>
                <Button variant="outline" size="sm" fullWidth className="justify-start">
                  <DollarSign className="w-4 h-4" />
                  Withdraw Earnings
                </Button>
                <Button variant="outline" size="sm" fullWidth className="justify-start">
                  <Star className="w-4 h-4" />
                  My Reviews
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-semibold mb-2">Boost Your Earnings!</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Workers who respond within 5 minutes earn 30% more on average.
                </p>
                <Button variant="outline" size="sm" fullWidth>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
