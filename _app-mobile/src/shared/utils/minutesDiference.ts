import { differenceInMinutes } from 'date-fns';

export function minutesDifference(date: Date): boolean {
  const minutes = Math.abs(differenceInMinutes(new Date(), date));

  if (minutes >= 3) {
    return true;
  }

  return false;
}

export function minutesDifference10Minutes(date: Date): boolean {
  const minutes = Math.abs(differenceInMinutes(new Date(), date));

  if (minutes >= 10) {
    return false;
  }

  return true;
}
