"use client"
export function validateEmail(email: string) {
  if (!email.trim()) {
    return "Введіть електронну пошту";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Введіть коректну електронну пошту";
  }

  return "";
}