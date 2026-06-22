"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useRef } from "react"
import { useAudio } from "@/context/AudioContext"

import { AudioProvider } from "@/context/AudioContext";

import { CONCERT } from "@/data/homepage/concert_slider"
import { MOOD } from "@/data/homepage/mood"
import { MUSIC_TODAY } from "@/data/homepage/your_music_today"
import { NEW_RELEASES } from "@/data/homepage/new_releases"
import { FAVOURITE_ARTISTS } from "@/data/homepage/favourite_artists"
import { BOOKS } from "@/data/homepage/audiobooks"
import { NEW_PODCASTS } from "@/data/homepage/podcasts"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function HomePage() {

    const pathname = usePathname();
    const { playTrack } = useAudio();
    
    // mood
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        isDown.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };
    const handleMouseLeave = () => { isDown.current = false; };
    const handleMouseUp = () => { isDown.current = false; };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

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

    // buttons
    const getLinkClass = (href: string) => {
        const baseClasses = "flex flex-row items-center gap-3 px-7 py-1.5 rounded-md border border-[#AAE4FF]/20 text-xs font-medium transition-all duration-200 group";
        const activeClasses = "bg-[#3A454C]/50 hover:bg-[#3A454C] text-white border border-[#AAE4FF]/20 ";
        const inactiveClasses = "text-white hover:text-[#AAE4FF]/60 hover:bg-[#001C34]/30";
        return `${baseClasses} ${pathname === href ? activeClasses : inactiveClasses}`;
    };  

    return (
        <div className="relative flex flex-col text-white gap-8 w-full max-w-full min-h-screen">

            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <Image src="/dashboard/pagehome/bg.png"
                alt="Background Gradient Source" 
                fill priority
                className="object-cover blur-3xl opacity-50"
                sizes="100vw"/>
            </div>

            <div className="flex flex-row gap-2">
                <Link href="/homepage" className={getLinkClass("/homepage")}>
                    <span>Всі</span>
                </Link>
                <Link href="/tracks" className={getLinkClass("/tracks")}>
                    <span>Треки</span>
                </Link>
                <Link href="/other" className={getLinkClass("/other")}>
                    <span>Інше</span>
                </Link>
            </div>
            
            <div className="relative w-full min-w-0 max-w-4xl mx-auto px-2 md:px-10 group mt-4 mb-4 md:mb-10">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={{ nextEl: ".concert-next", prevEl: ".concert-prev" }}
                    loop={true}
                    observer={true}
                    observeParents={true}
                    className="concert-swiper w-full rounded-2xl overflow-hidden">

                    {CONCERT.map((slide) => (
                        <SwiperSlide key={slide.id} className="w-full">
                            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden touch-pan-y">
                                <Image 
                                    src={slide.img} 
                                    alt={slide.artist} 
                                    fill
                                    priority={slide.id === "1"}
                                    className="object-contain select-none pointer-events-none"
                                    sizes="(max-width: 1024px) 100vw, 896px"/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                <button className="concert-prev absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#061420]/60 text-[#5D6E96] rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-[#001C34] hover:text-[#7BA6DF]">
                    &#10094;
                </button>
                <button className="concert-next absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#061420]/60 text-[#5D6E96] rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-[#001C34] hover:text-[#7BA6DF]">
                    &#10095;
                </button>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:mb-10"> 
                <h3 className="text-[#BEF4FF] text-base md:text-lg font-semibold">
                    Саундтреки на основі твого 
                    <span className="text-[#40A2FF]"> настрою</span>
                </h3>
                
                <div 
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="flex flex-row justify-start items-start gap-4 md:gap-5 w-full overflow-x-auto scrollbar-none touch-pan-x pb-3 cursor-grab active:cursor-grabbing select-none">

                    {MOOD.map((m) => (
                        <div key={m.id} 
                        className="group flex flex-col items-center gap-1 font-semibold text-[#94D2FF] w-[130px] md:w-[110px] lg:w-[18%] cursor-pointer shrink-0">
                            <img src={m.img} alt={m.mood} 
                            className="w-full h-auto aspect-square object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(64,162,255,0.5)] pointer-events-none"/>
                            <p className="text-sm text-center truncate w-full mt-1 transition-all duration-300 group-hover:text-white">
                                {m.mood}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full min-w-0 md:mb-8">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-[#BEF4FF] text-base md:text-xl font-semibold">
                        Топ ВАША <span className="text-[#40A2FF]">музика</span> сьогодні!
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
                        <div 
                            key={mt.id} 
                            onClick={() => playTrack({
                            title: mt.music,
                            artist: mt.artist,
                            cover: mt.img,
                            duration: mt.duration
                        })}
                            className="flex flex-col gap-2 bg-[#112240]/60 hover:bg-[#162c52]/80 transition-colors duration-200 rounded-xl p-2.5 w-[160px] md:w-[180px] shrink-0 cursor-pointer">
                            <img 
                                src={mt.img} 
                                alt={mt.music} 
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

            <div className="flex flex-col gap-4 w-full min-w-0 md:mb-8">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-[#BEF4FF] text-base md:text-xl font-semibold">
                        Нові <span className="text-[#40A2FF]">музичні</span> релізи
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
                        <div 
                            key={nr.id} 
                            className="flex flex-col gap-2 bg-[#112240]/60 hover:bg-[#162c52]/80 transition-colors duration-200 rounded-xl p-2.5 w-[160px] md:w-[180px] shrink-0 cursor-pointer">
                            <img 
                                src={nr.img} 
                                alt={nr.music} 
                                className="w-full h-auto aspect-square object-cover rounded-lg pointer-events-none"/>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                    <p className="text-white font-medium text-xs md:text-sm truncate w-full">
                                    {nr.music}
                                    </p>
                                    <p className="text-white/60 font-normal text-[10px] md:text-xs truncate w-full">
                                    {nr.artist}
                                    </p>
                                    <p className="text-white/50 font-normal text-[7px] md:text-xs truncate w-full">
                                    {nr.tracks}
                                    </p>
                                </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full min-w-0 md:mb-8">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-[#BEF4FF] text-base md:text-xl font-semibold">
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

            <div className="flex flex-col gap-5 w-full min-w-0 mt-6 md:mb-6">
                <h3 className="text-[#BEF4FF] text-base md:text-xl font-semibold">
                    Нові релізи <span className="text-[#40A2FF]">подкастів</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 w-full">
                    {NEW_PODCASTS.map((pod) => (
                        <div key={pod.id}
                        className="flex flex-row md:flex-col justify-between bg-[#112240]/40 hover:bg-[#162c52]/60 hover:border-[#40A2FF]/20 transition-all duration-300 rounded-2xl p-4 md:p-5 w-full cursor-pointer group gap-4 md:gap-0">
                            <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[180px] md:h-[180px] relative shrink-0 rounded-xl overflow-hidden bg-[#0c1a30] md:order-2 md:mt-4 md:mx-auto">
                                <Image src={pod.img} alt={pod.name} 
                                fill sizes="(max-width: 768px) 110px, 180px" 
                                className="object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"/>
                            </div>
                            
                            <div className="flex flex-col flex-1 justify-between min-w-0 md:contents">
                                <div className="flex flex-col gap-0.5 min-w-0 md:order-1">
                                    <h4 className="text-white font-semibold text-sm md:text-base truncate w-full group-hover:text-[#BEF4FF] transition-colors">
                                        {pod.name}
                                    </h4>
                                    <p className="text-white/40 text-[10px] md:text-xs font-normal truncate">
                                    {pod.genres} <span className="mx-0.5">•</span> Consectetur adipiscing elit quisque faucib...
                                    </p>
                                </div>
                                
                                <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-4 min-w-0 md:order-3">
                                    <p className="text-white/60 font-normal text-[11px] md:text-xs leading-relaxed line-clamp-2 md:line-clamp-4">
                                    {pod.desc}</p>
                                    
                                    <div className="text-white/40 text-[10px] md:text-xs font-light flex items-center gap-1.5">
                                    <span>{pod.date}</span><span>•</span><span>{pod.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-5 w-full max-w-4xl mx-auto md:mt-6 pb-12">
                <h3 className="text-[#BEF4FF] text-base md:text-xl font-semibold">
                    Нові релізи <span className="text-[#40A2FF]">Аудіокниг</span>
                </h3>
                
                <div className="flex flex-col gap-6 w-full">
                    {BOOKS.map((item) => (
                        <div key={item.id} 
                        className="flex flex-row gap-4 md:gap-6 items-start w-full group cursor-pointer">
                            
                            <div className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] shrink-0 rounded-lg overflow-hidden relative bg-[#112240]/40">
                            <img src={item.img} alt={item.book} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"/>
                            </div>
                            
                            <div className="flex flex-col flex-1 min-w-0 h-full justify-between py-1">
                                <div>
                                    <h4 className="text-white text-sm md:text-base font-medium group-hover:text-[#40A2FF] transition-colors duration-200">
                                        {item.book} <span className="text-[#7BA6DF]/60 font-light mx-1">|</span> <span className="text-white/80 font-normal">{item.author}</span></h4>
                                        <p className="text-[#7BA6DF] font-medium text-[11px] md:text-xs mt-0.5 mb-2">
                                            {item.genres}</p>
                                        <p className="text-white/60 font-light text-[11px] md:text-xs leading-relaxed line-clamp-3 md:line-clamp-4 max-w-2xl">
                                            {item.desc}</p>
                                </div>
                                
                                <div className="flex flex-col gap-0.5 mt-3 text-white/40 text-[10px] md:text-xs font-light">
                                <p>{item.date}</p>
                                <p>{item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}