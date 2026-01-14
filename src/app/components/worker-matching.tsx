import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Filter } from 'lucide-react';
import { Navbar } from './navbar';
import { Button } from './button';
import { WorkerCard } from './worker-card';
import { Card } from './card';

interface WorkerMatchingProps {
  onSelectWorker: (workerId: string) => void;
  onBack: () => void;
}

export function WorkerMatching({ onSelectWorker, onBack }: WorkerMatchingProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const workers = [
    {
      id: '1',
      name: 'Michael Chen',
      photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 4.9,
      reviewCount: 127,
      distance: '2.3 km',
      skills: ['Electrical', 'Wiring', 'Panel Upgrade'],
      estimatedPrice: '$85-120',
      isBestMatch: true,
      isVerified: true
    },
    {
      id: '2',
      name: 'David Martinez',
      photo: 'https://images.unsplash.com/photo-1735875530804-d661ca2001da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 4.8,
      reviewCount: 98,
      distance: '3.1 km',
      skills: ['Electrical', 'Smart Home', 'Lighting'],
      estimatedPrice: '$75-110',
      isVerified: true
    },
    {
      id: '3',
      name: 'James Wilson',
      photo: 'https://images.unsplash.com/photo-1765648580890-732fa6d769c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 4.7,
      reviewCount: 84,
      distance: '4.5 km',
      skills: ['Electrical', 'Commercial', 'Industrial'],
      estimatedPrice: '$90-130',
      isVerified: true
    },
    {
      id: '4',
      name: 'Robert Thompson',
      photo: 'https://images.unsplash.com/photo-1678803262992-d79d06dd5d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
      rating: 4.6,
      reviewCount: 72,
      distance: '5.2 km',
      skills: ['Electrical', 'Repairs', 'Maintenance'],
      estimatedPrice: '$70-100',
      isVerified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="app" />
      
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-3xl font-heading font-bold mb-2">Available Workers</h1>
          <p className="text-muted-foreground">
            AI-matched and verified professionals ready to help
          </p>
        </div>

        {/* AI Insight Card */}
        <Card className="mb-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
          <div className="flex gap-3 p-4">
            <Sparkles className="w-6 h-6 text-accent shrink-0" />
            <div className="flex-1">
              <h3 className="font-heading font-semibold mb-1">Diwalya AI Recommendations</h3>
              <p className="text-sm text-muted-foreground">
                Based on your electrical repair needs, location, and urgency, we've ranked these workers from best to good match. 
                The top worker has completed 15+ similar jobs in your area.
              </p>
            </div>
          </div>
        </Card>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
          </div>
          {['All', 'Highest Rated', 'Nearest', 'Lowest Price'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter.toLowerCase())}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === filter.toLowerCase()
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Workers List */}
        <div className="space-y-4">
          {workers.map((worker) => (
            <WorkerCard
              key={worker.id}
              worker={worker}
              onClick={() => onSelectWorker(worker.id)}
            />
          ))}
        </div>

        {/* Empty State Message */}
        <div className="text-center mt-8 p-8 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground">
            Can't find the right worker?{' '}
            <button className="text-accent hover:underline font-medium">
              Adjust your filters
            </button>
            {' '}or{' '}
            <button className="text-accent hover:underline font-medium">
              expand your search area
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
