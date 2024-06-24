import {
  EnumOffersBillingType,
  EnumOffersChargeFrequency,
  EnumOffersStatus,
} from '@/shared/enum';

export interface FetchOffersType {
  productUuid: string;
  parameters?: {
    search?: string;
    page?: number;
    pageSize?: number;
  };
}

export interface ListOffersResponseType {
  meta: {
    page: number;
    pages: number;
    pageSize: number;
    total: number;
  };
  data: ListOffersType[];
}

export interface ListOffersType {
  uuid: string;
  productUuid: string;
  checkoutConfig: {
    uuid: string;
    name?: string;
    backgroundColor: 'LIGHT' | 'DARK';
    colorPrimary: string;
    colorSecondary: string;
  };
  name: string;
  isFree: boolean;
  price: number;
  commissionRate: number;
  commission: number;
  billingType: typeof EnumOffersBillingType;
  status: typeof EnumOffersStatus;
  customPageUrl?: string | null;
  checkoutUrl: string;
  orderBumps: string[];
  plans: PlanListType[];
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

export interface PlanListType {
  chargeFrequency: typeof EnumOffersChargeFrequency;
  price: number;
  promotionalPrice: number;
  commission: number;
}
