export interface IMetaProps {
  page: number;
  pages: number;
  pageSize: number;
  total: number;
}

export interface ISelectOption {
  label: string;
  value?: string;
}

export interface IPaginationParamsProps {
  page: number;
  pageSize: number;
}

export interface IDataProps {
  label: string;
  value?: string | number;
}

export interface ISelectOptionProps {
  title: string;
  isShow: boolean;
  data: IDataProps[];
  close: () => void;
  onSelect: (item: IDataProps) => void;
}

export interface ISelectProps {
  id: number;
  label: string;
  reference: string;
  isActive: boolean;
}

export interface FocusedProps {
  period: boolean;
  product: boolean;
  offer: boolean;
}
