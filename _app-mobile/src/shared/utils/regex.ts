export const regexAlphanumeric = new RegExp(`^(?![A-Za-z]+$)[0-9A-Za-z]+$`);
export const regexDate = new RegExp(
  `^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)[0-9]{2}$`
);

export const regexOneNumber = /.*\d.*/;
export const regexSpecialChar = /.*[!@#$%^&*(),.?":{}|<>].*/;
export const regexCapitalLetters = /.*[A-Z].*/;
export const regexLowerLetters = /.*[a-z].*/;
export const regexEmailIsValid =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexArr = [
  regexOneNumber,
  regexSpecialChar,
  regexCapitalLetters,
  regexLowerLetters,
];

export const testaStringContraRegex = (string: string) => {
  return regexArr.every((regex) => regex.test(string));
};
