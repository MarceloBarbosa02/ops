import { create } from "zustand";

import { IParamsProps } from "@shared/types/entities/Sales";
import { FocusedProps, IDataProps } from "@shared/types/entities";

export interface ISalesStoreContext {
  params: IParamsProps;
  modalCalendar: boolean;
  modalProducts: boolean;
  modalOffers: boolean;
  oneSalesUUID: string;
  isFocusedButton: FocusedProps;
  productFilterSelect: IDataProps;
  offersFilterSelect: IDataProps;
  handleOneSalesUUID(uuid: string): void;
  handleShowModalCalendar(): void;
  handleShowModalProducts(): void;
  handleShowModalOffers(): void;
  handleSetInitialParams(): void;
  handleStartParams(): void;
  handleSetGoBackParams(data: IParamsProps): void;
  handlePreviousPage(page: number): void;
  handleSetMainSearchFilter(search: string): void;
  handleSetEmailAffiliateFilter(email: string): void;
  handleSetSelectAllOriginFilter(): void;
  handleSetChangeOriginFilter(
    origin: "autoral" | "affiliation" | "coproduction"
  ): void;
  handleSetSelectAllTypeOffersFilter(): void;
  handleSetChangeTypeOffersFilter(offer: "oneTime" | "recurring"): void;
  handleSetSelectAllStatusFilter(): void;
  handleSetChangeStatusFilter(status: StatusFilterProps): void;
  handleSetSelectAllPaymentMethodFilter(): void;
  handleSetChangePaymentMethodFilter(method: PaymentMethodProps): void;
  handleSetChangeUTMFilter(method: UTMFilterProps, reason: string): void;
  handleSelectProducts(item: IDataProps): void;
  handleSelectOffers(item: IDataProps): void;
  handleCleanSelectDate(): void;
  handleSelectDate(dates: Date[]): void;
  handleFocusedButton(item: TFocusedProps): void;
  handleDisabledFocusedButton(): void;
}

const initial_state = {
  page: 1,
  dateFilter: [new Date("2023-01-02"), new Date()],
  productFilter: "all",
  offerFilter: "all",
  emailAffiliate: "",
  mainSearchFilter: "",
  origin: {
    autoral: false,
    affiliation: false,
    coproduction: false,
  },
  typeOffers: {
    oneTime: false,
    recurring: false,
  },
  statusFilter: {
    approved: true,
    pending: true,
    expired: false,
    refused: false,
    refunded: false,
    chargeback: false,
  },
  paymentMethodFilter: {
    creditCard: false,
    bankSlip: false,
    pix: false,
    free: false,
  },
  utm: {
    utmCampaign: "",
    utmContent: "",
    utmMedium: "",
    utmSource: "",
    utmSrc: "",
    utmTerm: "",
  },
};

export type TFocusedProps = "period" | "product" | "offer";

export type PaymentMethodProps = "creditCard" | "bankSlip" | "pix" | "free";

export type StatusFilterProps =
  | "approved"
  | "pending"
  | "expired"
  | "refused"
  | "refunded"
  | "chargeback";

export type UTMFilterProps =
  | "utmCampaign"
  | "utmContent"
  | "utmMedium"
  | "utmSource"
  | "utmSrc"
  | "utmTerm";

