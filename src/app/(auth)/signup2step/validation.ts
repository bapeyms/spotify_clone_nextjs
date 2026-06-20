export type SignUpStep2Values = {
  name: string;
  day: string;
  month: string;
  year: string;
  country: string;
  city: string;
  role: string;
};

export type SignUpStep2Errors = Partial<Record<keyof SignUpStep2Values, string>>;

const MONTHS = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

export function validateName(name: string) {
  const value = name.trim();

  if (!value) {
    return "Введіть ім'я";
  }

  if (value.length < 2) {
    return "Ім'я має бути мінімум 2 символи";
  }

  if (!/^[\p{L}][\p{L}\s'’-]*$/u.test(value)) {
    return "Ім'я може містити лише літери";
  }

  return "";
}

export function validateBirthDate(day: string, month: string, year: string) {
  const d = Number(day);
  const y = Number(year);
  const m = MONTHS.indexOf(month);

  if (!day.trim() && !month.trim() && !year.trim()) {
    return "Вкажіть дату народження";
  }

  if (!Number.isInteger(d) || d < 1 || d > 31) {
    return "Введіть коректний день";
  }

  if (m === -1) {
    return "Оберіть місяць";
  }

  if (!Number.isInteger(y) || y < 1950 || y > new Date().getFullYear()) {
    return "Введіть коректний рік";
  }

  const date = new Date(y, m, d);

  if (
    date.getFullYear() !== y ||
    date.getMonth() !== m ||
    date.getDate() !== d
  ) {
    return "Дата народження некоректна";
  }

  if (date > new Date()) {
    return "Дата народження не може бути в майбутньому";
  }

  return "";
}

export function validateCountry(country: string) {
  if (!country.trim() || country === "Країна") {
    return "Оберіть країну";
  }

  return "";
}

export function validateCity(city: string) {
  if (!city.trim() || city === "Місто") {
    return "Оберіть місто";
  }

  return "";
}

export function validateRole(role: string) {
  if (!role) {
    return "Оберіть, хто ви";
  }

  if (role !== "user" && role !== "artist") {
    return "Оберіть, хто ви";
  }

  return "";
}

export function validateSignUpStep2(data: SignUpStep2Values): SignUpStep2Errors {
  const errors: SignUpStep2Errors = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const birthDateError = validateBirthDate(data.day, data.month, data.year);
  if (birthDateError) errors.day = birthDateError;

  const countryError = validateCountry(data.country);
  if (countryError) errors.country = countryError;

  const cityError = validateCity(data.city);
  if (cityError) errors.city = cityError;

  const roleError = validateRole(data.role);
  if (roleError) errors.role = roleError;

  return errors;
}