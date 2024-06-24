import { IDataProps } from '@/shared/queries/sales/sales.interfaces';
import { PaymentMethodProps, TFilterProps } from './sales.store.types';
import { TFormFilterSalesSchema } from '../validator/params';

export interface ISalesStoreContext {
  params: TFormFilterSalesSchema;
  modalCalendar: boolean;
  modalProducts: boolean;
  modalOffers: boolean;
  oneSalesUUID: string;
  isFocusedButton: FocusedProps;
  productsFilter: IDataProps[];
  offersFilter: IDataProps[];
  handleOneSalesUUID(uuid: string): void;
  handleSetParams(data: TFormFilterSalesSchema): void;
  handleRemoveParams(): void;
  handleShowModalCalendar(): void;
  handleShowModalProducts(): void;
  handleShowModalOffers(): void;
  handleSetInitialParams(): void;
  handleSetGoBackParams(): void;
  handlePreviousPage(page: number): void;
  handleSetMainSearchFilter(search: string): void;
  handleSetEmailAffiliateFilter(email: string): void;
  handleSetChangeOriginFilter(
    origin: 'autoral' | 'affiliation' | 'coproduction'
  ): void;
  handleSetChangeTypeOffersFilter(offer: 'oneTime' | 'recurring'): void;
  handleSetChangeStatusFilter(status: TFilterProps): void;
  handleSetChangePaymentMethodFilter(method: PaymentMethodProps): void;
  handleSetChangeUTMFilter(method: TFilterProps, reason: string): void;

  handleAddFiltersProducts(items: IDataProps[]): void;
  handleAddFiltersOffers(items: IDataProps[]): void;
  handleSelectProducts(item: string): void;
  handleSelectOffers(item: string): void;

  handleCleanSelectDate(): void;
  handleSelectDate(dates: Date[]): void;
  handleDisabledFocusedButton(): void;
}

export interface FocusedProps {
  period: boolean;
  product: boolean;
  offer: boolean;
}
