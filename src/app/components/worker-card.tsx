import React from 'react';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import { Badge } from './badge';
import { Card } from './card';

interface WorkerCardProps {
  worker: {
    id: string;
    name: string;
    photo: string;
    rating: number;
    reviewCount: number;
    distance: string;
    skills: string[];
    estimatedPrice: string;
    isBestMatch?: boolean;
    isVerified?: boolean;
  };
  onClick?: () => void;
}

export function WorkerCard({ worker, onClick }: WorkerCardProps) {
  return (
    <Card hover onClick={onClick} className="relative">
      {worker.isBestMatch && (
        <div className="absolute -top-3 left-4">
          <Badge variant="warning" className="shadow-md">
            ✨ Best Match by Diwalya AI
          </Badge>
        </div>
      )}
      
      <div className="flex gap-4">
        {/* Worker Photo */}
        <div className="relative shrink-0">
          <img 
            src={worker.photo} 
            alt={worker.name}
            className="w-20 h-20 rounded-xl object-cover"
          />
          {worker.isVerified && (
            <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        
        {/* Worker Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-heading font-semibold truncate">{worker.name}</h4>
            <span className="text-lg font-semibold text-accent shrink-0">{worker.estimatedPrice}</span>
          </div>
          
          <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-medium text-foreground">{worker.rating}</span>
              <span>({worker.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{worker.distance}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {worker.skills.map((skill, index) => (
              <Badge key={index} variant="primary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
