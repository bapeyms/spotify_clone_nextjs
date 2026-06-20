"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { CONCERT } from "@/data/homepage/concert_slider"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function HomePage() {

    const pathname = usePathname();
    
    const getLinkClass = (href: string) => {
        const baseClasses = "flex flex-row items-center gap-3 px-6 py-1.5 rounded-md border border-[#AAE4FF]/20 text-xs font-medium transition-all duration-200 group";
        const activeClasses = "bg-[#3A454C]/50 hover:bg-[#3A454C] text-white border border-[#AAE4FF]/20 ";
        const inactiveClasses = "text-white hover:text-[#AAE4FF]/60 hover:bg-[#001C34]/30";
        
        return `${baseClasses} ${pathname === href ? activeClasses : inactiveClasses}`;
    };

    return (
        <div className="flex flex-col text-white gap-8">
            <style jsx global>{`
                .concert-swiper .swiper-pagination {
                    position: absolute;
                    top: -24px !important;
                    bottom: auto !important;
                    display: flex;
                    justify-content: center;
                    gap: 6px;
                }
                .concert-swiper .swiper-pagination-bullet {
                    background: #AAE4FF !important;
                    opacity: 0.3;
                    width: 6px;
                    height: 6px;
                    transition: all 0.3s ease;
                }
                .concert-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: #2BD9F2 !important;
                    transform: scale(1.2);
                }
                .concert-swiper .swiper-button-next::after,
                .concert-swiper .swiper-button-prev::after {
                    display: none;
                }
            `}</style>

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

            <div className="relative w-full max-w-4xl mx-auto px-4 md:px-10 group mt-4">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: ".concert-next",
                        prevEl: ".concert-prev",
                    }}
                    loop={true}
                    className="concert-swiper rounded-2xl overflow-visible"
                >
                    {CONCERT.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full aspect-[21/9] md:aspect-[2.35/1] rounded-2xl overflow-hidden border border-[#93E8FF]/20 shadow-lg">
                                <Image
                                    src={slide.img}
                                    alt={slide.artist}
                                    fill
                                    priority={slide.id === "1"}
                                    className="object-cover select-none"
                                    sizes="(max-width: 1024px) 100vw, 896px"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="concert-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#061420]/60 
                border border-[#93E8FF]/30 text-[#AAE4FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-[#001C34] hover:text-[#2BD9F2]">
                    &#10094;
                </button>

                <button className="concert-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#061420]/60 
                border border-[#93E8FF]/30 text-[#AAE4FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-[#001C34] hover:text-[#2BD9F2]">
                    &#10095;
                </button>
            </div>
        </div>
    )
}