"use client";

import Image from "next/image";
import { SONGS } from "@/data/songs";

function formatDuration(seconds: number) {
    const min = Math.floor(seconds / 60);
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
}
export default function Songs() {
    return (
        <main className="w-full">
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
                        <button>
                            <Image
                                src="/playlist/stop.png"
                                alt="play"
                                width={40}
                                height={40}
                            />
                        </button>

                        <button>
                            <Image
                                src="/playlist/shuffle.png"
                                alt="shuffle"
                                width={28}
                                height={28}
                            />
                        </button>

                        <button>
                            <Image
                                src="/playlist/load.png"
                                alt="download"
                                width={34}
                                height={34}
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
        </main>

    )
}