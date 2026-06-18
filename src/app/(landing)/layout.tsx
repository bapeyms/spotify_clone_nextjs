import Footer from "@/components/Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#061420] font-sans">
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
  );
}