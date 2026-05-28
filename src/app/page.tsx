import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col bg-[#061420] w-full h-screen">
        <menu className="flex flex-row text-[#A6DAFF] border border-red">
          <div>
            <Link href="/">
            <Image
            src="/loader/loader_logo.png"
            alt="LumiTune"
            width={150}
            height={150}
            />
            </Link>
          </div>

          <div className="flex">
            <ul className="flex flex-row">
              <li>Підписки</li>
              <li>Підтримка</li>
              <li>Завантажити додаток</li>
            </ul>
            <button>Реєстрація</button>
          </div>
        </menu>

        <div className="border border-pink-400">
          <div>
            <img></img>
            <h1 className="text-[#AFF0F2]">Закортилося чогось новенького у рутині?</h1>
            <p className="text-[#9AB5FFB2]">Мерщій приєднуйся до шабашу музик! Тут звучать ритми, історії!</p>
          </div>
          <div>
            <button className="bg-[#02192E] text-[#2BD9F2]">Перейти на сайт</button>
            <button className="bg-[#2BD9F2] text-[#02192E]">Зареєструватися</button>
          </div>
        </div>
      </div>
    </div>
  );
}
