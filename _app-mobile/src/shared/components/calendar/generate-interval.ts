import { addDays, eachDayOfInterval, format } from 'date-fns';
import { DateData } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';

export const generateInterval = (
  start: DateData,
  end: DateData,
  isCalendar: boolean
) => {
  let interval: MarkedDates = {};

  const datesInterval = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  });

  datesInterval.forEach((item) => {
    const date = isCalendar
      ? format(addDays(item, 1), 'yyyy-MM-dd')
      : format(item, 'yyyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        startingDay: start.dateString === date,
        endingDay: end.dateString === date,
        customContainerStyle: (start.dateString === date ||
          end.dateString === date) && {
          borderRadius: 8,
        },
        color:
          start.dateString === date || end.dateString === date
            ? '#0D6EDE'
            : '#D1E7FF',
        textColor:
          start.dateString === date || end.dateString === date
            ? '#D1E7FF'
            : '#0D6EDE',
      },
    };
  });
  return { interval, datesInterval };
};
