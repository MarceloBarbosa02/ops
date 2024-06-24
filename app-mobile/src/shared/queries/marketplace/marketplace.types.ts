import { TCategoryTypeProps } from '@/modules/marketplace/components/cards/category/category.types';

export type TMarketplaceRequest = {
  type: TCategoryTypeProps;
  page: number;
  pageSize: number;
};

export type TMarketplaceItemResponse = {
  uuid: string;
  categoryUuid: string;
  category: {
    uuid: string;
    name: string;
  };
  formatUuid: string;
  format: {
    uuid: string;
    name: string;
  };
  name: string;
  producer: {
    uuid: string;
    name: string;
  };
  currency: string;
  maxCommission: number;
  scoreLevel: 'GROW';
  score: number;
  isAffiliated: boolean;
  affiliationStatus: null | string;
  affiliateUuid: null | string;
  isOwner: boolean;
  isCompanyOwner: boolean;
  photo: string;
  isCoproducer: boolean;
};

export type TMarketplaceResponse = {
  data: TMarketplaceItemResponse[];
  meta: {
    page: number;
    pages: number;
    pageSize: number;
    total: number;
  };
};
