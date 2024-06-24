import { TStatus, TType } from "./types";

export interface ICompany {
  uuid: string;
  name: string;
  fantasyName: string;
  nickname?: string;
  document: string;
  address: ICompanyAddress;
  status: TStatus;
  type: TType;
  withdrawalTax: number;
  isDefault: boolean;
}

export interface ICompanyAddress {
  country: string;
  zipCode: string;
  street: string;
  number?: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
}

export interface ICompanyBalances {
  currentDayBalance: number;
  previousDayBalance: number;
  availableBalance: number;
  pendingBalance: number;
  securityReserveBalance: number;
  totalBalance: number;
  totalSales: number;
}

export interface ICompanyCreate {
  type?: TType;
  document?: string;
  nickname?: string;
}

export interface ICompanyUpdate {
  uuid: string;
  nickname?: string;
  status?: TStatus;
}

export interface ICompanyCheck {
  document: string;
  type: string;
  name: string;
  fantasyName: string;
  address: ICompanyAddress;
  isValid?: boolean;
  message?: string;
}

// Response
export interface ICompanyUpdateResponse {
  uuid: string;
  message: string;
}

export interface ICompanyResponse {
  data: ICompany[];
  meta: MetaProps;
}

export interface MetaProps {
  page: number;
  pages: number;
  pageSize: number;
  total: number;
}
