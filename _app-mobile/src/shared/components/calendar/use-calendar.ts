import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateData } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';

import { TCalendarModalProps } from './calendar-types';
import { generateInterval } from './generate-interval';

export const useCalendar = (props: TCalendarModalProps) => {
  const [lastSelectDate, setLastSelectDate] = useState<DateData>(
    {} as DateData
  );
  const [markedDates, setMarkedDates] = useState<MarkedDates>(
    {} as MarkedDates
  );

  const { close, handleSelectDate, defaultDate, isShow } = props;

  const handleChangeDates = (date: DateData) => {
    let start = !lastSelectDate.timestamp ? date : lastSelectDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectDate(end);
    const interval = generateInterval(start, end, true);
    setMarkedDates(interval.interval);

    handleSelectDate([
      addDays(interval.datesInterval[0], 1),
      addDays(interval.datesInterval[interval.datesInterval.length - 1], 1),
    ]);
  };

  return {
    isShow,
    defaultDate,
    markedDates,
    close,
    setMarkedDates,
    handleSelectDate,
    handleChangeDates,
  };
};
