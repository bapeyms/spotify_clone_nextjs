"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { validateEmail } from "./validation";

export default function SingUP() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailMessage = validateEmail(email);
    setEmailError(emailMessage);

    if (emailMessage) return;

    router.push("/signup1step");
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
          className="mt-8 h-25 w-30 max-[768px]:mt-12 max-[768px]:h-30 max-[768px]:w-40"
          src="/general/logo.png"
          alt="logo"
        />

        <h1 className="mt-2 mb-4 text-center text-2xl font-bold text-white">
          Пориньте вперше у LumiTune
        </h1>

        <div className="flex w-full flex-col items-center">
          <div className="w-full max-w-[400px] max-[768px]:max-w-none">
            <p className="mb-2 text-l text-white max-[768px]:text-base">
              Електронна пошта
            </p>

            <input
              className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2 text-l text-white outline-none placeholder:text-[#6B7FA8] max-[768px]:py-3 max-[768px]:text-base"
              type="text"
              placeholder="@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {emailError && (
              <p className="mt-2 text-sm text-red-500">{emailError}</p>
            )}

            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-[#1DA1F2] px-4 py-2 text-xl font-bold text-black transition hover:bg-[#39b8ff] max-[768px]:py-3 max-[768px]:text-lg"
            >
              Далі
            </button>

            <hr className="-mx-7 mt-6 mb-6 border-t border-[#496999]/40" />

            <div className="flex flex-col gap-3">
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
              <hr className="-mx-1 mt-6 border-t border-[#496999]/40" />
            </div>

            <div className="mt-4 flex flex-row items-center justify-center gap-2 whitespace-nowrap text-base max-[768px]:mt-8 max-[768px]:text-sm">
              <p className="whitespace-nowrap text-[#496999]">Є аккаунт?</p>

              <Link
                className="cursor-pointer whitespace-nowrap font-bold underline text-[#93B7FF]"
                href="/signin"
              >
                Увійдіть до нього
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}