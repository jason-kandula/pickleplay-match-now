
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, MessageCircle, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PlayerCardProps {
  player: {
    id: string;
    name: string;
    avatar?: string;
    skillRating: number;
    distance: string;
    playStyle: 'casual' | 'competitive' | 'dinking';
    bio: string;
    lastActive: string;
    isAvailableNow: boolean;
  };
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const getPlayStyleColor = (style: string) => {
    switch (style) {
      case 'competitive': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'casual': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'dinking': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card className="hover:bg-card/80 transition-all duration-200 border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-14 w-14 ring-2 ring-primary/20">
              <AvatarImage src={player.avatar} alt={player.name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {player.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            {player.isAvailableNow && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold text-foreground truncate">{player.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400">{player.skillRating}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>{player.distance}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{player.lastActive}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{player.bio}</p>
            
            <div className="flex items-center justify-between">
              <Badge variant="outline" className={getPlayStyleColor(player.playStyle)}>
                {player.playStyle}
              </Badge>
              
              <Button size="sm" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30">
                <MessageCircle className="h-4 w-4 mr-1" />
                Invite
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
