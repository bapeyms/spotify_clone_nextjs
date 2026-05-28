import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <menu className="flex flex-row">
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
      </div>
    </div>
  );
}
