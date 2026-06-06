"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateSignUpStep2 } from "./validation";

type Step2Errors = Partial<{
  name: string;
  day: string;
  month: string;
  year: string;
  country: string;
  city: string;
  role: string;
}>;

export default function SignUP2() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");

  const [errors, setErrors] = useState<Step2Errors>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validateSignUpStep2({
      name,
      day,
      month,
      year,
      country,
      city,
      role,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Все правильно");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex items-center justify-center px-4 py-10"
    >
      <div className="box-border flex w-[620px] shrink-0 flex-col items-center rounded-xl border border-[#496999] bg-[#070D1A] px-12 py-8">
        <div className="w-full flex justify-start">
          <button
            type="button"
            onClick={() => router.push("/signup1step")}
            className="text-[#93B7FF] underline"
          >
            Назад
          </button>
        </div>

        <img className="h-24 w-24" src="/general/logo.png" alt="logo" />

        <h1 className="mt-2 text-center text-3xl font-bold text-white">
          Створіть профіль
        </h1>

        <p className="text-[#8A8A8A]">Крок 2 із 2</p>

        <div className="mt-2 w-full">
          <div className="h-1 w-full rounded-full bg-[#37B6FF]"></div>
        </div>

        <div className="mt-7 w-full max-w-[520px]">
          <label className="text-xl text-white">Ім'я</label>

          <p className="text-base text-[#8A8A8A]">
            Це ім'я відображатиметься в профілі
          </p>

          <input
            type="text"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-3 text-white outline-none placeholder:text-[#6B7FA8]"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="mt-6 w-full max-w-[520px]">
          <label className="block text-xl text-white">Дата народження</label>

          <p className="text-base text-[#8A8A8A]">
            Для чого нам потрібна ваша дата народження?
          </p>

          <button type="button" className="mt-1 text-[#8A8A8A] underline">
            Докладніше
          </button>

          <div className="mt-3 flex gap-5">
            <input
              type="text"
              placeholder="дд"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-20 rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-4 text-white outline-none placeholder:text-[#6B7FA8]"
            />

            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="flex-1 rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-4 text-white outline-none"
            >
              <option value="" disabled>
                Місяць
              </option>
              <option value="Січень">Січень</option>
              <option value="Лютий">Лютий</option>
              <option value="Березень">Березень</option>
              <option value="Квітень">Квітень</option>
              <option value="Травень">Травень</option>
              <option value="Червень">Червень</option>
              <option value="Липень">Липень</option>
              <option value="Серпень">Серпень</option>
              <option value="Вересень">Вересень</option>
              <option value="Жовтень">Жовтень</option>
              <option value="Листопад">Листопад</option>
              <option value="Грудень">Грудень</option>
            </select>

            <input
              type="text"
              placeholder="рррр"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-24 rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-3 text-white outline-none placeholder:text-[#6B7FA8]"
            />
          </div>

          {errors.day && (
            <p className="mt-2 text-sm text-red-500">{errors.day}</p>
          )}
        </div>

        <div className="mt-6 w-full max-w-[520px]">
          <label className="block text-xl text-white">Регіон проживання</label>

          <p className="text-base text-[#8A8A8A] mt-1">
            Для чого нам потрібна ваше місце проживання?
          </p>

          <button type="button" className="mt-1 text-[#8A8A8A] underline">
            Докладніше
          </button>

          <div className="mt-6 flex gap-6">
            <div className="flex-1">
              <label className="block mb-2 text-xl text-white">Країна</label>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-3 text-white outline-none"
              >
                <option value="" disabled>
                  Країна
                </option>
                <option value="Україна">Україна</option>
                <option value="Польща">Польща</option>
                <option value="Німеччина">Німеччина</option>
              </select>

              {errors.country && (
                <p className="mt-2 text-sm text-red-500">{errors.country}</p>
              )}
            </div>

            <div className="flex-1">
              <label className="block mb-2 text-xl text-white">Місто</label>

              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-3 text-white outline-none"
              >
                <option value="" disabled>
                  Місто
                </option>
                <option value="Київ">Київ</option>
                <option value="Львів">Львів</option>
                <option value="Одеса">Одеса</option>
              </select>

              {errors.city && (
                <p className="mt-2 text-sm text-red-500">{errors.city}</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-xl text-white">Хто ви?</p>

            <label className="mb-3 flex items-center gap-3 text-white">
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={(e) => setRole(e.target.value)}
              />
              <span>Я звичайний користувач</span>
            </label>

            <label className="flex items-center gap-3 text-white">
              <input
                type="radio"
                name="role"
                value="artist"
                checked={role === "artist"}
                onChange={(e) => setRole(e.target.value)}
              />
              <span>Я автор пісень</span>
            </label>

            {errors.role && (
              <p className="mt-2 text-sm text-red-500">{errors.role}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-[#1DA1F2] px-4 py-3 text-xl font-bold text-black transition hover:bg-[#39b8ff]"
          >
            Зареєструватися
          </button>
        </div>
      </div>
    </form>
  );
}