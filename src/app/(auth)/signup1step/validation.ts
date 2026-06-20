export function validatePassword(password: string) {
  if (!password.trim()) {
    return "Введіть пароль";
  }

  if (password.length < 8) {
    return "Пароль має бути мінімум 8 символів";
  }

  const hasLetter = /[A-Za-zА-Яа-яІіЇїЄєҐґ]/.test(password);
  if (!hasLetter) {
    return "Пароль має містити принаймні 1 літеру";
  }

  const hasNumberOrSpecial = /[\d_!?&#]/.test(password);
  if (!hasNumberOrSpecial) {
    return "Пароль має містити 1 число або 1 спеціальний символ";
  }

  return "";
}