export type TSummaryItemProps = {
  widthSize: number;
  balance?: number;
  previousDayBalance?: number;
  type: "today" | "pending" | "balance" | "reserved" | "total";
};
