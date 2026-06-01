"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#061420] flex flex-col overflow-x-hidden">
      <div className="flex flex-col w-full h-screen font-sans">
        <header className="flex flex-row justify-between items-center text-[#A6DAFF] px-3 border-b border-[#93E8FF]/30">
          <div className=" text-center">
            <Link href="/">
            <Image
            src="/loader/loader_logo.png"
            alt="LumiTune"
            width={150}
            height={150}
            className="mt-1"
            />
            </Link>
          </div>

          <nav className="flex gap-7 font-semibold">
            <div className="hidden md:flex items-center gap-7">
              <ul className="flex flex-row gap-4 text-[#88BCD6]">
                <li className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Підписки</li>
                <li className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Підтримка</li>
                <li className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Завантажити додаток</li>
              </ul>
              <button className="border border-[#93E8FF] px-3 py-1 rounded hover:bg-[#93E8FF] hover:text-[#061420] transition-all duration-200">Реєстрація</button>
            </div>
            
            <button onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#2BD9F2] focus:outline-none cursor-pointer p-2 z-50 relative"
              aria-label="Toggle menu">
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>)}
                </button>
                
                <div className={`fixed inset-0 bg-[#061420]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-6 transition-all duration-300 md:hidden ${
                  isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    
                    <ul className="flex flex-col items-center gap-6 text-[#88BCD6] text-xl">
                      <li onClick={() => setIsOpen(false)} className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Підписки</li>
                      <li onClick={() => setIsOpen(false)} className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Підтримка</li>
                      <li onClick={() => setIsOpen(false)} className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Завантажити додаток</li>
                    </ul>
                    <button onClick={() => setIsOpen(false)} className="border border-[#93E8FF] text-[#93E8FF] px-6 py-2 rounded text-lg hover:bg-[#93E8FF] hover:text-[#061420] transition-all duration-200 w-48 text-center">
                      Реєстрація</button>
                </div>
            </nav>
        </header>

        <div className="flex flex-col md:flex-row lg:flex-row items-center relative w-full h-screen bg-[#061420] z-0">
          <img src="/loader/bg1.png"
          className="absolute -z-10 inset-0 w-full h-full object-cover"/>
          
          <div className="flex flex-col flex-1 w-full h-full">
            
            <div className="flex flex-col items-center">
              <div className="flex flex-col w-3/5 lg:w-3/4 items-center mt-22 lg:mt-8 mb-2">
                <img src="/loader/lumitune.png"
                className="w-full h-auto"></img>
                <h1 className="text-[#AFF0F2] w-full h-auto text-2xl lg:text-3xl font-semibold lg:pl-4 mb-2 -mt-10 lg:-mt-12 text-center lg:text-left">Закортілося чогось новенького у рутині?</h1>
                <p className="text-[#9AB5FFB2] w-full h-auto text-xs lg:text-sm lg:pl-4 mb-2 text-center lg:text-left">Мерщій приєднуйся до шабашу музики! Тут звучать ритми, історії!</p>
              </div>
              
              <div className="flex flex-col lg:flex-row w-3/5 lg:w-3/4 items-center justify-center gap-2 lg:gap-6 mt-2">
                <button className="bg-[#02192E] text-[#2BD9F2] w-full lg:w-1/2 py-2 rounded-lg font-semibold
                hover:bg-[#2BD9F2] hover:text-[#02192E] transition-all cursor-pointer">Перейти на сайт</button>
                <button className="bg-[#2BD9F2] text-[#02192E] w-full lg:w-1/2 py-2 rounded-lg font-semibold
                hover:bg-[#02192E] hover:text-[#2BD9F2] transition-all cursor-pointer">Зареєструватися</button>
              </div>
            </div>

          </div>

          <div className="hidden lg:flex items-end justify-center w-full lg:w-1/2 h-full">
            <img src="/loader/character1.png"
            className="w-full h-auto object-contain"></img>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-screen">
        <img src="/loader/background2.png"
        className="w-full h-full object-cover"></img>
      </div>
    </div>
  );
}
