"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NotFound() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen bg-[#061420]">
      <header className="flex flex-row justify-between items-center text-[#88BCD6] px-3 border-b border-[#93E8FF]/30">
          <div>
            <Link href="/">
            <Image
            src="/loader/loader_logo.png"
            alt="LumiTune"
            width={150}
            height={150}
            className="mt-1 object-contain h-auto"
            />
            </Link>
          </div>

          {/* menu + burger menu */}
          <nav className="flex gap-7 font-semibold">
            <div className="hidden md:flex items-center gap-9">
              <ul className="flex flex-row gap-6 text-[#88BCD6]">
                <li><Link href="/aboutus" className="hover:text-[#AFF0F2] transition-colors">Про Нас</Link></li>
                <li><Link href="/support"className="hover:text-[#AFF0F2] transition-colors cursor-pointer">Підтримка</Link></li>
                <li><a href="#" 
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#AFF0F2] transition-colors cursor-pointer">Контакти</a></li>
              </ul>
              <Link href="/signup"
               className="px-3 py-1 rounded transition-all duration-200 cursor-pointer">
                <div className="flex flex-row gap-4 items-center">
                <img src="/notfound/phone.png"
                className="w-4 h-4 object-contain"></img>
                <p className="hover:text-[#AFF0F2]">(380) 00-000-00-00</p>
              </div>
               </Link>
            </div>
            
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#88BCD6] focus:outline-none cursor-pointer p-2 z-50 relative"
            aria-label="Toggle menu">
              
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                  ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                )}
              </button>
              
              <div className={`fixed inset-0 bg-[#061420]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-6 transition-all duration-300 md:hidden ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                  
                  <nav aria-label="Mobile Navigation">
                    <ul className="flex flex-col items-center gap-6 text-[#88BCD6] text-xl">
                      <li><Link href="/subscriptions" 
                      onClick={() => setIsOpen(false)} 
                      className="hover:text-[#AFF0F2] transition-colors block py-2">Про нас</Link></li>

                      <li><Link href="/support" 
                      onClick={() => setIsOpen(false)} 
                      className="hover:text-[#AFF0F2] transition-colors block py-2">Підтримка</Link></li>

                      <li><Link href="/download" 
                      onClick={() => setIsOpen(false)} 
                      className="hover:text-[#AFF0F2] transition-colors block py-2">Контакти</Link></li>
                    </ul>
                  </nav>
                  
                  <Link href="/signup"
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center justify-center px-6 py-2 rounded text-lg transition-all duration-200 w-60 text-center">
                    <div className="flex flex-row gap-4 items-center">
                      <img src="/notfound/phone.png"
                      className="w-4 h-4 object-contain"></img>
                      <p className="hover:text-[#AFF0F2]">(380) 00-000-00-00</p>
                      </div>
                    </Link>
                  </div>
          </nav>
        </header>

        <main className="flex flex-col md:flex-row items-center justify-center lg:justify-start relative w-full h-screen bg-[#061420] px-8 md:px-16 lg:px-24 z-0 overflow-hidden">
          <img src="/notfound/bg.png" alt="background gradient"
          className="absolute -z-10 inset-0 w-full h-full object-cover opacity-50 pointer-events-none"/>
          
          <div className="z-20 relative flex flex-col justify-center rounded-2xl border border-[#91D1EC]/20 bg-[#0a1b2c]/80 p-8 sm:p-12 md:p-16 max-w-xl w-[90vw] h-[70vh] overflow-hidden shadow-2xl z-10 my-auto">
          
          <div className="absolute inset-0 flex items-center justify-center text-[13rem] sm:text-[16rem] font-black text-white/[0.06] select-none z-0 pointer-events-none tracking-widest font-mono">
          404</div>
          
          <div className="font-semibold">
          <h1 className="text-[#AFF0F2] text-4xl mb-6">УПС..ТИ НАТРАПИВ НА МІЖМЕРЕЖЕВУ ТИШУ...</h1>
          <h3 className="text-[#73ADC4] text-base">Тиша — не кінець. Це пауза перед наступним вибухом ритму</h3>
          <Link href="/homepage" 
          className="flex items-center justify-center border border-[#91D1EC]/50 px-4 py-3 rounded-lg transition-all duration-200 w-48 text-center mt-6">
            <div className="flex flex-row gap-2 items-center">
              <img src="/notfound/arrow.png" className="w-3 h-3 object-contain" alt="arrow"></img>
              <p className="text-[#91D8EC]">На головну</p>
              </div>
          </Link>
          </div>
          </div>

          <img src="/notfound/character.png" alt="LumiTune 404 Character"
          className="hidden lg:block absolute bottom-0 right-0 h-[85vh] max-w-[45vw] object-contain object-bottom object-right z-10"/>
          </main>
    </div>
  );
}