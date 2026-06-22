"use client";

import Image from "next/image";
import { SONGS } from "@/data/sonyapage/songs";
import { useAudio } from "@/context/AudioContext";

export default function Songs() {
    const { playTrack, currentTrack, isPlaying, togglePlay } = useAudio();

    return (
        <main className="w-full pb-20">
            <section className="w-full ">
                <div className="h-[230px] px-10 pt-18  bg-[url('/playlist/hearts.png')] bg-repeat-x bg-top">
                    <p className="mb-4 text-sm text-white/75">Плейлист</p>
                    <h1 className="text-6xl font-bold tracking-tight">
                        Улюблені треки
                    </h1>
                </div>

                {/* полоска с владельцем и количеством треков */}
                <div className="flex items-center gap-3 px-10 py-1 bg-white/1">
                    <img
                        src="/playlist/avatar.png"
                        alt="HannaD"
                        className="h-6 w-6 rounded-full object-cover"
                    />
                    <span className="text-sm text-white font-medium">HannaD</span>
                    <span className="text-sm text-white/75">• 100 треків</span>
                </div>

                {/* кнопки */}
                <div className="flex items-center justify-between px-10 py-4">
                    {/* левая часть */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => {
                                if (!currentTrack) {
                                    playTrack(SONGS[0], SONGS, 0);
                                    return;
                                }
                                togglePlay();
                            }}
                            className="flex items-center justify-center cursor-pointer"
                        >
                            <Image
                                src={isPlaying ? "/playlist/pause.png" : "/playlist/play.png"}
                                alt={isPlaying ? "Pause" : "Play"}
                                width={30}
                                height={30}
                            />
                        </button>

                        <button>
                            <Image
                                src="/playlist/shuffle.png"
                                alt="shuffle"
                                width={28}
                                height={28}
                                className="cursor-pointer"
                            />
                        </button>

                        <button>
                            <Image
                                src="/playlist/load.png"
                                alt="download"
                                width={34}
                                height={34}
                                className="cursor-pointer"
                            />
                        </button>
                    </div>

                    {/* правая часть */}
                    <div className="flex items-center gap-6 text-sky-200">
                        <Image
                            src="/playlist/search.png"
                            alt="search"
                            width={18}
                            height={18}
                        />

                        <span className="text-sm">
                            Дата додавання
                        </span>

                        <Image
                            src="/playlist/list.png"
                            alt="list"
                            width={18}
                            height={18}
                        />
                    </div>
                </div>

            </section>
            <div className="grid grid-cols-[56px_56px_minmax(0,1.6fr)_minmax(0,1fr)_92px] items-center px-10 py-4 text-white/80">
                <div />
                <div />
                <div />
                <div className="text-center">Дата додавання</div>
                <div className="text-right">Час</div>
            </div>

            <div className="space-y-2 px-10">
                {SONGS.map((song, index) => (
                    <div
                        key={song.id}
                        onClick={() => playTrack(song, SONGS, index)}
                        className="grid grid-cols-[56px_56px_minmax(0,1.6fr)_minmax(0,1fr)_92px] items-center rounded-xl bg-[#0c1b2a] px-2 py-2 text-white hover:bg-blue-950 cursor-pointer"
                    >
                        <div className="text-center text-sky-300">
                            {index + 1}
                        </div>

                        <Image
                            src={song.cover}
                            alt={song.title}
                            width={48}
                            height={48}
                            className="rounded"
                        />

                        <div className="min-w-0">
                            <div className="truncate">{song.title}</div>
                            <div className="truncate text-sm text-white/50">{song.artist}</div>
                        </div>

                        <div className="truncate text-center">{song.album}</div>

                        <div className="text-right">{song.duration}</div>
                    </div>
                ))}
            </div>
        </main>

    )
}