import { differenceInDays, isValid, parseISO } from 'date-fns';

export const ValidateCPF = (value: string): boolean => {
  let Soma;
  let Resto;
  Soma = 0;

  value = value.replace(/[^a-zA-Z0-9 ]/g, '');

  if (
    value === '00000000000' ||
    value === '11111111111' ||
    value === '22222222222' ||
    value === '33333333333' ||
    value === '44444444444' ||
    value === '55555555555' ||
    value === '66666666666' ||
    value === '77777777777' ||
    value === '88888888888' ||
    value === '99999999999'
  )
    return false;

  for (let i = 1; i <= 9; i++)
    Soma = Soma + parseInt(value.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(value.substring(9, 10))) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i++)
    Soma = Soma + parseInt(value.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(value.substring(10, 11))) return false;
  return true;
};

export function ValidateCNPJ(value: string) {
  if (!value) return false;

  const isString = typeof value === 'string';
  const validTypes =
    isString || Number.isInteger(value) || Array.isArray(value);

  if (!validTypes) return false;

  if (isString) {
    if (value.length > 18) return false;

    const digitsOnly = /^\d{14}$/.test(value);

    const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value);

    const validRepeated = /^(\d)\1{6}/g.test(value);

    if (digitsOnly || validFormat || validRepeated) true;
    else return false;
  }

  const match = value.toString().match(/\d/g);
  const numbers = Array.isArray(match) ? match.map(Number) : [];

  if (numbers.length !== 14) return false;

  const items = [...new Set(numbers)];
  if (items.length === 1) return false;

  const calc = (x: number) => {
    const slice = numbers.slice(0, x);
    let factor = x - 7;
    let sum = 0;

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i];
      sum += n * factor--;
      if (factor < 2) factor = 9;
    }

    const result = 11 - (sum % 11);

    return result > 9 ? 0 : result;
  };

  const digits = numbers.slice(12);

  const digit0 = calc(12);
  if (digit0 !== digits[0]) return false;

  const digit1 = calc(13);
  return digit1 === digits[1];
}

export const ValidatePassword = (value: string) => {
  return new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
  ).test(value);
};

export const ValidateMovementPassword = (value: string) => {
  if (Number.isNaN(value)) {
    return false;
  }

  if (String(value).length !== 4) {
    return false;
  }

  return true;
};

export const ValidatePhone = (phone: string) => {
  phone = phone.replace(/\D/g, '');
  const phoneNumber = phone.substring(2, 11);

  if (Number(phone.substring(2, 3)) !== 9) {
    return false;
  }

  return !new RegExp(/(\d)\1{7}/).test(phoneNumber);
};

export const ValidatePhoneDDD = (phone: string) => {
  return new RegExp('^\\(((1[1-9])|([2-9][0-9]))\\)').test(phone);
};

export const ValidateEVP = (evp: string) => {
  return new RegExp(/(\d)\1{4}/).test(evp);
};

export const ValidateString = (evp: string) => {
  return new RegExp(/.*[A-Za-z0-9].*/).test(evp);
};

export const ValidateBirthAge = (value: string) => {
  const [day, month, year] = value.split('/');
  const dateNow = new Date();

  const date1 = new Date(Number(year), Number(month) - 1, Number(day), 0, 0);

  const diffDay = differenceInDays(dateNow, date1);

  return diffDay >= 365.25 * 18;
};

export const ValidateBirthDay = (value: string) => {
  const [day, month, year] = value.split('/');

  const date1 = `${year}-${month}-${day}`;

  return isValid(parseISO(date1));
};

export const ValidateDocumentIssueDate = (value: string) => {
  const [day, month, year] = value.split('-');

  const date1 = `${year}-${month}-${day}`;

  if (!day.match(/^(0[1-9]|[12][0-9]|3[01])$/)) {
    return false;
  }

  if (!month.match(/^(0[1-9]|1[012])$/)) {
    return false;
  }

  if (!year.match(/^(19|20)[0-9]{2}$/)) {
    return false;
  }

  return isValid(parseISO(date1));
};

export const ValidateEmail = (email: string) => {
  return String(email).match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const verifyCaracter = (value: string) => {
  return value.replace(/\D+/g, '');
};

export function limitStringSize(size: number, string?: string) {
  if (string && string.length > size) {
    return `${string.slice(0, size)}...`;
  }
  return string;
}
