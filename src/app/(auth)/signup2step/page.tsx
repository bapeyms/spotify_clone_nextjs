"use client";

import { useEffect, useState } from "react";
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
  const currentStep = 2;
  const totalSteps = 2;
  const targetProgress = (currentStep / totalSteps) * 100;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setProgress(targetProgress);
    });

    return () => cancelAnimationFrame(id);
  }, [targetProgress]);


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

    if (Object.keys(validationErrors).length > 0) return;
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
          onClick={() => router.push("/signup1step")}
          className="absolute left-7 top-5 text-[#93B7FF] underline"
        >
          Назад
        </button>

        <img
          className="mt-8 h-25 w-30 max-[768px]:mt-12 max-[768px]:h-30 max-[768px]:w-40"
          src="/general/logo.png"
          alt="logo"
        />

        <h1 className="mt-2 text-center text-2xl font-bold text-white max-[768px]:text-2xl">
          Пориньте вперше у LumiTune
        </h1>

        <p className="mt-2 text-[#8A8A8A] max-[768px]:text-base">
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

        <div className="mt-3 w-full max-w-[520px] max-[768px]:max-w-none">
          <label className="block text-xl text-white max-[768px]:text-base">
            Ім&apos;я
          </label>

          <p className="text-sm text-[#8A8A8A]">
            Це ім&apos;я відображатиметься в профілі
          </p>

          <input
            type="text"
            placeholder="Ім&apos;я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2 text-white outline-none placeholder:text-[#6B7FA8] max-[768px]:py-3 max-[768px]:text-base"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="mt-3 w-full max-w-[520px] max-[768px]:max-w-none">
          <label className="block text-xl text-white max-[768px]:text-base">
            Дата народження
          </label>

          <p className="text-sm text-[#8A8A8A] flex flex-col">
            Для чого нам потрібна ваша дата народження?
            <a className="text-[#8A8A8A] underline text-xs">
              Докладніше
            </a>
          </p>

          <div className="mt-3 flex gap-5 max-[768px]:gap-3 text-sm">
            <input
              type="text"
              placeholder="дд"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-15 h-10 rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2.5 text-white outline-none placeholder:text-[#6B7FA8] max-[768px]:w-[72px] max-[768px]:px-3 max-[768px]:py-3 max-[768px]:text-base"
            />

            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="flex-1 rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2 text-white outline-none max-[768px]:px-3 max-[768px]:py-3 max-[768px]:text-base"
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
              className="w-20 h-10 rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-4 text-white outline-none placeholder:text-[#6B7FA8] max-[768px]:w-[72px] max-[768px]:px-3 max-[768px]:py-3 max-[768px]:text-base"
            />
          </div>

          {errors.day && (
            <p className="mt-2 text-sm text-red-500">{errors.day}</p>
          )}
        </div>

        <div className="mt-2 w-full max-w-[520px] max-[768px]:max-w-none">
          <label className="block text-xl text-white max-[768px]:text-base">
            Регіон проживання
          </label>

          <p className="text-sm text-[#8A8A8A] flex flex-col">
            Для чого нам потрібне ваше місце проживання?
            <a className="text-[#8A8A8A] underline text-xs">
              Докладніше
            </a>
          </p>



          <div className="mt-2 flex gap-6 max-[768px]:gap-3">
            <div className="flex-1">
              <label className="mb-2 block text-l text-white max-[768px]:text-base">
                Країна
              </label>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2.5 text-white outline-none max-[768px]:px-3 max-[768px]:py-3 max-[768px]:text-base"
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
              <label className="mb-2 block text-l text-white max-[768px]:text-base">
                Місто
              </label>

              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-[#496999] bg-[#001B2E] px-4 py-2.5 text-white outline-none max-[768px]:px-3 max-[768px]:py-3 max-[768px]:text-base"
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

          <div className="mt-3">
            <p className="mb-2 text-xl text-white max-[768px]:text-base">
              Хто ви?
            </p>

            <label className="mb-1 flex items-center gap-3 text-white">
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
            className="mt-3 mb-3 w-full rounded-xl bg-[#1DA1F2] px-4 py-2 text-xl font-bold text-black transition hover:bg-[#39b8ff]">
            Зареєструватися
          </button>
        </div>
      </div>
    </form>
  );
}