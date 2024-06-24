export type TFinancesContext = {
  value: string;
  payload: IWithdrawalConfirm;
  currentPage: number;
  pageSize: number;
  modalCalendar: boolean;
  params: IParamsExtractProps;
  auxParams: IParamsExtractProps;
  uuidDetail: string;
  isOpenModal: boolean;
  handleSetInitialParams(): void;
  handleSetAuxParams(): void;
  handleCleanSelectDate(): void;
  handleShowModalCalendar(): void;
  handlePreviousPage(page: number): void;
  handleSelectDate(dates: Date[]): void;
  handleSetValue(value: string): void;
  handleSetMainSearchFilter(search: string): void;
  handleSetUUIDDetail(data: string): void;
  handleSetCurrentPage(page: number): void;
  handleConfirmValue(data: IWithdrawalConfirm): void;
  handleSetSelectAllTypeTransactionFilter(): void;
  handleSetGoBackParams(): void;
  handleSetChangeTypeTransactionFilter(type: 'in' | 'out'): void;
  handleSetSelectAllCategoryFilter(): void;
  handleSetChangeCategoryFilter(categories: TCategoryParams): void;
};

export type IWithdrawalConfirm = {
  document: string;
  balance: number;
  tax: number;
  value: number;
};

export type IParamsExtractProps = {
  dateFilter: Date[];
  mainSearchFilter?: string;
  page: number;
  in?: boolean;
  out?: boolean;
  adjust?: boolean;
  chargeback?: boolean;
  comission?: boolean;
  refunded?: boolean;
  withdrawal?: boolean;
  taxas?: boolean;
};

export type TCategoryParams =
  | 'adjust'
  | 'chargeback'
  | 'comission'
  | 'refunded'
  | 'taxas'
  | 'withdrawal';
