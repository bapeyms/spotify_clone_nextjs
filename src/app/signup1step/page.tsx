"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { validatePassword } from "./validation";

export default function SingUP1() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const passwordMessage = validatePassword(password);
    setPasswordError(passwordMessage);

    if (passwordMessage) {
      return;
    }

    router.push("/signup2step");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex items-start justify-center px-4 py-10"
    >
      <div className="box-border flex w-[620px] shrink-0 flex-col items-center rounded-xl border border-[#496999] bg-[#070D1A] px-12 py-8">
        <div className="w-full flex justify-start">
          <button
            type="button"
            onClick={() => router.push("/signup")}
            className="text-[#93B7FF] underline"
          >
            Назад
          </button>
        </div>

        <img className="h-24 w-24" src="/general/logo.png" alt="logo" />

        <h1 className="mt-2 text-center text-3xl font-bold text-white">
          Створіть профіль
        </h1>

        <p className="text-[#8A8A8A]">Крок 1 із 2</p>

        <div className="mt-2 w-full">
          <div className="h-1 w-full rounded-full bg-[#2A3C55]">
            <div className="h-1 w-1/2 rounded-full bg-[#37B6FF]"></div>
          </div>
        </div>

        <div className="mt-6 mb-2 w-full">
          <p className="text-left text-xl text-white">Пароль</p>
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

        {passwordError && (
          <p className="mt-2 text-sm text-red-500">{passwordError}</p>
        )}

        <div className="mt-8 w-full">
          <p className="mb-4 text-xl text-white">
            Пароль має містити принаймні:
          </p>

          <ul className="ml-5 flex flex-col gap-2 text-white">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 rounded-full border border-white/70"></span>
              <span>1 літеру</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 rounded-full border border-white/70"></span>
              <span>
                1 число або 1 спеціальний символ
                <br />
                (наприклад: _!?&#)
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 rounded-full border border-white/70"></span>
              <span>8 символів</span>
            </li>
          </ul>
        </div>

        <button
          className="mt-5 w-full rounded-xl bg-[#1DA1F2] px-4 py-2.5 text-xl font-bold text-black transition hover:bg-[#39b8ff]"
          type="submit"
        >
          Далі
        </button>
      </div>
    </form>
  );
}