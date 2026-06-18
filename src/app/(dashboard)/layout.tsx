import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#061420] font-sans text-white">
      <Navbar />
      
      <main className="flex-grow flex flex-col justify-start p-8 border-red-900">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}