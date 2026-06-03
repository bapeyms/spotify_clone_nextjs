import SingUP from "./singup/page";
import SingIN from "./signin/page";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <SingUP />
      <SingIN />
    </div>
  );
}