import React from 'react';
import { Check, Clock } from 'lucide-react';

interface TimelineItem {
  title: string;
  time: string;
  status: 'completed' | 'current' | 'pending';
}

interface StatusTimelineProps {
  items: TimelineItem[];
}

export function StatusTimeline({ items }: StatusTimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                item.status === 'completed'
                  ? 'bg-accent text-white'
                  : item.status === 'current'
                  ? 'bg-primary text-white ring-4 ring-primary/20'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {item.status === 'completed' ? (
                <Check className="w-5 h-5" />
              ) : item.status === 'current' ? (
                <Clock className="w-5 h-5" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-current"></div>
              )}
            </div>
            {index < items.length - 1 && (
              <div className={`w-0.5 h-12 ${
                item.status === 'completed' ? 'bg-accent' : 'bg-muted'
              }`}></div>
            )}
          </div>
          
          <div className="flex-1 pb-2">
            <h4 className={`font-medium ${
              item.status === 'current' ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {item.title}
            </h4>
            <p className="text-sm text-muted-foreground">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
