"use client";

import { useAudio } from "@/context/AudioContext";
import Image from "next/image";

function formatTime(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${String(sec).padStart(2, "0")}`;
}

export default function MiniPlayer() {
  const { currentTrack, isPlaying, currentTime, duration, togglePlay } =
    useAudio();

  if (!currentTrack) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* MOBILE */}
      <div className="fixed bottom-2 left-2 right-2 z-50 rounded-2xl border border-[#6FB9B8]/40 bg-[#061420]/95 px-3 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:hidden">
        <div className="flex items-center gap-3">
          <Image
            src={currentTrack.cover}
            alt={currentTrack.title}
            width={64}
            height={64}
            className="h-16 w-16 shrink-0 rounded-xl object-cover"
          />

          <div className="min-w-0 flex-1">
            <div className="truncate text-[17px] font-bold leading-tight">
              {currentTrack.title}
            </div>
            <div className="truncate text-sm text-white/55">
              {currentTrack.artist}
            </div>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/5"
            aria-label="Add track"
          >
            <Image
              src="/playlist/add.png"
              alt="add"
              width={22}
              height={22}
              className="h-5 w-5 object-contain"
            />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/5"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <Image
              src={isPlaying ? "/playlist/stop2.png" : "/playlist/play2.png"}
              alt={isPlaying ? "Pause" : "Play"}
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs text-white/50">{formatTime(currentTime)}</span>

          <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-sky-300 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-xs text-white/50">{currentTrack.duration}</span>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="fixed bottom-0 left-0 right-0 z-50 hidden border-t border-[#93E8FF]/30 bg-[#061420]/95 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:block">
        <div className="mx-auto grid h-16 w-full max-w-screen-2xl grid-cols-[320px_1fr_240px] items-center gap-4 px-6">
          {/* LEFT */}
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src={currentTrack.cover}
              alt={currentTrack.title}
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded object-cover"
            />

            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">
                {currentTrack.title}
              </div>
              <div className="truncate text-sm text-white/50">
                {currentTrack.artist}
              </div>
            </div>

            <div className="ml-3 flex items-center gap-3">
              <Image
                src="/playlist/likeOn.png"
                alt="like"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
              <Image
                src="/playlist/add.png"
                alt="add"
                width={15}
                height={15}
                className="h-[15px] w-[15px] object-contain"
              />
            </div>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-6">
              <Image
                src="/playlist/repeat.png"
                alt="Повтор"
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
              <Image
                src="/playlist/prev.png"
                alt="Назад"
                width={14}
                height={14}
                className="h-[14px] w-[14px] object-contain"
              />

              <button
                type="button"
                onClick={togglePlay}
                className="flex h-10 w-10 items-center justify-center transition hover:bg-white/5"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                <Image
                  src={isPlaying ? "/playlist/pause.png" : "/playlist/play.png"}
                  alt={isPlaying ? "Pause" : "Play"}
                  width={18}
                  height={18}
                  className="h-[20px] w-[20px] object-contain"
                />
              </button>

              <Image
                src="/playlist/next.png"
                alt="Вперед"
                width={14}
                height={14}
                className="h-[14px] w-[14px] object-contain"
              />
              <Image
                src="/playlist/shuffle.png"
                alt="Перемішати"
                width={14}
                height={14}
                className="h-[14px] w-[14px] object-contain"
              />
            </div>

            <div className="mt-1 flex w-full max-w-[500px] items-center gap-2">
              <span className="text-xs text-white/50">
                {formatTime(currentTime)}
              </span>

              <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-sky-300 transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="text-xs text-white/50">
                {currentTrack.duration}
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-3">
            <Image
              src="/playlist/volume.png"
              alt="Гучність"
              width={18}
              height={15}
              className="h-[15px] w-[18px] object-contain"
            />

            <div className="h-[3px] w-28 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-1/2 rounded-full bg-sky-300" />
            </div>

            <Image
              src="/playlist/fullscreen.png"
              alt="Повний екран"
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}