interface IProducts {
  uuid: string;
  categoryUuid: string;
  formatUuid: string;
  category: {
    uuid: string;
    name: string;
  };
  format: {
    uuid: string;
    name: string;
  };
  courseUuid: null | string;
  name: string;
  description: string;
  landingPageUrl: string;
  currency: string;
  language: string;
  status: string;
  photo: string;
  salesCount: number;
  salesIncome: number;
  evaluationStatus: string;
  affiliateUuid: string;
  affiliateStatus: string;
  isAffiliate: true;
  producer: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductsResponse {
  data: IProducts[];
  meta: { page: number; pages: number; pageSize: number; total: number };
}

export type ListProductsSoldResponseType = {
  data: ListProductsSoldType[];
};

export type ListProductsSoldType = {
  id: string;
  uuid: string;
  name: string;
};

export interface IIProductResponse {
  data: IProduct[];
  meta: MetaProps;
}

export interface IProduct {
  uuid?: string;
  categoryUuid: string;
  formatUuid: string;
  name: string;
  description: string;
  photo?: any;
  companyUuid?: string;
  currency: string;
  language: string;
  salesCount: number;
  createdAt?: string;
  isPublishable: boolean;
  contactEmail?: string;
  contactPhone?: string;
  issues?: {
    contactEmail?: string;
    contents?: string;
  };
  salesIncome: number;
}

export interface MetaProps {
  page: number;
  pages: number;
  pageSize: number;
  total: number;
}
