import { formatPreviousThirtyDays } from "@shared/components/Calendar/calendar-utils";
import { IParamsExtractProps } from "@shared/types/entities/Finance/interface";
import { TCategoryParams } from "@shared/types/entities/Finance/types";
import { IWithdrawalConfirm } from "@shared/types/entities/Withdrawal/interfaces";
import { create } from "zustand";

export interface IFinancesContext {
  value: string;
  payload: IWithdrawalConfirm;
  currentPage: number;
  pageSize: number;
  modalCalendar: boolean;
  isOpenModal: boolean;
  params: IParamsExtractProps;
  uuidDetail: string;
  handleSetInitialParams(): void;
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
  handleSetGoBackParams(data: IParamsExtractProps): void;
  handleSetChangeTypeTransactionFilter(type: "in" | "out"): void;
  handleSetSelectAllCategoryFilter(): void;
  handleSetChangeCategoryFilter(categories: TCategoryParams): void;
}

const date = new Date();

const initial_state = {
  page: 1,
  dateFilter: [new Date("2024-01-02"), new Date()],
  mainSearchFilter: "",
  in: false,
  out: false,
  approved: false,
  pending: false,
  expired: false,
  refused: false,
  refunded: false,
  chargeback: false,
};

export const useFinancesStore = create<IFinancesContext>((set, get) => ({
  value: "",
  currentPage: 1,
  pageSize: 10,
  modalCalendar: false,
  params: initial_state,
  payload: {} as IWithdrawalConfirm,
  uuidDetail: "",
  isOpenModal: false,
  handleSetInitialParams: () => set({ params: initial_state }),
  handleSetValue: (value: string) => set({ value }),
  handleSetGoBackParams: (data: IParamsExtractProps) => set({ params: data }),
  handleSetUUIDDetail: (data: string) => set({ uuidDetail: data }),
  handleShowModalCalendar: () =>
    set((state) => ({
      modalCalendar: !state.modalCalendar,
      isOpenModal: !state.isOpenModal,
    })),
  handleSetCurrentPage: (page: number) => set({ currentPage: page }),
  handleConfirmValue: (data: IWithdrawalConfirm) => set({ payload: data }),
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
  handleSetSelectAllTypeTransactionFilter: () => {
    if (get().params.in && get().params.out) {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          in: false,
          out: false,
        },
      }));
    } else {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          in: true,
          out: true,
        },
      }));
    }
  },
  handleSetChangeTypeTransactionFilter: (type: "in" | "out") =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        [type]: !state.params?.[type],
      },
    })),
  handleSetSelectAllCategoryFilter: () => {
    if (
      get().params?.adjust &&
      get().params?.chargeback &&
      get().params?.comission &&
      get().params?.refunded &&
      get().params?.taxas &&
      get().params?.withdrawal
    ) {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          adjust: false,
          chargeback: false,
          comission: false,
          refunded: false,
          taxas: false,
          withdrawal: false,
        },
      }));
    } else {
      set((state) => ({
        params: {
          ...state.params,
          page: 1,
          adjust: true,
          chargeback: true,
          comission: true,
          refunded: true,
          taxas: true,
          withdrawal: true,
        },
      }));
    }
  },
  handleSetChangeCategoryFilter: (categories: TCategoryParams) =>
    set((state) => ({
      params: {
        ...state.params,
        page: 1,
        [categories]: !state.params?.[categories],
      },
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
