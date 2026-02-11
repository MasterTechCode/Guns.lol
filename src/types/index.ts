import { ReactNode } from 'react';

export interface SocialLink {
  id: string;
  icon: ReactNode;
  href: string;
  ariaLabel: string;
}

export interface UserProfile {
  username: string;
  realName: string;
  country: string;
  avatar: string;
  discordUserId?: string;
}

export interface DiscordPresence {
  discord_user?: {
    id: string;
    username: string;
    avatar: string;
  };
  discord_status?: 'online' | 'idle' | 'dnd' | 'offline';
  activities?: Array<{
    id: string;
    name: string;
    type: number;
    state?: string;
    details?: string;
    application_id?: string;
    assets?: {
      large_image?: string;
      large_text?: string;
      small_image?: string;
      small_text?: string;
    };
  }>;
  listening_to_spotify?: boolean;
  spotify?: {
    track_id: string;
    song: string;
    artist: string;
    album: string;
    album_art_url: string;
  };
}

export interface MusicTrack {
  title: string;
  artist: string;
  url: string;
  cover?: string;
}
