import { addDays, eachDayOfInterval, format } from "date-fns";
import { MarkedDateProps } from ".";
import { DateData } from "react-native-calendars";

export const generateInterval = (start: DateData, end: DateData) => {
  let interval: MarkedDateProps = {};

  const datesInterval = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  });

  datesInterval.forEach((item) => {
    const date = format(addDays(item, 1), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? "#02A0FC"
            : "#DBDDEB",
        textColor:
          start.dateString === date || end.dateString === date
            ? "#DBDDEB"
            : "#02A0FC",
      },
    };
  });
  return { interval, datesInterval };
};
