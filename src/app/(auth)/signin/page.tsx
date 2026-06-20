"use client";

import Link from "next/link";
import { useState } from "react";
import { validateEmail, validatePassword } from "./validation";
import { useRouter } from "next/navigation";

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
    router.push("/homepage");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
    min-h-screen
    flex
    items-start
    justify-center
    px-4
    pt-6
    pb-6
    md:items-center
    md:py-10
  ">
      <div
        className="
    relative
    box-border
    flex
    w-[500px]
    max-w-[500px]
    flex-col
    items-center
    rounded-xl
    border
    border-[#496999]
    bg-[#070D1A]
    px-6
    py-4
    max-[768px]:w-full
    max-[768px]:max-w-none
    max-[768px]:px-2
    max-[768px]:rounded-none
    max-[768px]:border-none
    max-[768px]:bg-transparent
  ">
        <img
          className="mt-4 h-25 w-30 max-[768px]:mt-12 max-[768px]:h-36 max-[768px]:w-36"
          src="/general/logo.png"
          alt="logo"
        />

        <h1 className="mt-3 mb-2 text-center text-2xl font-bold text-white">
          Пориньте у LumiTune
        </h1>

        <div className="flex w-full flex-col items-center">
          {/* EMAIL + PASSWORD */}
          <div className="order-2 w-full max-w-[400px] max-[768px]:max-w-none max-[768px]:order-1">
            <p className="mb-1 text-l text-white max-[768px]:text-base">
              Електронна пошта або ім&apos;я користувача
            </p>

            <input
              className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-5 py-2 text-m text-white outline-none placeholder:text-[#6B7FA8] max-[768px]:py-3 max-[768px]:text-base"
              type="text"
              placeholder="@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {emailError && (
              <p className="mt-2 text-sm text-red-500">{emailError}</p>
            )}

            <div className="mt-4 mb-1 flex items-center justify-between">
              <p className="text-l text-white max-[768px]:text-base">Пароль</p>

              <a
                className="text-base text-[#8FB4F8] underline max-[768px]:text-sm"
                href="#"
              >
                Забули пароль?
              </a>
            </div>

            <div className="relative w-full">
              <input
                className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2 pr-12 text-l text-white outline-none placeholder:text-[#6B7FA8] max-[768px]:py-3 max-[768px]:text-base"
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

            {passwordError && (
              <p className="mt-2 text-sm text-red-500">{passwordError}</p>
            )}

            <button
              className="mt-6 w-full rounded-xl bg-[#1DA1F2] px-4 py-2 text-xl font-bold text-black transition hover:bg-[#39b8ff] max-[768px]:py-3 max-[768px]:text-lg"
              type="submit"

            >
              Увійти
            </button>

            <hr className="-mx-1 mt-6 mb-3 border-t border-[#496999]/40" />
          </div>

          {/* СОЦСЕТИ */}
          <div className="order-1 w-full mt-6 max-w-[400px] max-[768px]:max-w-none">
            <div className="flex flex-col gap-4">
              <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#496999] py-2 transition hover:bg-[#496999]/20 max-[768px]:justify-start max-[768px]:px-4 max-[768px]:py-3">
                <img
                  className="h-5 w-5 max-[768px]:h-6 max-[768px]:w-6"
                  src="/singin/facebook.png"
                  alt="Facebook"
                />
                <p className="text-l text-[#496999] max-[768px]:flex-1 max-[768px]:text-center max-[768px]:text-base">
                  Увійти з Facebook
                </p>
              </div>

              <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#496999] py-2 transition hover:bg-[#496999]/20 max-[768px]:justify-start max-[768px]:px-4 max-[768px]:py-3">
                <img
                  className="h-5 w-5 max-[768px]:h-6 max-[768px]:w-6"
                  src="/singin/google.png"
                  alt="Google"
                />
                <p className="text-l text-[#496999] max-[768px]:flex-1 max-[768px]:text-center max-[768px]:text-base">
                  Увійти з Google
                </p>
              </div>

              <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#496999] py-2 transition hover:bg-[#496999]/20 max-[768px]:justify-start max-[768px]:px-4 max-[768px]:py-3">
                <img
                  className="h-5 w-5 max-[768px]:h-6 max-[768px]:w-6"
                  src="/singin/apple.png"
                  alt="Apple"
                />
                <p className="text-l text-[#496999] max-[768px]:flex-1 max-[768px]:text-center max-[768px]:text-base">
                  Увійти з Apple
                </p>
              </div>
            </div>
            <hr className="-mx-5 mt-6 mb-6 border-t border-[#496999]/40" />
          </div>

          {/* REGISTER */}
          <div className="order-3 w-full max-w-[320px] max-[768px]:max-w-none">
            <div className="flex flex-row items-center justify-center gap-2 text-base max-[768px]:mt-8 max-[768px]:gap-2 max-[768px]:text-sm">
              <p className="text-[#496999]">Немає аккаунта?</p>

              <Link
                className="cursor-pointer font-bold underline text-[#93B7FF]"
                href="/signup"
              >
                Реєстрація у LumiTune
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form >
  );
}