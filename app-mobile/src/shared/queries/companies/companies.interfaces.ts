import { ICompany } from '@/shared/store/company/company.interfaces';
import { TType } from '@/shared/store/company/company.types';

export interface ICompanyResponse {
  data: ICompany[];
  meta: IMetaProps;
}

export interface IMetaProps {
  page: number;
  pages: number;
  pageSize: number;
  total: number;
}

export interface ICompanyCreateRequest {
  type?: TType;
  document?: string;
  nickname?: string;
}

export interface IUpdateCompanyRequest {
  uuid: string;
  data: {
    status?: 'ACTIVE' | 'DISABLED';
    nickname?: string | null;
    isDefault?: boolean | null;
  };
}
