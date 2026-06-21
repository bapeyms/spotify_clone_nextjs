"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { MENU_ARTISTS } from "@/data/homepage/menu_artists";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
    const getLinkClass = (href: string) => {
        const baseClasses = "flex flex-row items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium transition-all duration-200 group w-full";
        const activeClasses = "bg-[#131e26]/70 text-white";
        const inactiveClasses = "text-white hover:text-[#AAE4FF]/60 hover:bg-[#001C34]/30";
        
        return `${baseClasses} ${pathname === href ? activeClasses : inactiveClasses}`;
    };

    return(
        <div className="relative w-full mb-2">
            <nav className="w-full h-16 flex flex-row justify-between items-center bg-[#061420] text-[#A6DAFF] px-4 lg:px-8 border-b border-[#93E8FF]/30 shrink-0 mb-2">
            <Link href="/homepage">
            <Image src="/dashboard/pagehome/logo.png" alt="LumiTune"
            width={75} height={75}
            sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 80px"
            className="mt-1 object-contain h-auto"/>
            </Link>
            
            <div className="w-[34vw] flex flex-row justify-between bg-[#001C34] text-[#AAE4FF] border border-[#AAE4FF]/50 focus-within:border-[#2BD9F2] focus-within:shadow-[0_0_10px_rgba(43,217,242,0.2)] rounded-lg text-sm py-2 h-9 items-center transition-all group">
            
            <div className="flex flex-row items-center gap-3 pl-4 flex-1 h-full">
                <img src="/dashboard/pagehome/search.png" alt="search"
                className="w-4 h-4 opacity-70 group-focus-within:opacity-100 transition-opacity pointer-events-none"/>
                <input type="text"
                placeholder="Виконавці, треки, подкасти..."
                className="placeholder-[#AAE4FF]/60 text-[#AAE4FF] bg-transparent focus:outline-none focus:ring-0 w-full h-full text-xs"/>
            </div>
            
            <button type="button"
            onClick={() => alert("Голосовий пошук активовано!")}
            className="border-l border-[#AAE4FF]/30 h-full px-4 flex items-center justify-center rounded-r-lg transition-colors cursor-pointer group/mic">
                <img src="/dashboard/pagehome/microphone.png" alt="microphone"
                className="w-3 h-auto group-hover/mic:scale-105 transition-transform"/>
            </button>  
            </div>
            
            <div className="flex flex-row gap-2 items-center">
                <button type="button"
                onClick={() => alert("Сповіщення ввімкнено")}>
                    <img src="/dashboard/pagehome/bell.png" alt="upload"
                    className="hidden lg:flex w-10 h-10 object-contain cursor-pointer"/>
                </button>
                <Link href="/account">
                <img src="/dashboard/pagehome/account_photo.png" alt="account photo"
                className="hidden lg:flex w-10 h-10 object-contain cursor-pointer"/>
                </Link>

                <button type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-30 cursor-pointer"
                aria-label="Toggle menu">
                    <span className={`h-0.5 w-6 bg-[#00C8FF] rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`h-0.5 w-6 bg-[#00C8FF] rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-6 bg-[#00C8FF] rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>
        </nav>
        
        <div className={`absolute top-16 left-0 w-full bg-[#061420BF] backdrop-blur-xl backdrop-filter border-b border-[#93E8FF]/30 rounded-b-lg px-4 py-5 flex flex-col gap-6 z-10 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"}`}>
            
            <div className="flex flex-row justify-between">
                <Link href="/account"
                    className="flex flex-row gap-3 items-center">
                    <img src="/dashboard/pagehome/account_photo.png" alt="account photo"
                    className="flex w-10 h-10 object-contain cursor-pointer"/>
                    <p className="font-light hover:text-[#AAE4FF]/60 font-md transition-all duration-200">LumiTune Account</p>
                </Link>
                
                <button type="button"
                onClick={() => alert("Сповіщення ввімкнено")}>
                    <img src="/dashboard/pagehome/bell.png" alt="upload"
                    className="flex w-10 h-10 object-contain cursor-pointer"/>
                </button>
            </div>

            <div className="flex flex-col gap-4 pb-8 border-b border-[#93E8FF]/30">
            <div className="text-xl font-semibold text-white mb-2">
              <h2>Меню</h2>
            </div>

            <div className="flex flex-col gap-2">
              <Link href="/homepage" className={getLinkClass("/homepage")}>
              <img src="/dashboard/pagehome/home.png" alt="Home" 
              className="w-5 h-5 object-contain opacity-100"/>
              <span>Головна</span>
              </Link>
              
              <Link href="/mylibrary" className={getLinkClass("/mylibrary")}>
              <img src="/dashboard/pagehome/medialibrary.png" alt="Library" 
              className="w-5 h-5 object-contain opacity-100"/>
              <span>Моя медіатека</span>
              </Link>
            </div>
            </div>

            <div className="flex flex-col gap-4">
            <div className="text-xl font-semibold text-white pt-2">
              <h2>Плейлисти</h2>
            </div>

            <div className="flex flex-col gap-2">
              <Link href="/sonyapage" className={getLinkClass("/sonyapage")}>
              <img src="/dashboard/pagehome/favourite.png" alt="Home" 
              className="w-5 h-5 object-contain opacity-100"/>
              <span>Улюблені треки</span>
              </Link>
              
              <Link href="/createplaylist" className={getLinkClass("/createplaylist")}>
              <img src="/dashboard/pagehome/createplaylist.png" alt="Library" 
              className="w-5 h-5 object-contain opacity-100"/>
              <span>Створити плейлист</span>
              </Link>

              <Link href="/createplaylist" className={getLinkClass("/createplaylist")}>
              <img src="/dashboard/pagehome/yourplaylists.png" alt="Library" 
              className="w-5 h-5 object-contain opacity-100"/>
              <span>Ваші плейлисти</span>
              </Link>
            </div>
            </div>
        </div>
    </div>
    )
}