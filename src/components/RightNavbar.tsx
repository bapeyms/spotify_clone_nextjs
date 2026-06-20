"use client"

import Link from "next/link"
import { useState } from "react"
import { RADIO } from "@/data/homepage/radio"


export default function RightNavbar() {

  const [isCleared, setIsCleared] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

    return (
        <aside className="w-80 h-full bg-[#0C0C0C]/40 rounded-r-lg border border-[#93E8FF]/30 p-5 flex flex-col gap-4 shrink-0 hidden xl:flex mr-1">
          
          {!isCleared ? (
            
            <div className="flex flex-col h-full gap-4 mb-16">
              {RADIO.slice(0, 1).map((r) => (
                <div key="header" 
                className="flex flex-row justify-between items-center text-white pb-2">
                  <h3 className="text-lg font-light">{r.artist} Radio</h3>
                  <div className="flex flex-row gap-2">
                    <button>
                      <img src="/dashboard/pagehome/more.png" alt="more"
                      className="w-4 h-4 object-contain cursor-pointer"/>
                    </button>
                    <button onClick={() => setIsCleared(true)}
                    className="text-[#7E9CA1] hover:text-white transition-colors cursor-pointer text-sm p-1"
                    aria-label="Clear radio content">✕
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="flex flex-col gap-3 overflow-y-auto flex-1 custom-scrollbar mb-2">
                {RADIO.map((r) => (
                  <div key={r.id} 
                  className="flex flex-col gap-4 transition-colors">
                    
                    <div className="w-full aspect-square overflow-hidden">
                      <img src={r.artistImg1} alt={r.artist} 
                      className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row items-center gap-3">
                        <div className="flex flex-col gap-1">
                        <span className="text-base font-light text-white">{r.song}</span>
                        <span className="text-xs text-white font-semibold mt-0.5">{r.artist}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-row gap-4 items-center">
                        <button type="button"
                        onClick={() => alert("Пісня завантажена!")}>
                          <img src="/dashboard/pagehome/upload.png" alt="upload"
                          className="w-4 h-4 object-contain cursor-pointer"/>
                        </button>
                        <button type="button"
                        onClick={() => alert("Пісня збережена!")}>
                          <img src="/dashboard/pagehome/plus.png" alt="upload"
                          className="w-4 h-4 object-contain cursor-pointer"/>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 overflow-y-auto flex-1 custom-scrollbar">
                  {RADIO.map((r) => (
                  <div key={r.id} 
                  className="flex flex-col gap-4 transition-colors">
                    
                    <div className="w-full aspect-square overflow-hidden">
                      <img src={r.artistImg2} alt={r.artist} 
                      className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="flex flex-col justify-between gap-1">
                      <span className="font-semibold text-md">{r.artist}</span>
                      <div className="flex flex-row justify-between items-center">
                        <span className="text-white/60 text-xs">{r.listeners}</span>
                        <button onClick={() => setIsSubscribed(!isSubscribed)}
                        className={`text-[10px] font-semibold px-3 py-[2px] rounded-lg border transition-all duration-200 cursor-pointer 
                          ${isSubscribed
                            ? "bg-transparent border-[#93E8FF]/40 text-[#93E8FF] hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400"
                            : "bg-[#3A454C] text-white border-[#87B0CE] hover:bg-[#3A454C]/50"}`}>
                            {isSubscribed ? "Відписатися" : "Підписатися"}
                          </button>
                      </div>
                      <p className="text-white/60 text-xs">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 gap-4">
              <div className="w-20 h-20 rounded-full bg-[#001C34]/60 border border-[#93E8FF]/20 flex items-center justify-center">
              <img src="/dashboard/pagehome/logo.png" alt="LumiTune"
               className="w-15 h-15 object-contain opacity-60 pt-3"/>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-md font-medium text-white">Міжмережева тиша...</h4>
                <p className="text-xs text-[#7E9CA1] max-w-[200px] leading-normal">
                  Оберіть радіо або трек на головній сторінці, щоб побачити деталі
                </p>
              </div>
            </div>
          )}
        </aside>
    )
}