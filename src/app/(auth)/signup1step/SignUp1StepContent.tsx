"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { validatePassword } from "./validation";

export default function SingUP1() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const currentStep = 1;
  const totalSteps = 2;
  const progress = (currentStep / totalSteps) * 100;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const passwordMessage = validatePassword(password);
    setPasswordError(passwordMessage);

    if (passwordMessage) return;

    router.push("/signup2step");
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
    px-8
    py-4
    max-[768px]:w-full
    max-[768px]:max-w-none
    max-[768px]:px-2
    max-[768px]:rounded-none
    max-[768px]:border-none
    max-[768px]:bg-transparent
  ">
        <button
          type="button"
          onClick={() => router.push("/signup")}
          className="absolute left-7 top-5 text-[#93B7FF] underline"
        >
          Назад
        </button>

        <img
          className="mt-4 h-20 w-30 max-[768px]:mt-12 max-[768px]:h-20 max-[768px]:w-30"
          src="/general/logo.png"
          alt="logo"
        />

        <h1 className="mt-2 text-center text-2xl font-bold leading-tight text-white max-[768px]:text-[28px]">
          Пориньте вперше у LumiTune
        </h1>

        <p className="mt-1 text-[#8A8A8A]">
          Крок {currentStep} із {totalSteps}
        </p>

        <div className="mt-2 w-full max-w-[400px] max-[768px]:max-w-none">
          <div className="h-1 overflow-hidden rounded-full bg-[#2A3C55]">
            <div
              className="
        h-full
        rounded-full
        bg-gradient-to-r
        from-[#37B6FF]
        to-[#6AD5FF]
        shadow-[0_0_10px_rgba(55,182,255,0.5)]
        transition-all
        duration-700
        ease-out
      "
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 mb-2 w-full max-w-[400px] max-[768px]:max-w-none">
          <p className="text-left text-xl text-white max-[768px]:text-base">
            Пароль
          </p>
        </div>

        <div className="relative w-full max-w-[520px] max-[768px]:max-w-none">
          <input
            className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2 pr-12 text-l text-white outline-none placeholder:text-[#6B7FA8] max-[768px]:py-3 max-[768px]:text-base"
            type="password"
            placeholder="**********"
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
          <p className="mt-2 w-full max-w-[520px] text-sm text-red-500 max-[768px]:max-w-none">
            {passwordError}
          </p>
        )}

        <div className="mt-6 w-full max-w-[520px] max-[768px]:max-w-none">
          <p className="mb-4 text-l text-white max-[768px]:text-base">
            Пароль має містити принаймні:
          </p>

          <ul className="ml-5 flex flex-col gap-2 text-white">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 rounded-full border border-white/70" />
              <span>1 літеру</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 rounded-full border border-white/70" />
              <span>
                1 число або 1 спеціальний символ
                <br />
                (наприклад: _!?&#)
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 rounded-full border border-white/70" />
              <span>8 символів</span>
            </li>
          </ul>
        </div>

        <button
          className="mt-6 mb-5 w-full max-w-[520px] rounded-xl bg-[#1DA1F2] px-4 py-2.5 text-xl font-bold text-black transition hover:bg-[#39b8ff] max-[768px]:max-w-none max-[768px]:py-3 max-[768px]:text-lg"
          type="submit"
        >
          Далі
        </button>
      </div>
    </form>
  );
}