import { create } from "zustand";

export interface IBiometricNavigationProps {
  route: string;
  handleChangeNavigation(route: string): void;
}

export const useBiometricNavigation = create<IBiometricNavigationProps>(
  (set) => ({
    route: "",
    handleChangeNavigation: (route: string) =>
      set({
        route: route,
      }),
  })
);
