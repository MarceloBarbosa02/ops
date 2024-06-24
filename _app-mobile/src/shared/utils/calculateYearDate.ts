import { differenceInYears } from 'date-fns';

export function calculateYearDate(userDate: string | Date): number {
  const today = new Date();
  const birthDate = new Date(userDate);
  const yearDate = differenceInYears(today, birthDate);

  return yearDate;
}
