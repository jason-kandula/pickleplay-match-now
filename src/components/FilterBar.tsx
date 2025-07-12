
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, MapPin, Star, Clock } from 'lucide-react';

const FilterBar = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Pro'];
  const distances = ['< 1mi', '< 3mi', '< 5mi', '< 10mi'];
  const playStyles = ['Casual', 'Competitive', 'Dinking'];

  return (
    <div className="p-4 border-b border-border/50 bg-card/50">
      <div className="flex items-center space-x-2 mb-3">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Filters</span>
        {activeFilters.length > 0 && (
          <Badge variant="secondary" className="text-xs">
            {activeFilters.length} active
          </Badge>
        )}
      </div>
      
      <div className="space-y-3">
        {/* Distance Filter */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Distance</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {distances.map((distance) => (
              <Button
                key={distance}
                variant={activeFilters.includes(distance) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(distance)}
                className={`text-xs ${
                  activeFilters.includes(distance) 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary/50 hover:bg-secondary'
                }`}
              >
                {distance}
              </Button>
            ))}
          </div>
        </div>

        {/* Skill Level Filter */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Star className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Skill Level</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillLevels.map((skill) => (
              <Button
                key={skill}
                variant={activeFilters.includes(skill) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(skill)}
                className={`text-xs ${
                  activeFilters.includes(skill) 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary/50 hover:bg-secondary'
                }`}
              >
                {skill}
              </Button>
            ))}
          </div>
        </div>

        {/* Play Style Filter */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Play Style</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {playStyles.map((style) => (
              <Button
                key={style}
                variant={activeFilters.includes(style) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(style)}
                className={`text-xs ${
                  activeFilters.includes(style) 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary/50 hover:bg-secondary'
                }`}
              >
                {style}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {activeFilters.length > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveFilters([])}
          className="mt-3 text-xs text-muted-foreground hover:text-foreground"
        >
          Clear all filters
        </Button>
      )}
    </div>
  );
};

export default FilterBar;
