import { IMetaProps } from "../Generic/interfaces";
import {
  TChargeFrequencyProps,
  TPaymentMethodProps,
  TSalesStatusInfo,
} from "./types";

export interface ISale {
  id: string;
  name: string;
  userName: string;
  date: string;
  status: TSalesStatusInfo;
  statusTranslate: string;
  paymentMethod: string;
  value: string;
}

export interface ISaleCards {
  uuid: string;
  code: string;
  hasOrderBump?: boolean;
  product: string;
  customer: string;
  status: string;
  phoneNumber?: string;
  createdAt: Date;
  brand: string;
  value: number;
  chargeFrequency?: TChargeFrequencyProps;
  chargeLimit?: number;
  chargeNumber?: number;
  coProducers?: ISaleDetailsPromotor;
  coproductionCommission?: number;
}

export interface ISalesExport {
  email: string;
  filters: any;
}

export interface SalesListResponse {
  data: ISaleCards[];
  meta: IMetaProps;
}

export interface TotalListResponse {
  commission: number;
  total: number;
}

export interface Address {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  zipcode: string;
  state: string;
}

export interface ICustomer {
  country: string;
  document: string;
  email: string;
  ip: string;
  name: string;
  phoneNumber: string;
  state: string;
  address?: Address;
}

export interface IAffiliate {
  comission: number;
  email: string;
  name: string;
  shareCustomerDataEnabled: boolean;
}

export interface IProducer {
  email: string;
  name: string;
}

export interface ISaleDetailsPromotor {
  name: string;
  email: string;
  comission: number | null;
  shareCustomerDataEnabled: boolean;
}

export interface ITransaction {
  automaticDiscount: number;
  bankSlipDigitableLine?: string;
  bankSlipLink?: string;
  comission: number;
  discountCoupon: number;
  finishedAt: string;
  installmentsAmount: number;
  installmentsFreeTax: number;
  paymentMethod: TPaymentMethodProps;
  percentageTax: number;
  percentageTaxLog: string;
  refundedAt?: string;
  startedAt: string;
  status: string;
  subTotal: number;
  thanksPageLink: string;
  transactionTax: number;
}

export interface IMarketing {
  campaign?: string;
  content?: string;
  medium?: string;
  source?: string;
  src?: string;
  term?: string;
}

export interface IProductSales {
  uuid: string;
  name: string;
  description: string;
  photo?: string;
  format: string;
  price: number;
  filesAmount: number;
  isOrderBump: boolean;
}

export interface IItemsSales {
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

export interface IUseApproveFakeSaleProps {
  uuid: string;
  subscriptionChargeUuid: string | null;
}

export interface IParamsProps {
  emailAffiliate?: string;
  origin?: {
    autoral?: boolean;
    affiliation?: boolean;
    coproduction?: boolean;
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

export interface UTMItemProps {
  text: string;
  isActive: boolean;
}

export interface UTMProps {
  utmCampaign: UTMItemProps;
  utmContent: UTMItemProps;
  utmMedium: UTMItemProps;
  utmSource: UTMItemProps;
  utmSrc: UTMItemProps;
  utmTerm: UTMItemProps;
}

export interface IUseApproveFakeSaleProps {
  uuid: string;
  subscriptionChargeUuid: string | null;
}

export interface IBalanceSalesResponse {
  availableBalance: number;
  currentDayBalance: number;
  pendingBalance: number;
  previousDayBalance: number;
  securityReserveBalance: number;
  totalBalance: number;
  totalSales: number;
}

export interface ISalesRefundTaxType {
  uuid: string;
  value: number;
  tax: boolean;
}
