import { format } from 'date-fns';
import { DateData } from 'react-native-calendars';

export const formatDate = (date: Date): DateData => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const timestamp = +date;
  const dateString = format(date, 'yyyy-MM-dd');

  return {
    year,
    month,
    day,
    timestamp,
    dateString,
  };
};

export const formatMonthCurrent = (): Date[] => {
  const date = new Date();

  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return [firstDay, lastDay];
};

export const formatDayPrevious = (): Date[] => {
  const last_day = new Date().setHours(-23);
  const last = new Date(last_day);

  return [last, last];
};

export const formatWeekCurrent = (): Date[] => {
  const date = new Date();

  const first = date.getDate() - date.getDay();

  const first_day = new Date(date.setDate(first));
  const last_day = new Date(date.setDate(date.getDate() + 6));

  return [first_day, last_day];
};

export const formatPreviousSevenDays = () => {
  const date = new Date();

  const first_day = new Date(date.setDate(date.getDate() - 7));

  return [first_day, new Date()];
};

export const formatPreviousThirtyDays = () => {
  const date = new Date();

  const first_day = new Date(date.setDate(date.getDate() - 30));
  const last_day = new Date().setHours(-23);

  return [first_day, new Date()];
};

export const formatPreviousMonth = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() - 1;

  const firstDay = new Date(year, month, 1);

  const lastDay = new Date(year, month + 1, 0);

  return [firstDay, lastDay];
};
