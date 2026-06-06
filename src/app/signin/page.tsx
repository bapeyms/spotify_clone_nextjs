"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { validateEmail, validatePassword } from "./validation";

export default function SingIN() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailMessage = validateEmail(email);
    const passwordMessage = validatePassword(password);

    setEmailError(emailMessage);
    setPasswordError(passwordMessage);

    if (emailMessage || passwordMessage) {
      return;
    }

    console.log("Все правильно");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex items-start justify-center  px-4 py-10"
    >
      <div className="box-border flex w-[620px] shrink-0 flex-col items-center rounded-xl border border-[#496999] bg-[#070D1A] px-12 py-8">
        <img className="h-24 w-24" src="/general/logo.png" alt="logo" />

        <h1 className="mt-2 mb-4 text-center text-3xl font-bold text-white">
          Пориньте у LumiTune
        </h1>

        <div className="w-full max-w-[520px] flex flex-col gap-3">
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

        <hr className="mx-auto my-5 w-full max-w-[520px] border-t border-[#496999]" />

        <div className="w-full max-w-[520px]">
          <p className="mb-2 text-xl text-white">
            Електронна пошта або ім&apos;я користувача
          </p>

          <input
            className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2.5 text-xl text-white outline-none placeholder:text-[#6B7FA8]"
            type="text"
            placeholder="@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {emailError && <p className="mt-2 text-sm text-red-500">{emailError}</p>}

          <div className="mt-4 mb-2 flex items-center justify-between">
            <p className="text-xl text-white">Пароль</p>
            <a className="text-base text-[#8FB4F8] underline" href="#">
              Забули пароль?
            </a>
          </div>

          <div className="relative w-full">
            <input
              className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2.5 pr-12 text-xl text-white outline-none placeholder:text-[#6B7FA8]"
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <img
              className="absolute right-4 top-1/2 h-4 w-5 -translate-y-1/2 cursor-pointer"
              src="/singin/visibility_off.png"
              alt="Show password"
            />
          </div>

          {passwordError && <p className="mt-2 text-sm text-red-500">{passwordError}</p>}

          <button
            className="mt-5 w-full rounded-xl bg-[#1DA1F2] px-4 py-2.5 text-xl font-bold text-black transition hover:bg-[#39b8ff]"
            type="submit"
          >
            Увійти
          </button>
        </div>

        <hr className="mx-auto my-8 w-full max-w-[520px] border-t border-[#496999]" />

        <div className="flex justify-center gap-2 text-base">
          <p className="text-[#496999]">Немає аккаунта?</p>
          <Link className="cursor-pointer font-bold underline text-[#93B7FF]" href="/signup">
            Реєстрація у LumiTune
          </Link>
        </div>
      </div>
    </form>
  );
}