export const regexAlphanumeric = new RegExp(`^(?![A-Za-z]+$)[0-9A-Za-z]+$`);
export const regexDate = new RegExp(
  `^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)[0-9]{2}$`
);

export const regexOneNumber = /.*\d.*/;
export const regexSpecialChar = /.*[!@#$%^&*(),.?":{}|<>].*/;
export const regexCapitalLetters = /.*[A-Z].*/;
export const regexLowerLetters = /.*[a-z].*/;
