import React from 'react';
import { Users, Briefcase, DollarSign, TrendingUp, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { DiwalyaLogo } from './diwalya-logo';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Badge } from './badge';

export function AdminDashboard() {
  const stats = {
    totalUsers: 12450,
    totalWorkers: 3280,
    activeJobs: 156,
    totalRevenue: 284500,
    pendingVerifications: 24,
    activeDisputes: 3
  };

  const recentActivity = [
    { type: 'job', user: 'Sarah Johnson', action: 'Completed job', amount: '$120', time: '5 mins ago' },
    { type: 'user', user: 'Mike Chen', action: 'New worker registration', time: '12 mins ago' },
    { type: 'payment', user: 'Emma Davis', action: 'Payment released', amount: '$85', time: '18 mins ago' },
    { type: 'dispute', user: 'John Smith', action: 'Dispute opened', time: '32 mins ago' }
  ];

  const pendingVerifications = [
    { name: 'David Martinez', profession: 'Electrician', submitted: '2 hours ago', documents: 4 },
    { name: 'Lisa Anderson', profession: 'Plumber', submitted: '5 hours ago', documents: 5 },
    { name: 'Robert Wilson', profession: 'Carpenter', submitted: '1 day ago', documents: 3 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Navbar */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <DiwalyaLogo size="sm" />
              <Badge variant="error" className="ml-2">Admin</Badge>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Admin Panel</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-card border-r border-border min-h-screen p-6">
          <nav className="space-y-2">
            {[
              { icon: <TrendingUp className="w-4 h-4" />, label: 'Overview', active: true },
              { icon: <Users className="w-4 h-4" />, label: 'Users' },
              { icon: <Briefcase className="w-4 h-4" />, label: 'Workers' },
              { icon: <Clock className="w-4 h-4" />, label: 'Jobs' },
              { icon: <DollarSign className="w-4 h-4" />, label: 'Payments' },
              { icon: <AlertTriangle className="w-4 h-4" />, label: 'Disputes' },
              { icon: <CheckCircle className="w-4 h-4" />, label: 'Verifications' }
            ].map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  item.active
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-heading font-bold mb-8">Platform Overview</h1>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-8 h-8 text-primary" />
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                  <p className="text-2xl font-heading font-bold">{stats.totalUsers.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-1">+12% this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <Briefcase className="w-8 h-8 text-accent" />
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Active Workers</p>
                  <p className="text-2xl font-heading font-bold">{stats.totalWorkers.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-1">+8% this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Active Jobs</p>
                  <p className="text-2xl font-heading font-bold">{stats.activeJobs}</p>
                  <p className="text-xs text-muted-foreground mt-1">Real-time</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign className="w-8 h-8 text-green-600" />
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                  <p className="text-2xl font-heading font-bold">${stats.totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-1">+15% this month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            activity.type === 'job' ? 'bg-primary/10 text-primary' :
                            activity.type === 'user' ? 'bg-accent/10 text-accent' :
                            activity.type === 'payment' ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                            'bg-red-100 text-red-700 dark:bg-red-900/30'
                          }`}>
                            {activity.type === 'job' ? <Briefcase className="w-5 h-5" /> :
                             activity.type === 'user' ? <Users className="w-5 h-5" /> :
                             activity.type === 'payment' ? <DollarSign className="w-5 h-5" /> :
                             <AlertTriangle className="w-5 h-5" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{activity.user}</p>
                            <p className="text-sm text-muted-foreground">{activity.action}</p>
                          </div>
                          <div className="text-right">
                            {activity.amount && (
                              <p className="font-semibold text-accent">{activity.amount}</p>
                            )}
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Alerts & Actions */}
              <div className="space-y-6">
                <Card className="border-accent/30 bg-accent/5">
                  <CardHeader>
                    <CardTitle className="text-accent">Action Required</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Verifications</p>
                        <p className="text-xs text-muted-foreground">Pending review</p>
                      </div>
                      <Badge variant="warning">{stats.pendingVerifications}</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Disputes</p>
                        <p className="text-xs text-muted-foreground">Need attention</p>
                      </div>
                      <Badge variant="error">{stats.activeDisputes}</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pending Verifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {pendingVerifications.map((worker, index) => (
                      <div key={index} className="p-3 border border-border rounded-lg">
                        <h4 className="font-medium mb-1">{worker.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{worker.profession}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{worker.submitted}</span>
                          <Badge variant="default" className="text-xs">{worker.documents} docs</Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
