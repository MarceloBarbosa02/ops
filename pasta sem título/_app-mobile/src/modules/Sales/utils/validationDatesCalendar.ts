export const format_month_current = (): Date[] => {
  const date = new Date();

  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return [firstDay, lastDay];
};

export const format_day_previous = (): Date[] => {
  const last_day = new Date().setHours(-23);
  const last = new Date(last_day);

  return [last, last];
};

export const format_week_current = (): Date[] => {
  const date = new Date();

  const first = date.getDate() - date.getDay();

  const first_day = new Date(date.setDate(first));
  const last_day = new Date(date.setDate(date.getDate() + 6));

  return [first_day, last_day];
};
