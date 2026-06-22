"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { SONGS } from "@/data/sonyapage/songs";

type PlayerTrack = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  duration: string;
};

interface AudioContextType {
  currentTrack: PlayerTrack | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playTrack: (
    track: PlayerTrack,
    playlist?: PlayerTrack[],
    startIndex?: number
  ) => void;
  togglePlay: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const parseDuration = (value: string) => {
  const [min, sec] = value.split(":").map(Number);
  return (min || 0) * 60 + (sec || 0);
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<PlayerTrack | null>(null);
  const [currentPlaylist, setCurrentPlaylist] = useState<PlayerTrack[]>(SONGS as PlayerTrack[]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playTrack = (
    track: PlayerTrack,
    playlist: PlayerTrack[] = SONGS as PlayerTrack[],
    startIndex?: number
  ) => {
    const index =
      typeof startIndex === "number"
        ? startIndex
        : playlist.findIndex((s) => s.id === track.id);

    setCurrentPlaylist(playlist);
    setCurrentIndex(index);
    setCurrentTrack(track);
    setCurrentTime(0);
    setDuration(parseDuration(track.duration));
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (!currentTrack) return;
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!isPlaying || !currentTrack) return;

    const interval = window.setInterval(() => {
      setCurrentTime((prev) => prev + 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (!currentTrack || !isPlaying) return;
    if (currentTime < duration) return;

    const nextIndex = currentIndex + 1;

    if (nextIndex < currentPlaylist.length) {
      const nextTrack = currentPlaylist[nextIndex];
      setCurrentIndex(nextIndex);
      setCurrentTrack(nextTrack);
      setCurrentTime(0);
      setDuration(parseDuration(nextTrack.duration));
    } else {
      setIsPlaying(false);
    }
  }, [currentTime, duration, currentTrack, isPlaying, currentIndex, currentPlaylist]);

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        playTrack,
        togglePlay,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
};