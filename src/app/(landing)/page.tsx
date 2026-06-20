"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Landing() {
    
    const [isOpen, setIsOpen] = useState(false);
    
    return (
    <div className="bg-[#061420] flex flex-col overflow-x-hidden">
        {/* first page */}
        <div className="flex flex-col w-full h-screen">
        <header className="flex flex-row justify-between items-center text-[#A6DAFF] px-3 border-b border-[#93E8FF]/30">
          <div className="flex items-center">
            <Link href="/">
            <Image
            src="/loader/loader_logo.png"
            alt="LumiTune"
            width={150}
            height={150}
            className="mt-1 object-contain"
            />
            </Link>
          </div>

          {/* menu + burger menu */}
          <nav className="flex gap-7 font-semibold">
            <div className="hidden md:flex items-center gap-9">
              <ul className="flex flex-row gap-6 text-[#88BCD6]">
                <li><Link href="/subscriptions" className="hover:text-[#2BD9F2] transition-colors">Підписки</Link></li>
                <li><Link href="/support"className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Підтримка</Link></li>
                <li><a href="#" 
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Завантажити додаток</a></li>
              </ul>
              <Link href="/signup"
               className="border border-[#93E8FF] px-3 py-1 rounded hover:bg-[#93E8FF] hover:text-[#061420] transition-all duration-200 cursor-pointer">
                Реєстрація</Link>
            </div>
            
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#2BD9F2] focus:outline-none cursor-pointer p-2 z-50 relative"
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
                      className="hover:text-[#2BD9F2] transition-colors block py-2">Підписки</Link></li>

                      <li><Link href="/support" 
                      onClick={() => setIsOpen(false)} 
                      className="hover:text-[#2BD9F2] transition-colors block py-2">Підтримка</Link></li>

                      <li><Link href="/download" 
                      onClick={() => setIsOpen(false)} 
                      className="hover:text-[#2BD9F2] transition-colors block py-2">Завантажити додаток</Link></li>
                    </ul>
                  </nav>
                  
                  <Link href="/signup"
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center justify-center border border-[#93E8FF] text-[#93E8FF] px-6 py-2 rounded text-lg hover:bg-[#93E8FF] hover:text-[#061420] transition-all duration-200 w-48 text-center">
                    Реєстрація</Link>
                  </div>
          </nav>
        </header>

        {/* first page main content */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center relative w-full h-screen bg-[#061420] z-0">
          <img src="/loader/bg1.png"
          className="absolute -z-10 inset-0 w-full h-full object-cover"/>
          
          <div className="flex flex-col justify-center lg:justify-start flex-1 w-full h-full">
            
            <div className="flex flex-col items-center">
              <div className="flex flex-col w-3/5 lg:w-3/4 items-center lg:mt-6 mb-2">
                <img src="/loader/lumitune.png"
                className="w-full h-auto"></img>
                <h1 className="text-[#AFF0F2] w-full h-auto text-lg sm:text-2xl lg:text-3xl font-semibold lg:pl-4 mb-2 -mt-8 lg:-mt-12 text-center lg:text-left leading-tight">Закортілося чогось новенького у рутині?</h1>
                <p className="text-[#9AB5FFB2] w-full h-auto text-xs lg:text-sm lg:pl-4 mb-2 text-center lg:text-left">Мерщій приєднуйся до шабашу музики! Тут звучать ритми, історії!</p>
              </div>
              
              <div className="flex flex-col lg:flex-row w-3/5 lg:w-3/4 items-center justify-center gap-2 lg:gap-6 mt-2">
                <Link href="/homepage"
                className="bg-[#02192E] text-[#2BD9F2] text-center w-full lg:w-1/2 py-2 rounded-lg font-semibold
                hover:bg-[#2BD9F2] hover:text-[#02192E] transition-all cursor-pointer">Перейти на сайт</Link>
                <Link href="/signup"
                className="bg-[#2BD9F2] text-[#02192E] text-center w-full lg:w-1/2 py-2 rounded-lg font-semibold
                hover:bg-[#02192E] hover:text-[#2BD9F2] transition-all cursor-pointer">Зареєструватися</Link>
              </div>
            </div>

          </div>

          <div className="hidden lg:flex items-end justify-center w-full lg:w-1/2 h-full">
            <img src="/loader/character1.png"
            className="w-full h-auto object-contain"></img>
          </div>
        </div>
      </div>

      {/* second page */}
      <div className="flex flex-col items-center justify-center relative w-full h-screen bg-[#061420] z-0 px-12 lg:px-24 overflow-hidden">
        <img src="/loader/bg2.png"
        className="absolute -z-10 inset-0 w-full h-full object-cover pointer-events-none"></img>
        <img src="/loader/character2.png"
        className="hidden lg:flex absolute -z-10 inset-0 lg:w-7/10 h-full object-cover pointer-events-none"></img>
        
        <div className="flex flex-col w-full max-w-5xl gap-20 lg:gap-10 relative z-10">
          
          <div className="flex flex-col items-center lg:items-stretch text-center w-58 py-5 px-8 
          text-[#B0FFFF] border border-[#B0FFFF]/30 bg-white/5 backdrop-blur-sm rounded-xl self-start shadow-lg shadow-[#B0FFFF]/5">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-1">100m+</h1>
            <h3 className="text-base lg:text-lg text-[#B0FFFF]/80 font-medium">Пісень</h3>
          </div>

          <div className="flex flex-col items-center text-center w-58 py-5 px-8 
          text-[#B4ADFF] border border-[#B4ADFF]/30 bg-white/5 backdrop-blur-sm rounded-xl self-center shadow-lg shadow-[#B4ADFF]/5">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-1">40k+</h1>
            <h3 className="text-base lg:text-lg text-[#B4ADFF]/80 font-medium">Підкастів</h3>
          </div>

          <div className="flex flex-col items-center text-center w-58 py-5 px-8 
          text-[#BAFFDF] border border-[#BAFFDF]/30 bg-white/5 backdrop-blur-sm rounded-xl self-end shadow-lg shadow-[#BAFFDF]/5">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-1">20k+</h1>
            <h3 className="text-base lg:text-lg text-[#BAFFDF]/80 font-medium">Виконавців</h3>
          </div>

        </div>
      </div>

      {/* third page */}
      <div className="flex flex-row relative w-full h-screen bg-[#061420] z-0 overflow-hidden">
        <img src="/loader/bg3.png"
        className="absolute -z-10 inset-0 w-full h-full object-cover pointer-events-none"></img>
        
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-6 gap-12 z-10">
          <h1 className="w-3/4 h-auto text-[#BCE3FF] text-3xl lg:text-4xl">Додавай свої треки до медіатеки!</h1>
          
          <div className="flex flex-row justify-center items-center gap-4 w-3/4 h-auto">
            <img src="/loader/download3.png"
            className="w-1/5 h-auto"></img>
            <h2 className="text-[#94AAFF]/80 text-xl lg:text-2xl leading-tight">Прямо з комп'ютера завантажуй музику!</h2>
          </div>
          
          <div className="flex flex-row justify-center items-center gap-4 w-3/4 h-auto">
            <h2 className="text-[#94FFFF]/80 text-xl lg:text-2xl leading-tight">Створюй плейлисти та слухай, коли хочеш!</h2>
            <img src="/loader/pencil3.png"
            className="w-1/5"></img>
          </div>

        </div>
        
        <div className="hidden lg:block lg:absolute bottom-0 right-0 w-[70vw] lg:w-[38vw] h-auto z-0 pointer-events-none select-none">
          <img src="/loader/bg3_homescreen.png"
          className="w-full h-auto object-contain block"></img>
        </div>
      </div>

      {/* fourth page */}
      <div className="relative w-full min-h-screen bg-[#061420] z-0 overflow-hidden flex flex-col justify-between py-12 px-6 lg:px-20">
        <img src="/loader/bg4.png" 
        className="absolute -z-10 inset-0 w-full h-full min-w-full min-h-full object-cover object-center pointer-events-none" alt="background" />
        
        <h1 className="text-[#C8FEFF] text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center tracking-wide mb-4 mt-4 lg:mb-0">
          Що можна у нашому застосунку?</h1>
          
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 lg:gap-8 flex-1">
            
            <div className="hidden lg:flex items-center justify-center w-[60%] select-none pointer-events-none">
            <img src="/loader/iphone4.png" 
            className="w-[90%] max-w-[650px] h-auto object-contain"/>
            </div>
            
            <div className="flex flex-col justify-center w-[80%] lg:w-1/2 gap-18 md:gap-12 lg:pl-12">
            <div className="flex flex-row justify-center items-center gap-5 sm:gap-6 max-w-[500px]">

              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
                <img src="/loader/download4.png" 
                className="w-full h-full object-contain"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <h2 className="text-[#92E9E4] text-xl sm:text-2xl font-semibold">Крок перший</h2>
                <h3 className="text-[#92E9E4]/70 text-base sm:text-lg font-medium">Завантажуй додаток</h3>
                <p className="text-[#92E9E4]/40 text-xs sm:text-sm leading-relaxed">
                Поринь у світ музики — встанови додаток LumiTune за кілька секунд!</p>
              </div>
            </div>
            
            <div className="flex flex-row items-center gap-5 sm:gap-6 max-w-[500px]">
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
                <img src="/loader/music4.png" 
                className="w-full h-full object-contain"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <h2 className="text-[#E1DAFF] text-xl sm:text-2xl font-semibold">Крок другий</h2>
                <h3 className="text-[#D6C9FF]/70 text-base sm:text-lg font-medium">Переноси свої улюблені треки</h3>
                <p className="text-[#A692E9]/60 text-xs sm:text-sm leading-relaxed">Забирай треки з собою та додавай до медіатеки.</p>
              </div>
            </div>
            
            <div className="flex flex-row items-center gap-5 sm:gap-6 max-w-[500px]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
                <img src="/loader/headphones4.png" 
                className="w-full h-full object-contain"/>
              </div>
              
              <div className="flex flex-col gap-1">
                <h2 className="text-[#BACBFF] text-xl sm:text-2xl font-semibold">Крок третій</h2>
                <h3 className="text-[#ABC7FF]/70 text-base sm:text-lg font-medium">Слухай оффлайн</h3>
                <p className="text-[#929CE9]/80 text-xs sm:text-sm leading-relaxed">Не потрібен інтернет — слухай будь-де.</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* sixth page */}
        <div className="relative w-full h-screen bg-[#061420] z-0 overflow-hidden flex flex-col justify-center px-6 lg:px-20">
          <img src="/loader/bg5.png" 
          className="absolute -z-10 inset-0 w-full h-full object-cover scale-200 lg:scale-100 pointer-events-none" alt="background" />
          
          <img src="/loader/bg_pic1_5.png" alt="left character" 
          className="hidden lg:block absolute left-0 bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-1/3 max-w-[500px] md:max-w-[600px] -z-10 object-contain pointer-events-none"/>
          
          <img src="/loader/bg_pic2_5.png" alt="right character" 
          className="hidden lg:block absolute right-0 bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 w-1/3 max-w-[300px] md:max-w-[500px] -z-10 object-contain pointer-events-none"/>
          
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-[#AFF0F2] font-semibold text-2xl md:text-3xl lg:text-4xl">ЗАЦІКАВИЛИСЯ?</h1>
            <h1 className="text-[#AFF0F2] font-bold text-2xl md:text-3xl lg:text-4xl">СКОРІШЕ ПРИЄДНУЙТЕСЯ!</h1>
            <a href="#" 
            onClick={(e) => e.preventDefault()}
            className="flex flex-row items-center gap-2 bg-[#2BD9F2] rounded-sm px-4 py-2 mt-4 lg:mt-6
            hover:bg-[#AFF0F2] transition-all cursor-pointer">
              <img src="/loader/download5.png"
              className="w-4 h-4 object-contain"></img>
              <span className="text-[#02192E] font-semibold lg:text-md">Завантажити застосунок</span>
              </a>
          </div>
        </div>
    </div>
    )
}