import { create } from 'zustand';
import {
  ILeadCaptureStoreContext,
  TAccommodation,
  TBusinessType,
  THowDidYouMeetKirvano,
  TMonthlyBilling,
  TPhysicalOrDigitalProduct,
  TTypeOfProductYouSell,
  initialStateCapture,
} from './lead-capture.types';

export const useLeadCaptureStore = create<ILeadCaptureStoreContext>(
  (set, get) => ({
    leads: {} as typeof initialStateCapture,
    totalStepsYes: 6,
    totalStepsNo: 4,
    stepProgressYes: 100 / 6,
    stepProgressNo: 100 / 4,
    handleResetState: () => set({ leads: {} as typeof initialStateCapture }),
    handleSetInitialParams: () => set({ leads: initialStateCapture }),
    handleChangeAccommodation: (value: TAccommodation) =>
      set((state) => ({
        leads: {
          ...state.leads,
          accommodation: {
            ...state.leads.accommodation,
            [value]: !state.leads.accommodation?.[value],
          },
        },
      })),
    handleChangeOnlineSales: (value: string) =>
      set((state) => ({ leads: { ...state.leads, onlineSales: value } })),
    handleChangeDigitalProductPlans: (value: string) =>
      set((state) => ({
        leads: { ...state.leads, digitalProductPlans: value },
      })),
    handleChangeMonthlyBilling: (value: TMonthlyBilling) =>
      set((state) => ({
        leads: {
          ...state.leads,
          monthlyBilling: value,
        },
      })),
    handleChangeBusinessType: (value: TBusinessType) =>
      set((state) => ({
        leads: {
          ...state.leads,
          businessType: value,
        },
      })),
    handleChangeHowDidYouMeetKirvano: (
      value: THowDidYouMeetKirvano,
      reason: string
    ) =>
      set((state) => ({
        leads: {
          ...state.leads,
          howDidYouMeetKirvano: {
            ...state.leads.howDidYouMeetKirvano,
            option: value,
            reason: reason,
          },
        },
      })),
    handleChangePhysicalOrDigitalProduct: (value: TPhysicalOrDigitalProduct) =>
      set((state) => ({
        leads: {
          ...state.leads,
          physicalOrDigitalProduct: value,
        },
      })),
    handleChangeTypeOfProductYouSell: (value: TTypeOfProductYouSell) =>
      set((state) => ({
        leads: {
          ...state.leads,
          typeOfProductYouSell: {
            ...state.leads.typeOfProductYouSell,
            [value]: !state.leads.typeOfProductYouSell?.[value],
          },
        },
      })),
  })
);
