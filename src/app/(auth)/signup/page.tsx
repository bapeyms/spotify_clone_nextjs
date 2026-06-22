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
      "
    >
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
          max-[768px]:rounded-none
          max-[768px]:border-none
          max-[768px]:bg-transparent
          max-[768px]:px-2
        "
      >
        <img
          className="mt-4 h-20 w-30 max-[768px]:mt-12 max-[768px]:h-20 max-[768px]:w-30"
          src="/general/logo.png"
          alt="logo"
        />

        <h1 className="mt-2 mb-3 text-center text-2xl font-bold leading-tight text-white max-[768px]:text-[28px]">
          Пориньте вперше у LumiTune
        </h1>

        <div className="flex w-full flex-col items-center">
          <div className="w-full max-w-[380px] max-[768px]:max-w-none">
            <p className="mb-2 text-base text-white">
              Електронна пошта
            </p>

            <input
              className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2.5 text-base text-white outline-none placeholder:text-[#6B7FA8]"
              type="text"
              placeholder="Електронна пошта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {emailError && (
              <p className="mt-2 text-sm text-red-500">{emailError}</p>
            )}

            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-[#1DA1F2] px-4 py-2.5 text-lg font-bold text-black transition hover:bg-[#39b8ff]"
            >
              Далі
            </button>

            <div className="-mx-6 mt-6 mb-5">
              <div className="flex items-center gap-3">
                <hr className="flex-1 border-t border-[#496999]/40" />
                <span className="text-base text-[#496999]">або</span>
                <hr className="flex-1 border-t border-[#496999]/40" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#496999] py-2.5 transition hover:bg-[#496999]/20 max-[768px]:justify-start max-[768px]:px-4">
                <img
                  className="h-5 w-5 max-[768px]:h-6 max-[768px]:w-6"
                  src="/singin/facebook.png"
                  alt="Facebook"
                />
                <p className="text-base text-[#496999] max-[768px]:flex-1 max-[768px]:text-center">
                  Увійти з Facebook
                </p>
              </div>

              <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#496999] py-2.5 transition hover:bg-[#496999]/20 max-[768px]:justify-start max-[768px]:px-4">
                <img
                  className="h-5 w-5 max-[768px]:h-6 max-[768px]:w-6"
                  src="/singin/google.png"
                  alt="Google"
                />
                <p className="text-base text-[#496999] max-[768px]:flex-1 max-[768px]:text-center">
                  Увійти з Google
                </p>
              </div>

              <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#496999] py-2.5 transition hover:bg-[#496999]/20 max-[768px]:justify-start max-[768px]:px-4">
                <img
                  className="h-5 w-5 max-[768px]:h-6 max-[768px]:w-6"
                  src="/singin/apple.png"
                  alt="Apple"
                />
                <p className="text-base text-[#496999] max-[768px]:flex-1 max-[768px]:text-center">
                  Увійти з Apple
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-row items-center justify-center gap-2 whitespace-nowrap text-sm">
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