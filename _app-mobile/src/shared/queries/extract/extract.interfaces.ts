import {
  TCategoryExtract,
  TStatusWithdrawal,
  TTypeTransaction,
} from './extract.types';

export interface IShowTransfer {
  category: TCategoryExtract;
  code: string;
  createdAt: Date;
  description: string;
  isCanceled: boolean;
  isFuture: boolean;
  title: string;
  type: TTypeTransaction;
  uuid: string;
  value: number;
  isDisabled: boolean;
}

export interface IListTransfersResponse {
  meta: {
    page: number;
    pages: number;
    pageSize: number;
    total: number;
  };
  data: IShowTransfer[];
}

export interface IParamsExtractProps {
  dateFilter: Date[];
  mainSearchFilter?: string;
  page: number;
  in?: boolean;
  out?: boolean;
  adjust?: boolean;
  chargeback?: boolean;
  comission?: boolean;
  refunded?: boolean;
  withdrawal?: boolean;
  taxas?: boolean;
}

export interface IShowTransferDetailsResponse {
  category: TCategoryExtract;
  code: string;
  createdAt: Date;
  description: string;
  isCanceled: boolean;
  products: IProductsDetailProps[];
  sale?: ISaleDetailsProps;
  title: string;
  type: TTypeTransaction;
  uuid: string;
  value: number;
  withdrawal?: IWithdrawalProps;
}

export interface IProductsDetailProps {
  description?: string;
  filesAmount: number;
  format?: string;
  isOrderBump: boolean;
  name: string;
  photo?: string;
  price: number;
  uuid: string;
}

export interface ISaleDetailsProps {
  uuid: string;
  total: number | null;
  transactionTax: number | null;
  percentageTax: number | null;
  percentageTaxLog: string | null;
  installmentsFreeTax: number | null;
  securityReserve: number | null;
  affiliateCommission: number | null;
  coproducerCommission: number | null;
}

export interface IWithdrawalProps {
  refusedReason?: string;
  releasedAt?: Date;
  status: TStatusWithdrawal;
  tax: number;
  transferred: number;
  uuid: string;
}
