import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LeftNavbar from "@/components/LeftNavbar";
import RightNavbar from "@/components/RightNavbar";
import MiniPlayer from "@/components/MiniPlayer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex flex-col min-h-screen bg-[#061420] font-sans text-white">
        <Navbar />

        <div className="flex flex-row flex-1 w-full overflow-hidden">
          <LeftNavbar />
          <main className="flex-grow flex flex-col min-w-0 justify-start py-4 px-4 md:px-10 border border-[#93E8FF]/30 rounded-xl mx-1 mb-30">
            {children}
          </main>

          <RightNavbar />
        </div>
        <MiniPlayer />
        <Footer />
      </div>
  );
}