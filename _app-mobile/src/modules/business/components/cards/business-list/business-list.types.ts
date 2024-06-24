import { ICompany } from '@/shared/store/company/company.interfaces';

export type TBusinessList = {
  data: ICompany;
};

export type TBusinessListItem = {
  title: string;
  description: string | JSX.Element;
};
