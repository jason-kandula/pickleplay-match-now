
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, ZapOff } from 'lucide-react';

const LiveStatusToggle = () => {
  const [isLive, setIsLive] = useState(false);

  const toggleLiveStatus = () => {
    setIsLive(!isLive);
  };

  return (
    <div className="w-full p-4">
      <Button
        onClick={toggleLiveStatus}
        className={`w-full h-14 text-lg font-semibold rounded-xl transition-all duration-300 ${
          isLive
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25'
            : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
        }`}
      >
        <div className="flex items-center space-x-3">
          {isLive ? (
            <>
              <Zap className="h-6 w-6" />
              <span>I'm Down to Play!</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse delay-200"></div>
              </div>
            </>
          ) : (
            <>
              <ZapOff className="h-6 w-6" />
              <span>Set as Available</span>
            </>
          )}
        </div>
      </Button>
      
      {isLive && (
        <p className="text-center text-sm text-muted-foreground mt-2 animate-fade-in">
          You're visible to nearby players looking for a match
        </p>
      )}
    </div>
  );
};

export default LiveStatusToggle;
