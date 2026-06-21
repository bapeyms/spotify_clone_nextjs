import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LeftNavbar from "@/components/LeftNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#061420] font-sans text-white">
      <Navbar />

      <div className="flex flex-row w-full overflow-hidden">
        <LeftNavbar />
        <main className="flex-grow flex flex-col min-w-0 justify-start border border-[#93E8FF]/30 rounded-xl mx-1 mb-30 bg-[url('/general/back.png')] bg-cover bg-center">
          {children}
        </main>
      </div>


      <Footer />
    </div>
  );
}