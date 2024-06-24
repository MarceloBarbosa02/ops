import { TStatus, TType } from './company.types';

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
