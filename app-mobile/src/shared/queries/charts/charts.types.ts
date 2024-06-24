interface TDaysSalesChart {
  date: string;
  value: number;
}

export interface TSalesChartResponse {
  totalValue: number;
  data: TDaysSalesChart[];
}
