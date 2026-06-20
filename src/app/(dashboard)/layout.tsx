import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LeftNavbar from "@/components/LeftNavbar";
import RightNavbar from "@/components/RightNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#061420] font-sans text-white">
      <Navbar/>
      
      <div className="flex flex-row flex-1 w-full overflow-hidden">
        <LeftNavbar/>
        <main className="flex-grow flex flex-col justify-start p-8 border border-[#93E8FF]/30 rounded-lg mx-1 mb-30">
        {children}
        </main>
        <RightNavbar/>
      </div>
      
      
      <Footer/>
    </div>
  );
}