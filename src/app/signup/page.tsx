export default function SingUP() {
  return (
    <div className="h-sreen flex items-start justify-center bg-[#070D1A] m-3">
      <div className="flex items-center justify-center flex-col border border-[#496999] rounded-xl px-16 py-6 bg-[#070D1A] w-full max-w-[550px]">
        <img className="w-30 h-30" src="/general/logo.png" alt="logo" />

        <h1 className="text-3xl font-bold mt-2 mb-4 text-white">
          Пориньте у LumiTune
        </h1>

        <div className="w-full max-w-[560px] flex flex-col gap-3">
          <div className="w-full flex items-center justify-center gap-4 py-2.5 border border-[#496999] rounded-xl cursor-pointer transition hover:bg-[#496999]/20">
            <img className="w-5 h-5" src="/singup/facebook.png" alt="Facebook" />
            <p className="text-xl text-[#496999]">Увійти з Facebook</p>
          </div>

          <div className="w-full flex items-center justify-center gap-4 py-2.5 border border-[#496999] rounded-xl cursor-pointer transition hover:bg-[#496999]/20">
            <img className="w-5 h-5" src="/singup/google.png" alt="Google" />
            <p className="text-xl text-[#496999]">Увійти з Google</p>
          </div>

          <div className="w-full flex items-center justify-center gap-4 py-2.5 border border-[#496999] rounded-xl cursor-pointer transition hover:bg-[#496999]/20">
            <img className="w-5 h-5" src="/singup/apple.png" alt="apple" />
            <p className="text-xl text-[#496999]">Увійти з Apple</p>
          </div>
        </div>

        <hr className="w-full max-w-[620px] border-t border-[#496999] my-5" />

        <div className="w-full max-w-[560px]">
          <p className="text-xl text-white mb-2">
            Електронна пошта або ім&apos;я користувача
          </p>

          <input
            className="w-full px-4 py-2.5 border border-[#496999] rounded-xl bg-[#001B2E] text-white placeholder:text-[#6B7FA8] outline-none text-xl"
            type="text"
            placeholder="@gmail.com"
          />

          <div className="flex justify-between items-center mt-4 mb-2">
            <p className="text-xl text-white">Пароль</p>

            <a className="text-base text-[#8FB4F8] underline" href="#">
              Забули пароль?
            </a>
          </div>

          <div className="relative w-full">
            <input
              className="w-full px-4 py-2.5 pr-12 border border-[#496999] rounded-xl bg-[#001B2E] text-white placeholder:text-[#6B7FA8] outline-none text-xl"
              type="password"
              placeholder="************"
            />

            <img
              className="w-5 h-4 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              src="/singup/visibility_off.png"
              alt="Show password"
            />
          </div>

          <button className="w-full mt-5 px-4 py-2.5 rounded-xl bg-[#1DA1F2] text-black font-bold text-xl hover:bg-[#39b8ff] transition">
            Увійти
          </button>
        </div>

        <hr className="w-80 border-t border-[#496999] my-4" />

        <div className="flex gap-2 text-base">
          <p className="text-[#496999]">Немає аккаунта?</p>

          <a className="text-[#93B7FF] font-bold underline cursor-pointer">
            Реєстрація у LumiTune
          </a>
        </div>
      </div>
    </div>
  );
}