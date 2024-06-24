export type TWithdrawalsRequest = {
  page: number;
  pageSize: number;
};

export type TWithdrawal = {
  uuid: string;
  code: string;
  value: number;
  status: TStatusSales;
  createdAt: Date;
  releasedAt: Date;
};

export interface TMetaProps {
  page: number;
  pages: number;
  pageSize: number;
  total: number;
}

export type TWithdrawalsResponse = {
  data: TWithdrawal[];
  meta: TMetaProps;
};

export type TStatusSales =
  | 'APPROVED'
  | 'PENDING'
  | 'REFUSED'
  | 'CHARGEBACK'
  | 'CANCELED'
  | 'REFUNDED';

export type TWithdrawalCreate = {
  value: number;
  tax: number;
};
