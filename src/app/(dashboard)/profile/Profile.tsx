"use client";

import Image from "next/image";
import { useRef } from "react";
import { useAudio } from "@/context/AudioContext";
import { MUSIC_TODAY } from "@/data/homepage/your_music_today";
import { FAVOURITE_ARTISTS } from "@/data/homepage/favourite_artists";

export default function ProfilePage() {
  const { playTrack } = useAudio();

  const musicScrollRef = useRef<HTMLDivElement>(null);
  const isMusicDown = useRef(false);
  const musicStartX = useRef(0);
  const musicScrollLeft = useRef(0);

  const handleMusicMouseDown = (e: React.MouseEvent) => {
    if (!musicScrollRef.current) return;
    isMusicDown.current = true;
    musicStartX.current = e.pageX - musicScrollRef.current.offsetLeft;
    musicScrollLeft.current = musicScrollRef.current.scrollLeft;
  };

  const handleMusicMouseLeave = () => {
    isMusicDown.current = false;
  };

  const handleMusicMouseUp = () => {
    isMusicDown.current = false;
  };

  const handleMusicMouseMove = (e: React.MouseEvent) => {
    if (!isMusicDown.current || !musicScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - musicScrollRef.current.offsetLeft;
    const walk = (x - musicStartX.current) * 1.5;
    musicScrollRef.current.scrollLeft = musicScrollLeft.current - walk;
  };

  const scrollMusic = (direction: "left" | "right") => {
    if (!musicScrollRef.current) return;
    const scrollAmount = 300;
    musicScrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const artistsScrollRef = useRef<HTMLDivElement>(null);
  const isArtistsDown = useRef(false);
  const artistsStartX = useRef(0);
  const artistsScrollLeft = useRef(0);

  const handleArtistsMouseDown = (e: React.MouseEvent) => {
    if (!artistsScrollRef.current) return;
    isArtistsDown.current = true;
    artistsStartX.current = e.pageX - artistsScrollRef.current.offsetLeft;
    artistsScrollLeft.current = artistsScrollRef.current.scrollLeft;
  };

  const handleArtistsMouseLeave = () => {
    isArtistsDown.current = false;
  };

  const handleArtistsMouseUp = () => {
    isArtistsDown.current = false;
  };

  const handleArtistsMouseMove = (e: React.MouseEvent) => {
    if (!isArtistsDown.current || !artistsScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - artistsScrollRef.current.offsetLeft;
    const walk = (x - artistsStartX.current) * 1.5;
    artistsScrollRef.current.scrollLeft = artistsScrollLeft.current - walk;
  };

  const scrollArtists = (direction: "left" | "right") => {
    if (!artistsScrollRef.current) return;
    const scrollAmount = 300;
    artistsScrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="-mx-4 -mt-4 md:-mx-10">
      <section className="relative w-full overflow-hidden rounded-t-xl bg-[#061420]">
        <div
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(6,20,32,0.92), rgba(6,20,32,0.28)), url('/playlist/headphones.png')",
          }}
          className="relative h-[140px] bg-cover bg-center bg-no-repeat md:h-[320px]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061420]/30" />

          <div className="relative z-10 flex items-start justify-between px-6 pt-5 md:px-10 md:pt-6">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Профіль
            </h1>

            <Image
              src="/dashboard/profile/settings.png"
              alt="set"
              width={24}
              height={24}
              className="opacity-90 transition hover:opacity-100"
            />
          </div>

        </div>

        <hr className="h-[2px] border-0 bg-[#6FB9B8] shadow-[0_0_15px_#6FB9B8,0_0_20px_#6FB9B8,0_0_40px_#6FB9B8]" />
      </section>

      <div className="flex w-full flex-col gap-14 px-4 pb-6 pt-10 md:px-10 ">
        <section className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-[#BEF4FF] md:text-xl">
                До вподоби ВАМ цього тижня!
              </h3>

              <Image
                src="/dashboard/profile/private.png"
                alt="private"
                width={14}
                height={14}
                className="opacity-80"
              />
            </div>

            <div className="flex items-center gap-3 px-1 text-[#5D6E96]">
              <button
                onClick={() => scrollMusic("left")}
                className="cursor-pointer select-none p-1 text-xl transition-colors duration-200 hover:text-[#7BA6DF]"
                type="button"
              >
                &#10094;
              </button>
              <button
                onClick={() => scrollMusic("right")}
                className="cursor-pointer select-none p-1 text-xl transition-colors duration-200 hover:text-[#7BA6DF]"
                type="button"
              >
                &#10095;
              </button>
            </div>
          </div>

          <div
            ref={musicScrollRef}
            onMouseDown={handleMusicMouseDown}
            onMouseLeave={handleMusicMouseLeave}
            onMouseUp={handleMusicMouseUp}
            onMouseMove={handleMusicMouseMove}
            className="flex w-full cursor-grab select-none flex-row items-start justify-start gap-4 overflow-x-auto pb-3 scrollbar-none touch-pan-x active:cursor-grabbing"
          >
            {MUSIC_TODAY.map((mt) => (
              <div
                key={mt.id}
                onClick={() =>
                  playTrack({
                    id: mt.id,
                    title: mt.music,
                    artist: mt.artist,
                    cover: mt.img,
                    duration: mt.duration,
                  })
                }
                className="flex w-[160px] shrink-0 cursor-pointer flex-col gap-2 rounded-xl bg-[#112240]/60 p-2.5 transition-colors duration-200 hover:bg-[#162c52]/80 md:w-[180px]"
              >
                <img
                  src={mt.img}
                  alt={mt.music}
                  className="pointer-events-none aspect-square w-full rounded-lg object-cover"
                />
                <div className="flex min-w-0 flex-col gap-0.5">
                  <p className="w-full truncate text-xs font-medium text-white md:text-sm">
                    {mt.music}
                  </p>
                  <p className="w-full truncate text-[10px] font-normal text-white/60 md:text-xs">
                    {mt.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-[#BEF4FF] md:text-2xl">
            Топ ваших треків цього місяця
          </h3>

          <div className="grid grid-cols-[36px_52px_minmax(0,1fr)_170px_90px] items-center px-2 pb-2 md:px-4">
            <div />
            <div />
            <div />
            <div className="text-center text-xs font-semibold text-white md:text-lg">
              Дата релізу
            </div>
            <div className="text-right text-xs font-semibold text-white md:text-lg">
              Час
            </div>
          </div>

          <div className="space-y-2">
            {MUSIC_TODAY.slice(0, 3).map((track, index) => (
              <div
                key={track.id}
                className="grid grid-cols-[36px_52px_minmax(0,1fr)_170px_90px] items-center rounded-xl bg-[#081C2D]/80 px-2 py-2 transition hover:bg-[#102B44] md:px-4"
              >
                <div className="text-center text-xl font-light text-white md:text-2xl">
                  {index + 1}
                </div>

                <img
                  src={track.img}
                  alt={track.music}
                  className="h-9 w-9 rounded-md object-cover md:h-10 md:w-10"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm text-white md:text-base">
                    {track.music}
                  </p>
                  <p className="truncate text-[10px] text-white/50 md:text-xs">
                    {track.artist}
                  </p>
                </div>

                <div className="text-center text-xs text-white md:text-base">
                  12.11.2012
                </div>

                <div className="text-right text-xs text-white md:text-base">
                  {track.duration}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 pb-6">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-lg font-semibold text-[#BEF4FF] md:text-2xl">
              Ви слідкуєте
            </h3>

            <div className="flex items-center gap-3 px-1 text-[#5D6E96]">
              <button
                onClick={() => scrollArtists("left")}
                className="cursor-pointer select-none p-1 text-xl transition-colors duration-200 hover:text-[#7BA6DF]"
                type="button"
              >
                &#10094;
              </button>
              <button
                onClick={() => scrollArtists("right")}
                className="cursor-pointer select-none p-1 text-xl transition-colors duration-200 hover:text-[#7BA6DF]"
                type="button"
              >
                &#10095;
              </button>
            </div>
          </div>

          <div
            ref={artistsScrollRef}
            onMouseDown={handleArtistsMouseDown}
            onMouseLeave={handleArtistsMouseLeave}
            onMouseUp={handleArtistsMouseUp}
            onMouseMove={handleArtistsMouseMove}
            className="flex w-full cursor-grab select-none flex-row items-start justify-start gap-6 overflow-x-auto pb-3 scrollbar-none touch-pan-x active:cursor-grabbing md:gap-8"
          >
            {FAVOURITE_ARTISTS.map((artist) => (
              <div
                key={artist.id}
                className="group flex w-[140px] shrink-0 cursor-pointer flex-col items-center gap-2 text-center md:w-[160px]"
              >
                <div className="aspect-square w-full overflow-hidden rounded-full border border-[#AAE4FF]/10 bg-[#112240]/30">
                  <img
                    src={artist.img}
                    alt={artist.artist}
                    className="pointer-events-none h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-w-0 w-full flex-col gap-0.5 px-1">
                  <p className="w-full truncate text-xs font-medium text-white transition-colors group-hover:text-[#BEF4FF] md:text-sm">
                    {artist.artist}
                  </p>
                  <p className="w-full truncate text-[10px] font-normal text-[#7BA6DF]/60 md:text-xs">
                    {artist.listeners}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}