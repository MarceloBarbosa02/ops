import { create } from 'zustand';
import { TBiometricNavigationProps } from './navigation.types';

export const useNavigationStore = create<TBiometricNavigationProps>((set) => ({
  route: '',
  handleChangeNavigation: (route: string) =>
    set({
      route: route,
    }),
}));
