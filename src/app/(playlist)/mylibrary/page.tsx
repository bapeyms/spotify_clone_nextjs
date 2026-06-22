"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { useAudio } from "@/context/AudioContext"

import { MUSIC_TODAY } from "@/data/homepage/your_music_today"
import { NEW_RELEASES } from "@/data/homepage/new_releases"
import { FAVOURITE_ARTISTS } from "@/data/homepage/favourite_artists"
import { BEST_MIXES } from "@/data/mylibrary/best_mixes"

export default function MyLibrary() {

    const scrollRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // your music today
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
    const handleMusicMouseLeave = () => { isMusicDown.current = false; };
    const handleMusicMouseUp = () => { isMusicDown.current = false; };
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
            behavior: "smooth"
        });
    };

    // new music releases
    const releasesScrollRef = useRef<HTMLDivElement>(null);
    const isReleasesDown = useRef(false);
    const releasesStartX = useRef(0);
    const releasesScrollLeft = useRef(0);
    const handleReleasesMouseDown = (e: React.MouseEvent) => {
        if (!releasesScrollRef.current) return;
        isReleasesDown.current = true;
        releasesStartX.current = e.pageX - releasesScrollRef.current.offsetLeft;
        releasesScrollLeft.current = releasesScrollRef.current.scrollLeft;
    };
    const handleReleasesMouseLeave = () => { isReleasesDown.current = false; };
    const handleReleasesMouseUp = () => { isReleasesDown.current = false; };
    const handleReleasesMouseMove = (e: React.MouseEvent) => {
        if (!isReleasesDown.current || !releasesScrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - releasesScrollRef.current.offsetLeft;
        const walk = (x - releasesStartX.current) * 1.5;
        releasesScrollRef.current.scrollLeft = releasesScrollLeft.current - walk;
    };

    const scrollReleases = (direction: "left" | "right") => {
        if (!releasesScrollRef.current) return;
        const scrollAmount = 300;
        releasesScrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    };

    // favourite artists
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
    const handleArtistsMouseLeave = () => { isArtistsDown.current = false; };
    const handleArtistsMouseUp = () => { isArtistsDown.current = false; };
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
            behavior: "smooth"
        });
    };

    // best mixes
    const mixesScrollRef = useRef<HTMLDivElement>(null);
    const isMixesDown = useRef(false);
    const mixesStartX = useRef(0);
    const mixesScrollLeft = useRef(0);
    const handleMixesMouseDown = (e: React.MouseEvent) => {
        if (!mixesScrollRef.current) return;
        isMixesDown.current = true;
        mixesStartX.current = e.pageX - mixesScrollRef.current.offsetLeft;
        mixesScrollLeft.current = mixesScrollRef.current.scrollLeft;
    };
    const handleMixesMouseLeave = () => { isMixesDown.current = false; };
    const handleMixesMouseUp = () => { isMixesDown.current = false; };
    const handleMixesMouseMove = (e: React.MouseEvent) => {
        if (!isMixesDown.current || !mixesScrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - mixesScrollRef.current.offsetLeft;
        const walk = (x - mixesStartX.current) * 1.5;
        mixesScrollRef.current.scrollLeft = mixesScrollLeft.current - walk;
    };
    const scrollMixes = (direction: "left" | "right") => {
        if (!mixesScrollRef.current) return;
        const scrollAmount = 300;
        mixesScrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    };

    const { playTrack } = useAudio();

    return (
        <div className="relative flex flex-col text-white gap-8 w-full max-w-full min-h-screen px-4 md:px-12 mt-10">
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <Image src="/dashboard/pagehome/bg.png" alt="Background Gradient Source" 
                fill priority
                className="object-cover blur-3xl opacity-50"
                sizes="100vw"/>
            </div>

            <div className="mb-8">
                <h1 className="text-3xl font-semibold">Моя медіатека</h1>
            </div>

            <div className="flex flex-col gap-4 w-full min-w-0 md:mb-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-[#BEF4FF] text-lg md:text-2xl font-semibold">
                        Улюблені треки
                    </h3>
                    
                    <div className="flex flex-row items-center gap-3 text-[#5D6E96] px-1">
                        <button 
                            onClick={() => scrollMusic("left")}
                            className="cursor-pointer hover:text-[#7BA6DF] text-xl transition-colors duration-200 p-1 select-none">
                            &#10094;
                        </button>
                        <button 
                            onClick={() => scrollMusic("right")}
                            className="cursor-pointer hover:text-[#7BA6DF] text-xl transition-colors duration-200 p-1 select-none">
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
                    className="flex flex-row justify-start items-start gap-4 w-full overflow-x-auto scrollbar-none touch-pan-x pb-3 cursor-grab active:cursor-grabbing select-none">

                    {MUSIC_TODAY.map((mt) => (
                        <div key={mt.id}
                        onClick={() => playTrack({
                            title: mt.music,
                            artist: mt.artist,
                            cover: mt.img
                        })}
                            className="flex flex-col gap-2 bg-[#112240]/60 hover:bg-[#162c52]/80 transition-colors duration-200 rounded-xl p-2.5 w-[160px] md:w-[180px] shrink-0 cursor-pointer">
                            <img src={mt.img} alt={mt.music} 
                                className="w-full h-auto aspect-square object-cover rounded-lg pointer-events-none"/>
                            <div className="flex flex-col gap-0.5 min-w-0">
                                <p className="text-white font-medium text-xs md:text-sm truncate w-full">
                                    {mt.music}
                                </p>
                                <p className="text-white/60 font-normal text-[10px] md:text-xs truncate w-full">
                                    {mt.artist}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full min-w-0 md:mb-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-[#BEF4FF] text-lg md:text-2xl font-semibold">
                        Плейлисти
                    </h3>
                    
                    <div className="flex flex-row items-center gap-3 text-[#5D6E96] px-1">
                        <button 
                            onClick={() => scrollReleases("left")}
                            className="cursor-pointer hover:text-[#7BA6DF] text-xl transition-colors duration-200 p-1 select-none">
                            &#10094;
                        </button>
                        <button 
                            onClick={() => scrollReleases("right")}
                            className="cursor-pointer hover:text-[#7BA6DF] text-xl transition-colors duration-200 p-1 select-none">
                            &#10095;
                        </button>
                    </div>
                </div>

                <div 
                ref={releasesScrollRef}
                onMouseDown={handleReleasesMouseDown}
                onMouseLeave={handleReleasesMouseLeave}
                onMouseUp={handleReleasesMouseUp}
                onMouseMove={handleReleasesMouseMove}
                className="flex flex-row justify-start items-start gap-4 w-full overflow-x-auto scrollbar-none touch-pan-x pb-3 cursor-grab active:cursor-grabbing select-none">
                    
                    {NEW_RELEASES.map((nr) => (
                        <div key={nr.id} 
                        className="flex flex-col gap-2 bg-[#112240]/60 hover:bg-[#162c52]/80 transition-colors duration-200 rounded-xl p-2.5 w-[160px] md:w-[180px] shrink-0 cursor-pointer">
                            
                            <img src={nr.img} alt={nr.music} 
                            className="w-full h-auto aspect-square object-cover rounded-lg pointer-events-none"/>
                            
                            <div className="flex flex-col gap-0.5 min-w-0">
                                <p className="text-white font-medium text-xs md:text-sm truncate w-full">{nr.music}</p>
                                <p className="text-white/60 font-normal text-[10px] md:text-xs truncate w-full">{nr.artist}</p>
                                <p className="text-white/50 font-normal text-[7px] md:text-xs truncate w-full">{nr.tracks}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full min-w-0 md:mb-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-[#BEF4FF] text-lg md:text-2xl font-semibold">
                        Твої улюблені <span className="text-[#40A2FF]">виконавці</span>
                    </h3>
                    
                    <div className="flex flex-row items-center gap-3 text-[#5D6E96] px-1">
                        <button onClick={() => scrollArtists("left")}
                        className="cursor-pointer hover:text-[#7BA6DF] text-xl transition-colors duration-200 p-1 select-none">
                            &#10094;
                        </button>
                        
                        <button onClick={() => scrollArtists("right")}
                        className="cursor-pointer hover:text-[#7BA6DF] text-xl transition-colors duration-200 p-1 select-none">
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
                className="flex flex-row justify-start items-start gap-6 md:gap-8 w-full overflow-x-auto scrollbar-none touch-pan-x pb-3 cursor-grab active:cursor-grabbing select-none">
                    
                    {FAVOURITE_ARTISTS.map((artist) => (
                        <div key={artist.id} 
                        className="flex flex-col items-center text-center gap-2 w-[140px] md:w-[160px] shrink-0 cursor-pointer group">
                            
                            <div className="w-full aspect-square rounded-full overflow-hidden border border-[#AAE4FF]/10 bg-[#112240]/30">
                            <img src={artist.img} alt={artist.artist} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"/>
                            </div>
                            
                            <div className="flex flex-col gap-0.5 min-w-0 w-full px-1">
                                <p className="text-white font-medium text-xs md:text-sm truncate w-full group-hover:text-[#BEF4FF] transition-colors">
                                    {artist.artist}</p>
                                    
                                <p className="text-[#7BA6DF]/60 font-normal text-[10px] md:text-xs truncate w-full">
                                    {artist.listeners}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full min-w-0 md:mb-8">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-[#BEF4FF] text-lg md:text-2xl font-semibold">
                        Твої найкращі <span className="text-[#40A2FF]">мікси</span>
                    </h3>
                    
                    <div className="flex flex-row items-center gap-3 text-[#5D6E96] px-1">
                        <button onClick={() => scrollMixes("left")}
                        className="cursor-pointer hover:text-[#7BA6DF] text-xl transition-colors duration-200 p-1 select-none">
                            &#10094;</button>
                        
                        <button onClick={() => scrollMixes("right")}
                        className="cursor-pointer hover:text-[#7BA6DF] text-xl transition-colors duration-200 p-1 select-none">
                            &#10095;</button>
                    </div>
                </div>
            <div 
            ref={mixesScrollRef}
            onMouseDown={handleMixesMouseDown}
            onMouseLeave={handleMixesMouseLeave}
            onMouseUp={handleMixesMouseUp}
            onMouseMove={handleMixesMouseMove}
            className="flex flex-row justify-start items-start gap-4 w-full overflow-x-auto scrollbar-none touch-pan-x pb-3 cursor-grab active:cursor-grabbing select-none">
                
                {BEST_MIXES.map((mix) => (
                    <div key={mix.id} 
                    className="flex flex-col gap-2 bg-[#112240]/60 hover:bg-[#162c52]/80 transition-colors duration-200 rounded-xl p-2.5 w-[160px] md:w-[180px] shrink-0 cursor-pointer group">
                        <div className="w-full aspect-square overflow-hidden rounded-lg">
                            <img src={mix.img} alt={mix.playlist} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"/>
                        </div>
                        
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <p className="text-white font-medium text-xs md:text-sm truncate w-full group-hover:text-[#BEF4FF] transition-colors">
                                {mix.playlist}</p>
                                <p className="text-white/60 font-normal text-[10px] md:text-xs truncate w-full">
                                {mix.artists}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}