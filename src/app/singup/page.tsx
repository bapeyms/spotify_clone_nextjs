"use client";

import { useState } from "react";
import { validateEmail } from "./validation";

export default function SingUP() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailMessage = validateEmail(email);
    setEmailError(emailMessage);

    if (emailMessage) return;

    console.log("Все правильно");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex items-start justify-center px-4 py-10"
    >
      <div className="box-border flex w-[620px] shrink-0 flex-col items-center rounded-xl border border-[#496999] bg-[#070D1A] px-12 py-8">
        <img className="h-24 w-24" src="/general/logo.png" alt="logo" />

        <h1 className="mt-2 mb-4 text-center text-3xl font-bold text-white">
          Пориньте вперше у LumiTune
        </h1>

        <div className="w-full max-w-[520px]">
          <p className="mb-2 text-xl text-white">Електронна пошта</p>

          <input
            className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2.5 text-xl text-white outline-none placeholder:text-[#6B7FA8]"
            type="text"
            placeholder="@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {emailError && <p className="mt-2 text-sm text-red-500">{emailError}</p>}

          <button
            type="submit"
            className="mt-10 w-full rounded-xl bg-[#1DA1F2] px-4 py-2.5 text-xl font-bold text-black transition hover:bg-[#39b8ff]"
          >
            Далі
          </button>

          <div className="mt-10 flex items-center gap-4">
            <hr className="flex-1 border-t border-[#496999]" />
            <span className="text-[#496999]">або</span>
            <hr className="flex-1 border-t border-[#496999]" />
          </div>

          <div className="mt-10 flex flex-col gap-3">
            <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#496999] py-2.5 transition hover:bg-[#496999]/20">
              <img className="h-5 w-5" src="/singin/facebook.png" alt="Facebook" />
              <p className="text-xl text-[#496999]">Увійти з Facebook</p>
            </div>

            <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#496999] py-2.5 transition hover:bg-[#496999]/20">
              <img className="h-5 w-5" src="/singin/google.png" alt="Google" />
              <p className="text-xl text-[#496999]">Увійти з Google</p>
            </div>

            <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#496999] py-2.5 transition hover:bg-[#496999]/20">
              <img className="h-5 w-5" src="/singin/apple.png" alt="Apple" />
              <p className="text-xl text-[#496999]">Увійти з Apple</p>
            </div>
          </div>

          <hr className="mx-auto my-8 w-full max-w-[520px] border-t border-[#496999]" />

          <div className="flex justify-center gap-2 text-base">
            <p className="text-[#496999]">Є аккаунт?</p>
            <a className="cursor-pointer font-bold underline text-[#93B7FF]" href="/signin">
              Увійдіть до нього
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}