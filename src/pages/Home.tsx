import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import { ProfileCard } from "../components/Profile/ProfileCard";
import { SocialLinks } from "../components/SocialLinks/SocialLinks";
import { MusicPlayer } from "../components/MusicPlayer/MusicPlayer";
import { SnowEffect } from "../components/Effects/SnowEffect";
import { socialLinks } from "../data/socialLinks";
import { UserProfile, MusicTrack } from "../types";

export const Home: React.FC = () => {
  const userProfile: UserProfile = {
    username: "mrx404",
    realName: "Elshodbek Muxtorov",
    country: "Uzbekistan",
    avatar: "/assets/images/avatar.png",
  };

  const musicTrack: MusicTrack = {
    title: "Avangard",
    artist: "Lonown",
    url: "/assets/music/song.mp3",
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Create audio element once
  useEffect(() => {
    const audio = new Audio(musicTrack.url);
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [musicTrack.url]);

  // Sync video to audio time (only small corrections)
  useEffect(() => {
    const audio = audioRef.current;
    const video = videoRef.current;
    if (!audio || !video) return;

    const syncVideoToAudio = () => {
      if (Math.abs(video.currentTime - audio.currentTime) > 0.08) {
        video.currentTime = audio.currentTime;
      }
    };

    audio.addEventListener("timeupdate", syncVideoToAudio);
    audio.addEventListener("seeked", syncVideoToAudio);

    return () => {
      audio.removeEventListener("timeupdate", syncVideoToAudio);
      audio.removeEventListener("seeked", syncVideoToAudio);
    };
  }, []);

  // Improved play function - try video first (more strict), then audio
  const playBoth = async () => {
    const audio = audioRef.current;
    const video = videoRef.current;
    if (!audio || !video) return;

    setIsPlaying(false); // reset state first

    try {
      // Video is usually the stricter one → start with it
      await video.play();
      await audio.play();
      setIsPlaying(true);
    } catch (err: any) {
      console.error("Playback failed:", err.message || err);

      // Fallback: try audio alone if video failed
      if (audio.paused) {
        audio.play().catch((e) => console.warn("Audio fallback failed", e));
      }

      setIsPlaying(false);
    }
  };

  const pauseBoth = () => {
    audioRef.current?.pause();
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseBoth();
    } else {
      playBoth();
    }
  };

  // Handle first user interaction
  const handleEnterSite = () => {
    setHasInteracted(true);
    playBoth(); // auto-start after click
  };

  const currentYear = new Date().getFullYear();

  // Show enter screen until user interacts
  if (!hasInteracted) {
    return (
      <div className="enter-screen" onClick={handleEnterSite}>
        <div className="enter-content">
          <h1>Welcome</h1>
          <p>Click anywhere to enter</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Background Video */}
      <div className="background-video-container">
        <video
          ref={videoRef}
          className="background-video"
          loop
          muted
          playsInline           // Critical for iOS/mobile
          preload="auto"
          autoPlay              // Hint for browsers (works better after gesture)
        >
          <source src="/assets/videos/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="background-overlay" />
      </div>

      {/* Snow Effect */}
      <SnowEffect />

      {/* Main Content */}
      <div className="home-content">
        <div className="content-wrapper">
          <ProfileCard profile={userProfile}>
            <SocialLinks links={socialLinks} />
          </ProfileCard>

          <MusicPlayer
            track={musicTrack}
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <p>© {currentYear} {userProfile.username}. All rights reserved.</p>
      </footer>
    </div>
  );
};