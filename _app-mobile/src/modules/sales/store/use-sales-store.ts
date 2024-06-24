import {
  IDataProps,
  IParamsProps,
} from '@/shared/queries/sales/sales.interfaces';
import { create } from 'zustand';
import { FocusedProps, ISalesStoreContext } from './sales.store.interface';
import { PaymentMethodProps, TFilterProps } from './sales.store.types';
import { TFormFilterSalesSchema } from '../validator/params';

const initial_state = {
  page: 1,
  dateFilter: [new Date('2023-01-02'), new Date()],
  productFilter: 'all',
  offerFilter: 'all',
  emailAffiliate: '',
  mainSearchFilter: '',
  autoral: false,
  affiliation: false,
  coproduction: false,
  oneTime: false,
  recurring: false,
  approved: true,
  pending: true,
  expired: false,
  refused: false,
  refunded: false,
  chargeback: false,
  creditCard: false,
  bankSlip: false,
  pix: false,
  free: false,
  utmCampaign: '',
  utmContent: '',
  utmMedium: '',
  utmSource: '',
  utmSrc: '',
  utmTerm: '',
};

export const useSalesStore = create<ISalesStoreContext>((set, get) => ({
  params: initial_state,
  modalCalendar: false,
  modalProducts: false,
  modalOffers: false,
  oneSalesUUID: '',
  productsFilter: [],
  offersFilter: [],
  isFocusedButton: {
    period: false,
    product: false,
    offer: false,
  },
  handleSetInitialParams: () =>
    set({
      params: initial_state,
      oneSalesUUID: '',
      productsFilter: [],
      offersFilter: [],
    }),
  handleRemoveParams: () =>
    set({
      params: {
        ...initial_state,
        approved: false,
        pending: false,
      },
    }),
  handleSetParams: (data: TFormFilterSalesSchema) => set({ params: data }),
  handleOneSalesUUID: (uuid: string) => set({ oneSalesUUID: uuid }),
  handleSetGoBackParams: () => set({}),
  handleDisabledFocusedButton: () => {
    set({
      isFocusedButton: {
        period: false,
        product: false,
        offer: false,
      },
    });
  },
  handleShowModalCalendar: () =>
    set((state) => ({ modalCalendar: !state.modalCalendar })),
  handleShowModalProducts: () =>
    set((state) => ({ modalProducts: !state.modalProducts })),
  handleShowModalOffers: () =>
    set((state) => ({ modalOffers: !state.modalOffers })),
  handlePreviousPage: (page: number) =>
    set((state) => ({
      params: { ...state.params, page: page },
    })),
  handleSetMainSearchFilter: (search: string) => {
    if (search === '') {
      set((state) => ({
        params: { ...state.params, page: 1, mainSearchFilter: undefined },
      }));
    } else {
      set((state) => ({
        params: { ...state.params, page: 1, mainSearchFilter: search },
      }));
    }
  },
  handleSetEmailAffiliateFilter: (email: string) =>
    set((state) => ({
      params: { ...state.params, page: 1, emailAffiliate: email },
    })),
  handleSetChangeOriginFilter: (
    origin: 'autoral' | 'affiliation' | 'coproduction'
  ) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        [origin]: !state.params?.[origin],
      },
    })),
  handleSetChangeTypeOffersFilter: (offer: 'oneTime' | 'recurring') =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        [offer]: !state.params?.[offer],
      },
    })),
  handleSetChangeStatusFilter: (status: TFilterProps) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        [status]: !state.params?.[status],
      },
    })),
  handleSetChangePaymentMethodFilter: (method: PaymentMethodProps) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        [method]: !state.params?.[method],
      },
    })),

  handleSetChangeUTMFilter: (utm: TFilterProps, reason: string) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        utm: {
          ...state.params,
          [utm]: reason,
        },
      },
    })),
  handleAddFiltersProducts: (items: IDataProps[]) =>
    set({
      productsFilter: items,
    }),
  handleAddFiltersOffers: (items: IDataProps[]) =>
    set({
      offersFilter: items,
    }),
  handleSelectProducts: (item: string) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        productFilter: item,
      },
    })),
  handleSelectOffers: (item: string) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        offerFilter: item,
      },
    })),
  handleCleanSelectDate: () =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        dateFilter: [new Date('2023-01-02'), new Date()],
      },
    })),
  handleSelectDate: (dates: Date[]) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        dateFilter: dates,
      },
    })),
}));
