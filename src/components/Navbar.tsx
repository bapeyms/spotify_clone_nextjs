"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return(
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
                className="w-10 h-10 object-contain cursor-pointer"/>
                </Link>
            </div>
        </nav>
    )
}