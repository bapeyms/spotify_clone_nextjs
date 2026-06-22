"use client";

import { useAudio } from "@/context/AudioContext";
import Image from "next/image";

function formatTime(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${String(sec).padStart(2, "0")}`;
}

export default function MiniPlayer() {
  const { currentTrack, isPlaying, currentTime, duration, togglePlay } = useAudio();

  if (!currentTrack) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-[#93E8FF]/30 bg-[#061420] text-white">
      <div className="grid h-full grid-cols-[300px_2fr_200px] items-center px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={currentTrack.cover}
            alt={currentTrack.title}
            width={48}
            height={48}
            className="aspect-square rounded object-cover"
          />
          <div className="min-w-0">
            <div className="truncate font-medium">{currentTrack.title}</div>
            <div className="truncate text-sm text-white/50">{currentTrack.artist}</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Image src="/playlist/repeat.png" alt="Повтор" width={16} height={16} 
            className="cursor-pointer"/>
            <Image src="/playlist/prev.png" alt="Назад" width={14} height={14} 
            className="cursor-pointer"/>

            <button type="button" onClick={togglePlay} className="flex items-center justify-center cursor-pointer">
              <Image
                src={isPlaying ? "/playlist/pause.png" : "/playlist/play.png"}
                alt={isPlaying ? "Pause" : "Play"}
                width={30}
                height={30}
              />
            </button>

            <Image src="/playlist/next.png" alt="Вперед" width={14} height={14} 
            className="cursor-pointer"/>
            <Image src="/playlist/shuffle.png" alt="Перемішати" width={14} height={14}
            className="cursor-pointer"/>
          </div>

          <div className="mt-1 flex w-full max-w-[500px] items-center gap-2">
            <span className="text-xs text-white/50">{formatTime(currentTime)}</span>
            <div className="h-[3px] flex-1 rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-sky-300 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-white/50">
              {currentTrack ? currentTrack.duration : "00:00"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Image src="/playlist/volume.png" alt="Гучність" width={18} height={15} />
          <div className="h-[3px] w-28 rounded-full bg-white/20">
            <div className="h-full w-1/2 rounded-full bg-sky-300" />
          </div>
          <Image src="/playlist/fullscreen.png" alt="Повний екран" width={16} height={16} />
        </div>
      </div>
    </div>
  );
}