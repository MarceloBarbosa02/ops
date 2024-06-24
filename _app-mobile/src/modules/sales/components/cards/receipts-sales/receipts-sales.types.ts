import { ISalesList } from '@/shared/queries/sales/sales.interfaces';

export type TReceiptsSalesItem = {
  label: string;
  hasOrderBump?: boolean;
  description: string | any;
};

export type TReceiptsSalesCard = {
  data: ISalesList;
};
