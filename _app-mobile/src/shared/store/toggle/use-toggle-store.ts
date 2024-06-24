import { create } from 'zustand';
import { TToggleContext } from './use-toggle-store.types';

export const useToggleVisibleStore = create<TToggleContext>((set) => ({
  toggle: true,
  handleChangeVisible: () => set((state) => ({ toggle: !state.toggle })),
}));
