import {
  IAffiliate,
  ICustomer,
  IMarketing,
  IProducer,
  IProductSales,
  ISaleDetailsPromotor,
  ITransaction,
} from '@/modules/sales/components/details/details.types';
import { TChargeFrequencyProps } from './sales.types';

export interface IParamsProps {
  emailAffiliate?: string;
  origin?: {
    autoral?: boolean;
    affiliation?: boolean;
  };
  typeOffers?: {
    oneTime?: boolean;
    recurring?: boolean;
  };
  dateFilter: Date[];
  mainSearchFilter?: string;
  page: number;
  paymentMethodFilter?: {
    bankSlip?: boolean;
    creditCard?: boolean;
    free?: boolean;
    pix?: boolean;
  };
  productFilter: string;
  offerFilter: string;
  refresh?: number;
  statusFilter?: {
    approved?: boolean;
    chargeback?: boolean;
    expired?: boolean;
    pending?: boolean;
    refunded?: boolean;
    refused?: boolean;
  };
  utm: {
    utmCampaign: string;
    utmContent: string;
    utmMedium: string;
    utmSource: string;
    utmSrc: string;
    utmTerm: string;
  };
}

export interface IDataProps {
  label: string;
  value?: string | number;
}

export interface ISalesTotalResponse {
  commission: number;
  total: number;
}

export interface ISalesListResponse {
  data: ISalesList[];
  meta: MetaProps;
}

export interface ISalesList {
  uuid: string;
  code: string;
  hasOrderBump?: boolean;
  product: string;
  customer: string;
  phoneNumber: string;
  status: string;
  createdAt: Date;
  brand: string;
  value: number;
  chargeFrequency?: TChargeFrequencyProps;
  chargeLimit?: number;
  chargeNumber?: number;
  coProducers?: ISaleDetailsPromotor;
  coproductionCommission?: number;
}

export interface MetaProps {
  page: number;
  pages: number;
  pageSize: number;
  total: number;
}

export interface IUseApproveFakeSaleRequestProps {
  uuid: string;
  subscriptionChargeUuid: string | null;
}

// export interface IItemsSalesRespone {
//   data: IItemsSales;
// }

export interface IItemsSalesResponse {
  canApproveSale: boolean;
  canRefundSale: boolean;
  code: string;
  customer: ICustomer;
  marketing: IMarketing;
  products: IProductSales[];
  saleUuid: string;
  subscriptionChargeUuid?: string;
  transaction: ITransaction;
  uuid: string;
  affiliate?: IAffiliate;
  producer?: IProducer;
  coproducers?: ISaleDetailsPromotor[];
  coproductionCommission?: number;
  shareCustomerDataEnabled?: boolean;
}
