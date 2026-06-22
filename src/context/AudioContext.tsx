"use client"

import React, { createContext, useContext, useState } from 'react';

interface Track {
  title: string;
  artist: string;
  cover: string;
  duration: string
}

interface AudioContextType {
  currentTrack: Track | null;
  playTrack: (track: Track) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
  };

  return (
    <AudioContext.Provider value={{ currentTrack, playTrack }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error('useAudio must be used within AudioProvider');
  return context;
};