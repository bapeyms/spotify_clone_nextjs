import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
            <ul className="flex flex-row gap-4 text-[#88BCD6]">
              <li className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Підписки</li>
              <li className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Підтримка</li>
              <li className="hover:text-[#2BD9F2] transition-colors cursor-pointer">Завантажити додаток</li>
            </ul>
            <button className="border border-[#93E8FF] px-3 py-1 rounded hover:bg-[#93E8FF] hover:text-[#061420] transition-all duration-200">Реєстрація</button>
          </nav>
        </header>

        <div className="flex flex-col md:flex-row lg:flex-row items-center relative w-full h-screen bg-[#061420] z-0">
          <img src="/loader/bg1.png"
          className="absolute -z-10 inset-0 w-full h-full object-cover"/>
          
          <div className="flex flex-col flex-1 border border-red-100 w-full h-full">
            
            <div className="flex flex-col items-center">
              <div className="border border-red-900 flex flex-col w-3/5 lg:w-3/4 items-center mt-26 lg:mt-8 mb-2">
                <img src="/loader/lumitune.png"
                className="w-full h-auto"></img>
                <h1 className="text-[#AFF0F2] w-full h-auto text-2xl lg:text-3xl font-semibold pl-6 lg:pl-4 mb-2 -mt-10 lg:-mt-12 text-center lg:text-left">Закортілося чогось новенького у рутині?</h1>
                <p className="text-[#9AB5FFB2] w-full h-auto text-xs lg:text-sm pl-6 lg:pl-4 mb-2 text-center lg:text-left">Мерщій приєднуйся до шабашу музики! Тут звучать ритми, історії!</p>
              </div>
              
              <div className="border border-red-900 flex flex-col lg:flex-row w-3/5 lg:w-3/4 items-center justify-center gap-2 lg:gap-6 mt-2">
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
