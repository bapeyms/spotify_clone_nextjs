"use client"

import { useAudio } from '@/context/AudioContext';
import Image from 'next/image';

export default function MiniPlayer() {
  const { currentTrack } = useAudio();
  
  if (!currentTrack) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-[#061420] border-t border-[#93E8FF]/30 text-white">
      <div className="grid h-full grid-cols-[300px_2fr_200px] items-center px-6">
        
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src={currentTrack.cover}
            alt={currentTrack.title}
            width={48}
            height={48}
            className="rounded object-cover aspect-square"
          />
          <div className="min-w-0">
            <div className="truncate font-medium">{currentTrack.title}</div>
            <div className="truncate text-sm text-white/50">{currentTrack.artist}</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Image src="/playlist/repeat.png" alt="Повтор" width={16} height={16} />
            <Image src="/playlist/prev.png" alt="Назад" width={14} height={14} />
            <Image src="/playlist/play.png" alt="Старт" width={30} height={30} />
            <Image src="/playlist/next.png" alt="Вперед" width={14} height={14} />
            <Image src="/playlist/shuffle.png" alt="Перемішати" width={14} height={14} />
          </div>

          <div className="mt-1 flex items-center gap-2 w-full max-w-[500px]">
            <span className="text-xs text-white/50">00:00</span>
            <div className="h-[3px] flex-1 rounded-full bg-white/20">
              <div className="h-full w-0 rounded-full bg-sky-300" />
            </div>
            <span className="text-xs text-white/50">03:30</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Image src="/playlist/volume.png" alt="Гучність" width={18} height={18} />
          <div className="h-[3px] w-28 rounded-full bg-white/20">
            <div className="h-full w-1/2 rounded-full bg-sky-300" />
          </div>
          <Image src="/playlist/fullscreen.png" alt="Повний екран" width={16} height={16} />
        </div>

      </div>
    </div>
  );
}