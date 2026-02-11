import React, { useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music } from 'lucide-react';
import './MusicPlayer.css';
import { GlassCard } from '../UI/GlassCard';
import { useAudio } from '../../hooks/useAudio';
import { MusicTrack } from '../../types';

interface MusicPlayerProps {
  track: MusicTrack;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
  const { isPlaying, currentTime, duration, togglePlayPause, seek } = useAudio(track.url);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const formatTime = (time: number): string => {
    if (!isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !duration) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    const newTime = percentage * duration;

    seek(newTime);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <GlassCard className="music-player">
      <div className="music-player-header">
        <div className="music-icon-wrapper">
          <Music size={20} />
        </div>
        <div className="music-info">
          <h3 className="music-title">{track.title}</h3>
          <p className="music-artist">{track.artist}</p>
        </div>
      </div>

      <div className="music-player-controls">
        <button
          className="control-button"
          onClick={() => seek(Math.max(0, currentTime - 10))}
          aria-label="Rewind 10 seconds"
        >
          <SkipBack size={18} />
        </button>

        <button
          className="control-button play-button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <button
          className="control-button"
          onClick={() => seek(Math.min(duration, currentTime + 10))}
          aria-label="Forward 10 seconds"
        >
          <SkipForward size={18} />
        </button>
      </div>

      <div className="music-player-progress">
        <span className="time-display">{formatTime(currentTime)}</span>
        
        <div
          ref={progressBarRef}
          className="progress-bar"
          onClick={handleProgressClick}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
        >
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
            <div
              className="progress-bar-thumb"
              style={{ left: `${progress}%` }}
            />
          </div>
        </div>

        <span className="time-display">{formatTime(duration)}</span>
      </div>
    </GlassCard>
  );
};
