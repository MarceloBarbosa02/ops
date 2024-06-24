import { MetaProps } from "../Company";
import { TPContactType, TPContactValidationType } from "./types";

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

export interface IProductFormat {
  uuid: string;
  name: string;
  description: string;
}

export interface IProductCategory {
  uuid: string;
  name: string;
  description: string;
}

export interface IProductExample {
  id: string;
  name: string;
  value: string;
  type: "upsell" | "downsell";
  sales: number;
  imageCover: any;
  description: string;
}

export interface IProductValidateContact {
  validationType: TPContactValidationType;
  contactType: TPContactType;
  contact: string;
  productUuid: string;
  uuid?: string | null;
  code: string;
}

export interface IProductContact {
  uuid: string | null;
  contact: string | null;
  required: boolean;
  valid: boolean;
  block: boolean;
}

export interface IIProductResponse {
  data: IProduct[];
  meta: MetaProps;
}

export type ListProductsSoldResponseType = {
  data: ListProductsSoldType[];
};

export type ListProductsSoldType = {
  id: string;
  uuid: string;
  name: string;
};

export interface IProductsResponse {
  data: IProduct[];
  meta: { page: number; pages: number; pageSize: number; total: number };
}