export const useSalesStore = create<ISalesStoreContext>((set, get) => ({
  params: initial_state,
  modalCalendar: false,
  modalProducts: false,
  modalOffers: false,
  oneSalesUUID: "",
  productFilterSelect: {} as IDataProps,
  offersFilterSelect: {} as IDataProps,
  isFocusedButton: {
    period: false,
    product: false,
    offer: false,
  },
  handleStartParams: () =>
    set({
      params: initial_state,
      oneSalesUUID: "",
      productFilterSelect: {} as IDataProps,
      offersFilterSelect: {} as IDataProps,
    }),
  handleSetInitialParams: () =>
    set({
      params: {
        ...initial_state,
        statusFilter: {
          approved: false,
          pending: false,
        },
      },
      oneSalesUUID: "",
      productFilterSelect: {} as IDataProps,
      offersFilterSelect: {} as IDataProps,
    }),
  handleOneSalesUUID: (uuid: string) => set({ oneSalesUUID: uuid }),
  handleSetGoBackParams: (data: IParamsProps) => set({ params: data }),
  handleFocusedButton: (item: TFocusedProps) =>
    set((state) => ({
      isFocusedButton: {
        ...state.isFocusedButton,
        [item]: true,
      },
    })),
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
    if (search === "") {
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
  handleSetSelectAllOriginFilter: () => {
    if (get().params.origin?.autoral && get().params.origin?.affiliation) {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          origin: initial_state.origin,
        },
      }));
    } else {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          origin: {
            autoral: true,
            affiliation: true,
            coproduction: true,
          },
        },
      }));
    }
  },
  handleSetChangeOriginFilter: (
    origin: "autoral" | "affiliation" | "coproduction"
  ) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        origin: {
          ...state.params.origin,
          [origin]: !state.params.origin?.[origin],
        },
      },
    })),
  handleSetSelectAllTypeOffersFilter: () => {
    if (
      get().params.typeOffers?.oneTime &&
      get().params.typeOffers?.recurring
    ) {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          typeOffers: initial_state.typeOffers,
        },
      }));
    } else {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          typeOffers: {
            oneTime: true,
            recurring: true,
          },
        },
      }));
    }
  },
  handleSetChangeTypeOffersFilter: (offer: "oneTime" | "recurring") =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        typeOffers: {
          ...state.params.typeOffers,
          [offer]: !state.params.typeOffers?.[offer],
        },
      },
    })),
  handleSetSelectAllStatusFilter: () => {
    if (
      get().params.statusFilter?.approved &&
      get().params.statusFilter?.chargeback &&
      get().params.statusFilter?.expired &&
      get().params.statusFilter?.pending &&
      get().params.statusFilter?.refunded &&
      get().params.statusFilter?.refused
    ) {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          statusFilter: {
            approved: false,
            chargeback: false,
            expired: false,
            pending: false,
            refunded: false,
            refused: false,
          },
        },
      }));
    } else {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          statusFilter: {
            approved: true,
            chargeback: true,
            expired: true,
            pending: true,
            refunded: true,
            refused: true,
          },
        },
      }));
    }
  },
  handleSetChangeStatusFilter: (status: StatusFilterProps) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        statusFilter: {
          ...state.params.statusFilter,
          [status]: !state.params.statusFilter?.[status],
        },
      },
    })),
  handleSetSelectAllPaymentMethodFilter: () => {
    if (
      get().params.paymentMethodFilter?.bankSlip &&
      get().params.paymentMethodFilter?.creditCard &&
      get().params.paymentMethodFilter?.free &&
      get().params.paymentMethodFilter?.pix
    ) {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          paymentMethodFilter: initial_state.paymentMethodFilter,
        },
      }));
    } else {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          paymentMethodFilter: {
            bankSlip: true,
            creditCard: true,
            free: true,
            pix: true,
          },
        },
      }));
    }
  },
  handleSetChangePaymentMethodFilter: (method: PaymentMethodProps) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        paymentMethodFilter: {
          ...state.params.paymentMethodFilter,
          [method]: !state.params.paymentMethodFilter?.[method],
        },
      },
    })),

  handleSetChangeUTMFilter: (utm: UTMFilterProps, reason: string) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        utm: {
          ...state.params.utm,
          [utm]: reason,
        },
      },
    })),
  handleSelectProducts: (item: IDataProps) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        productFilter: item.value as string,
        offerFilter: "",
      },
      productFilterSelect: item,
      offersFilterSelect: {} as IDataProps,
    })),
  handleSelectOffers: (item: IDataProps) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        offerFilter: item.value as string,
      },
      offersFilterSelect: item,
    })),
  handleCleanSelectDate: () =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        dateFilter: [new Date("2023-01-02"), new Date()],
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
