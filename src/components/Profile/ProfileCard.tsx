import React, { ReactNode } from 'react';
import { MapPin } from 'lucide-react';
import './ProfileCard.css';
import { GlassCard } from '../UI/GlassCard';
import { UserProfile, DiscordPresence } from '../../types';

interface ProfileCardProps {
  profile: UserProfile;
  discordPresence?: DiscordPresence | null;
  children?: ReactNode;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  discordPresence,
  children,
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'online':
        return '#43b581';
      case 'idle':
        return '#43b581';
      case 'dnd':
        return '#43b581';
      default:
        return '#43b581';
    }
  };

  const getActivityText = () => {
    if (!discordPresence?.activities || discordPresence.activities.length === 0) {
      return null;
    }

    const activity = discordPresence.activities[0];

    // Discord activity types
    if (activity.type === 0) return `Playing ${activity.name}`;
    if (activity.type === 2 && discordPresence.listening_to_spotify)
      return 'Listening to Spotify';
    if (activity.type === 3) return `Watching ${activity.name}`;
    if (activity.type === 4) return activity.state || activity.name;

    return activity.name;
  };

  const status = discordPresence?.discord_status || 'offline';
  const statusColor = getStatusColor(status);
  const activityText = getActivityText();

  return (
    <GlassCard className="profile-card">
      {/* Avatar */}
      <div className="profile-avatar-container">
        <div className="profile-avatar-wrapper">
          <img
            src={profile.avatar}
            alt={profile.realName}
            className="profile-avatar"
          />
          <span
            className="profile-status-indicator"
            style={{ backgroundColor: statusColor }}
            title={status}
          />
        </div>
      </div>

      {/* Info */}
      <div className="profile-info">
        <h1 className="profile-username">{profile.username}</h1>
        <p className="profile-real-name">{profile.realName}</p>

        <div className="profile-location">
          <MapPin size={16} />
          <span>{profile.country}</span>
        </div>

        {activityText && (
          <div className="profile-activity">
            <span className="activity-indicator" />
            <span className="activity-text">{activityText}</span>
          </div>
        )}

        {discordPresence?.listening_to_spotify && discordPresence.spotify && (
          <div className="profile-spotify">
            <img
              src={discordPresence.spotify.album_art_url}
              alt={discordPresence.spotify.album}
              className="spotify-album-art"
            />
            <div className="spotify-info">
              <p className="spotify-song">
                {discordPresence.spotify.song}
              </p>
              <p className="spotify-artist">
                {discordPresence.spotify.artist}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Extra content (Music + Social links) */}
      {children && <div className="profile-extra">{children}</div>}
    </GlassCard>
  );
};
