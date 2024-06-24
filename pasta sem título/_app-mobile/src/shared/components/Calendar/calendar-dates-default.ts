import {
  formatDayPrevious,
  formatMonthCurrent,
  formatPreviousMonth,
  formatPreviousSevenDays,
  formatPreviousThirtyDays,
} from "./calendar-utils";

export const dates_default = [
  {
    id: 1,
    date: [new Date(), new Date()],
    label: "Hoje",
  },
  {
    id: 2,
    date: formatDayPrevious(),
    label: "Ontem",
  },
  {
    id: 3,
    date: formatPreviousSevenDays(),
    label: "Últimos 7 dias",
  },
  {
    id: 4,
    date: formatPreviousThirtyDays(),
    label: "Últimos 30 dias",
  },
  {
    id: 5,
    date: formatMonthCurrent(),
    label: "Este mês",
  },
  {
    id: 6,
    date: formatPreviousMonth(),
    label: "Mês passado",
  },
  {
    id: 7,
    date: [new Date("2023-01-02"), new Date()],
    label: "Desde o início",
  },
];
