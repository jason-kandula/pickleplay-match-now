
import React from 'react';
import PlayerCard from './PlayerCard';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MapPin } from 'lucide-react';

const MatchFeed = () => {
  // Mock data for demonstration
  const nearbyPlayers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: undefined,
      skillRating: 4.2,
      distance: '0.8 miles',
      playStyle: 'competitive' as const,
      bio: 'Love competitive matches! Available most evenings and weekends. Let\'s rally!',
      lastActive: '5 min ago',
      isAvailableNow: true
    },
    {
      id: '2',
      name: 'Mike Chen',
      avatar: undefined,
      skillRating: 3.8,
      distance: '1.2 miles',
      playStyle: 'casual' as const,
      bio: 'Just getting into pickleball. Looking for friendly games to improve my skills.',
      lastActive: '12 min ago',
      isAvailableNow: true
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      avatar: undefined,
      skillRating: 4.6,
      distance: '2.1 miles',
      playStyle: 'dinking' as const,
      bio: 'Precision and strategy player. Love working on technique and placement.',
      lastActive: '1 hour ago',
      isAvailableNow: false
    },
    {
      id: '4',
      name: 'David Kim',
      avatar: undefined,
      skillRating: 3.5,
      distance: '1.7 miles',  
      playStyle: 'casual' as const,
      bio: 'Weekend warrior looking for fun matches. Coffee after games?',
      lastActive: '23 min ago',
      isAvailableNow: true
    }
  ];

  const availableNow = nearbyPlayers.filter(player => player.isAvailableNow);
  const offline = nearbyPlayers.filter(player => !player.isAvailableNow);

  return (
    <div className="space-y-4 p-4">
      {/* Available Now Section */}
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <h2 className="text-lg font-semibold text-foreground">Available Now</h2>
          <span className="text-sm text-muted-foreground">({availableNow.length})</span>
        </div>
        
        {availableNow.length > 0 ? (
          <div className="space-y-3">
            {availableNow.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        ) : (
          <Card className="border-border/50">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <h3 className="font-medium text-foreground mb-2">No players available right now</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Be the first to set your status as "Down to Play"
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Recently Active Section */}
      {offline.length > 0 && (
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Recently Active</h2>
            <span className="text-sm text-muted-foreground">({offline.length})</span>
          </div>
          
          <div className="space-y-3">
            {offline.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchFeed;
