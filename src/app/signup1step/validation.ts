"use client"
export function validatePassword(password: string) {
  if (!password.trim()) {
    return "Введіть пароль";
  }

  if (password.length < 6) {
    return "Пароль має бути мінімум 6 символів";
  }

  return "";
}