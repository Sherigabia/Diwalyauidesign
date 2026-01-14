import React from 'react';
import { Wrench, Briefcase, Users } from 'lucide-react';
import { Button } from './button';

interface EmptyStateProps {
  type?: 'jobs' | 'workers' | 'general';
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ 
  type = 'general', 
  title, 
  description, 
  action 
}: EmptyStateProps) {
  const icons = {
    jobs: <Briefcase className="w-16 h-16" />,
    workers: <Users className="w-16 h-16" />,
    general: <Wrench className="w-16 h-16" />
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6">
        <div className="text-muted-foreground">
          {icons[type]}
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-md mb-6">{description}</p>
      {action && (
        <Button variant="primary" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
