import { IMetaProps } from "../Generic";

export interface IWithdrawal {
  uuid: string;
  code: string;
  value: number;
  status: string;
  createdAt: Date;
  releasedAt: Date;
}

export interface IWithdrawalRequest {
  balance: number;
  tax: number;
  value: number;
}

export interface IWithdrawalCreate {
  value: number;
  tax: number;
}

export interface IWithdrawalsRequest {
  page: number;
  pageSize: number;
}

export interface IWithdrawalsResponse {
  data: IWithdrawal[];
  meta: IMetaProps;
}

export interface IWithdrawalsCreateResponse {
  code: string;
  status: string;
  uuid: string;
}

export interface IWithdrawalConfirm {
  document: string;
  balance: number;
  tax: number;
  value: number;
}
