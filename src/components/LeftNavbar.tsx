"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MENU_ARTISTS } from "@/data/homepage/menu_artists";

export default function LeftNavbar() {
  
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    const baseClasses = "flex flex-row items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium transition-all duration-200 group w-full";
    const activeClasses = "bg-[#001C34] text-white border border-[#AAE4FF]/20 ";
    const inactiveClasses = "text-white hover:text-[#AAE4FF]/60 hover:bg-[#001C34]/30";

    return `${baseClasses} ${pathname === href ? activeClasses : inactiveClasses}`;
  };

    return (
        <aside className="w-64 h-full bg-[#0C0C0C]/40 rounded-l-xl border border-[#93E8FF]/30 p-5 hidden md:flex flex-col gap-6 shrink-0 flex ml-1 mb-2">
          <div className="flex flex-col gap-4 pb-8 border-b border-[#93E8FF]/30">
            
            <div className="text-lg font-semibold text-white">
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
            <div className="text-lg font-semibold text-white pt-2">
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
            </div>
          </div>
          
          <div className="flex flex-col gap-4 border-b pb-8 border-[#93E8FF]/30">
          <Link href="/yourplaylist"
          className="flex flex-row justify-between items-center">
          <p className="text-sm text-[#BFEDFD] hover:text-white font-semibold">Ваші плейлисти</p>
          <img src="/dashboard/pagehome/yourplaylists.png" alt="Your Playlists"
          className="w-6 h-6 object-contain"></img>
          </Link>
            
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[350px] custom-scrollbar">
              {MENU_ARTISTS.map((artist) => (
                <Link 
                key={artist.id} 
                href={`/artist/${artist.id}`}
                className="flex flex-row items-center gap-3 p-2 hover:bg-[#001C34]/60 transition-colors group">
                  
                  <img src={artist.imageUrl} alt={artist.name} 
                  className="w-10 h-10 rounded-full object-cover border border-[#91D1EC]/10"/>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#ADCFD8] group-hover:text-white transition-colors">
                      {artist.name}
                    </span>
                    
                    <span className="text-xs text-[#7E9CA1]">
                    {artist.role}
                    </span>
                  </div>
                  </Link>
                ))}
              </div>
          </div>

          <div className="pt-2 flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm text-[#BFEDFD] font-semibold">Нещодавно прослухані</p>
              <button type="button"
              onClick={() => alert("Оновлення даних...")}>
                <img src="/dashboard/pagehome/recent.png" alt="Recent"
                className="w-6 h-6 object-contain cursor-pointer"/>
              </button>
            </div>

            <div className="flex flex-col items-center py-8">
              <img src="/dashboard/pagehome/clock.png" alt="Recent"
              className="w-26 h-26 object-contain"/>
            </div>
          </div>
        </aside>
    )
}