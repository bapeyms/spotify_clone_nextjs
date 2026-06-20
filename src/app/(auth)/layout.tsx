export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        min-h-screen
        bg-[url('/general/back.png')]
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed
      ">
      {children}
    </div>
  );
}