export interface IConversionResponse {
  creditCard: string;
  totalCreditCard: number;
  bankSlip: string;
  totalBankSlip: number;
  pix: string;
  totalPix: number;
}

export interface IBalancesResponse {
  currentDayBalance: number;
  previousDayBalance: number;
  availableBalance: number;
  pendingBalance: number;
  securityReserveBalance: number;
  totalBalance: number;
  totalSales: number;
}

export interface ISalesChartRequest {
  days: number;
}

interface IDaysSalesChart {
  date: string;
  value: number;
}

export interface ISalesChartResponse {
  totalValue: number;
  data: IDaysSalesChart[];
}
