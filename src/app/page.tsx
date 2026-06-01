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

        <div className="flex flex-row relative w-full h-screen bg-[#061420] z-0">
          <img src="/loader/bg1.png"
          className="absolute -z-10 inset-0 w-full h-full object-cover"/>
          
          <div className="relative z-10 flex flex-col w-95 h-auto gap-1 mt-15 lg:ml-35">
            <img src="/loader/lumitune.png"
            className="w-96 h-auto"></img>
            <h1 className="text-[#AFF0F2] text-4xl font-semibold text-center">Закортілося чогось новенького у рутині?</h1>
            <p className="text-[#9AB5FFB2] text-center">Мерщій приєднуйся до шабашу музик! Тут звучать ритми, історії!</p>
            
            <div className="flex flex-row items-center justify-around mt-2">
              <button className="bg-[#02192E] text-[#2BD9F2] px-3 py-2 rounded-lg font-semibold">Перейти на сайт</button>
              <button className="bg-[#2BD9F2] text-[#02192E] px-3 py-2 rounded-lg font-semibold">Зареєструватися</button>
            </div>
          </div>

          <div>
            <img src="/loader/character1.png"></img>
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
