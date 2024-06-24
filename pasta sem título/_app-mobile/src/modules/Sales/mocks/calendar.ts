import { Platform } from "react-native";
import {
  format_day_previous,
  format_month_current,
  format_week_current,
} from "@modules/Sales/utils/validationDatesCalendar";

export const dates_default = [
  {
    id: 1,
    date: format_day_previous(),
    label: "Ontem",
  },
  {
    id: 2,
    date: format_week_current(),
    label: "Ultima Semana",
  },
  {
    id: 3,
    date: format_month_current(),
    label: "Ultimo mês",
  },
  {
    id: 4,
    date: [
      new Date("2023-01-02"),
      new Date(),
    ],
    label: "Desde o início",
  },
];
