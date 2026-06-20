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

export function validatePassword(password: string) {
  if (!password.trim()) {
    return "Введіть пароль";
  }

  if (password.length < 6) {
    return "Пароль має бути мінімум 6 символів";
  }

  return "";
}