export default function SingUP() {
  return (
    <div className="w-[550px] flex items-center justify-center flex-col border border-[#496999] rounded-xl px-10 py-5 bg-[#070D1A]">
      <img className="w-40 h-40" src="./general/logo.png" alt="logo" />
      <h1 className="text-3xl font-bold m-3">Пориньте у LumiTune</h1>
      <div className="flex flex-col gap-5 mt-7">
        <div className="w-[400px] flex items-center justify-center gap-5 py-3 border border-[#496999] rounded-xl cursor-pointer transition hover:bg-[#496999]/20">
          <img className="w-6 h-6" src="/singup/facebook.png" alt="Facebook" />
          <p className="text-xl">Увійти з Facebook</p>
        </div>
        <div className="w-[400px] flex items-center justify-center gap-5 py-3 border border-[#496999] rounded-xl cursor-pointer transition hover:bg-[#496999]/20">
          <img className="w-5 h-5" src="/singup/google.png" alt="Google" />
          <p className="text-xl">Увійти з Google</p>
        </div>
        <div className="w-[400px] flex items-center justify-center gap-5 py-3 border border-[#496999] rounded-xl  cursor-pointer transition hover:bg-[#496999]/20">
          <img className="w-6 h-6" src="/singup/apple.png" alt="Google" />
          <p className="text-xl">Увійти з Apple</p>
        </div>
      </div>
      <hr className="w-full border-0.3 border-[#496999] mx-auto mt-10" />
      <div>
        <div className="mt-10px">
          <p >Електронна пошта або ім’я користувача</p>
          <input className="w-[400px] py-2 px-5 border border-[#496999] rounded-xl bg-transparent text-white outline-none"
            type="text"
            placeholder="@gmail.com" />
        </div>
        <div></div>
      </div>
    </div>
  )
}