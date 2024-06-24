export type TPaymentMethodProps = 'CREDIT_CARD' | 'BANK_SLIP' | 'PIX' | 'FREE';
export type TStatusProps =
  | 'APPROVED'
  | 'PENDING'
  | 'REFUSED'
  | 'CANCELED'
  | 'CHARGEBACK'
  | 'REFUNDED'
  | 'SYSTEM_ERROR';

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
  status: TStatusProps;
  subTotal: number;
  thanksPageLink: string;
  transactionTax: number;
}

export interface IAffiliate {
  comission: number;
  email: string;
  name: string;
}

export interface IProducer {
  email: string;
  name: string;
}
export interface IAffiliate {
  comission: number;
  email: string;
  name: string;
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

export interface IMarketing {
  campaign?: string;
  content?: string;
  medium?: string;
  source?: string;
  src?: string;
  term?: string;
}

export interface ITransactionsProps {
  transaction: ITransaction;
  affiliate?: IAffiliate;
  producer?: IProducer;
  coProducers?: ISaleDetailsPromotor[];
  coproductionCommission?: number;
}

export interface IActionSalesManualProps {
  uuid: string;
  code: string;
  canRefundSale: boolean;
  canApproveSale: boolean;
  subscriptionChargeUuid: string | null;
  onCloseModal(): void;
}
