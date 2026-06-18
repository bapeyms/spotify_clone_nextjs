import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full h-[70vh] bg-[#061420] rounded-lg border border-[#93E8FF]/30 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center md:flex-row w-[75vw] h-auto md:justify-between border-b border-[#93E8FF]/30 pb-4 gap-8">
            <img src="/loader/footer_logo.png"
            className="hidden md:block w-60 h-60 lg:w-72 lg:h-72"></img>

            <div className="flex flex-col gap-6 md:gap-4 justify-center items-center md:items-start">
              <div className="flex flex-col gap-6 md:gap-4  text-[#FFFFFF] items-center md:items-start">

                <div className="flex flex-row gap-4 items-center">
                <img src="/loader/location_footer.png"
                className="w-4 h-4 object-contain"></img>
                <p className="text-center md:text-left">Adress st. Shevchenko, 25 house, UA, Odesa, 00000</p>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <img src="/loader/phone_footer.png"
                className="w-4 h-4 object-contain"></img>
                <p>(380) 00-000-00-00</p>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <img src="/loader/mail_footer.png"
                className="w-4 h-4 object-contain"></img>
                <p>lumitune@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-row gap-2 justify-center md:justify-start">
              <a href="https://www.facebook.com/"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Open Facebook">
                <img src="/loader/facebook_footer.png" alt="facebook" className="cursor-pointer"></img>
              </a>

              <a href="https://x.com/"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Open X">
                <img src="/loader/twitter_footer.png" alt="twitter" className="cursor-pointer"></img>
              </a>
              
              <a href="https://www.pinterest.com/"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Open Pinterest">
                <img src="/loader/pinterest_footer.png" alt="pinterest" className="cursor-pointer"></img>
              </a>

              <a href="https://uk.wikipedia.org/wiki/RSS"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Open Pinterest">
                <img src="/loader/rss_footer.png" alt="rss" className="cursor-pointer"></img>
              </a>
            </div>
            </div>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-12 text-[#BCE3FF]/60 text-sm lg:text-base">
            <li><Link href="/about" 
            className="hover:text-[#93E8FF] transition-colors">About us</Link></li>

            <li><Link href="/contacts" 
            className="hover:text-[#93E8FF] transition-colors">Contact us</Link></li>

            <li><Link href="/help" 
            className="hover:text-[#93E8FF] transition-colors">Help</Link></li>

            <li><Link href="/privacy" 
            className="hover:text-[#93E8FF] transition-colors">Privacy Policy</Link></li>

            <li><Link href="/disclaimer" 
            className="hover:text-[#93E8FF] transition-colors">Disclaimer</Link></li>
            </ul>
          </nav>
        </footer>
    )
}