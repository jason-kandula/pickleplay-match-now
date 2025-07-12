
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Settings as SettingsIcon, Camera, Save } from 'lucide-react';

interface SettingsProps {
  children: React.ReactNode;
}

const Settings: React.FC<SettingsProps> = ({ children }) => {
  const [name, setName] = useState('John Doe');
  const [rating, setRating] = useState('4.2');
  const [tag, setTag] = useState('competitive');
  const [profilePicture, setProfilePicture] = useState('');

  const handleSave = () => {
    // TODO: Save profile data
    console.log('Saving profile:', { name, rating, tag, profilePicture });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            Profile Settings
          </SheetTitle>
          <SheetDescription>
            Update your profile information and preferences
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-24 w-24 ring-2 ring-primary/20">
                <AvatarImage src={profilePicture} alt={name} />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                  {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <label
                htmlFor="profile-picture"
                className="absolute -bottom-2 -right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Camera className="h-4 w-4" />
              </label>
              <input
                id="profile-picture"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          {/* Rating */}
          <div className="space-y-2">
            <Label htmlFor="rating">Skill Rating</Label>
            <Input
              id="rating"
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="1.0 - 5.0"
            />
          </div>

          {/* Play Style Tag */}
          <div className="space-y-2">
            <Label htmlFor="tag">Play Style</Label>
            <Select value={tag} onValueChange={setTag}>
              <SelectTrigger>
                <SelectValue placeholder="Select your play style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="competitive">Competitive</SelectItem>
                <SelectItem value="dinking">Dinking</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <Button onClick={handleSave} className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Settings;
