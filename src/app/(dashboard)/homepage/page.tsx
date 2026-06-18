import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
    return(
        <div className="flex flex-col w-full h-screen bg-[#061420]">
            <nav className="flex flex-row justify-between items-center text-[#A6DAFF] px-3 border-b border-[#93E8FF]/30">
            <Link href="/">
            <Image src="/dashboard/pagehome/logo.png" alt="LumiTune"
            width={75} height={75}
            className="mt-1 object-contain h-auto border border-red-900"/>
            </Link>
            
            <div className="flex flex-row bg-[#001C34] border border-[#93E8FF]/30 rounded-l-lg text-sm  py-2">
                <img src="/dashboard/pagehome/search.png" alt="search"
                className="w-4 h-4"/>
                <input type="text"
                placeholder="Виконавці, треки, подкасти..."
                className=""/>
            </div>
            
                <div className="flex flex-row">
                    <img src="/dashboard/pagehome/bell.png"
                    className="w-12 h-12 object-contain"/>
                    <Link href="/account">
                    <img src="/dashboard/pagehome/account_photo.png" alt="account photo"
                    className="w-12 h-12 object-contain"/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}