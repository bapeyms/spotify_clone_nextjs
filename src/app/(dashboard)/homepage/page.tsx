"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useRef } from "react"

import { CONCERT } from "@/data/homepage/concert_slider"
import { MOOD } from "@/data/homepage/mood"
import { MUSIC_TODAY } from "@/data/homepage/your_music_today"
import { NEW_RELEASES } from "@/data/homepage/new_releases"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function HomePage() {
    const pathname = usePathname();
    
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

    // buttons
    const getLinkClass = (href: string) => {
        const baseClasses = "flex flex-row items-center gap-3 px-7 py-1.5 rounded-md border border-[#AAE4FF]/20 text-xs font-medium transition-all duration-200 group";
        const activeClasses = "bg-[#3A454C]/50 hover:bg-[#3A454C] text-white border border-[#AAE4FF]/20 ";
        const inactiveClasses = "text-white hover:text-[#AAE4FF]/60 hover:bg-[#001C34]/30";
        return `${baseClasses} ${pathname === href ? activeClasses : inactiveClasses}`;
    };  

    return (
        <div className="flex flex-col text-white gap-8 w-full max-w-full">

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
                        <div key={m.id} className="flex flex-col items-center gap-1 font-semibold text-[#94D2FF] w-[130px] md:w-[110px] lg:w-[18%] cursor-pointer shrink-0">
                            <img src={m.img} alt={m.mood} className="w-full h-auto aspect-square object-contain transition-transform duration-200 hover:scale-105 pointer-events-none"/>
                            <p className="text-sm md:text-sm text-center truncate w-full mt-1">{m.mood}</p>
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
                            className="flex flex-col gap-2 bg-[#112240]/60 hover:bg-[#162c52]/80 transition-colors duration-200 rounded-xl p-2.5 w-[140px] md:w-[170px] shrink-0 cursor-pointer">
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

            <div className="flex flex-col gap-4 w-full min-w-0">
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
                            className="flex flex-col gap-2 bg-[#112240]/60 hover:bg-[#162c52]/80 transition-colors duration-200 rounded-xl p-2.5 w-[140px] md:w-[170px] shrink-0 cursor-pointer">
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
        </div>
    )
}