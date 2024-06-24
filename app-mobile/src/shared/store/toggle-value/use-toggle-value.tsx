import { create } from 'zustand';

import { IToggleContext } from './toggle-value.type';

export const useToggleStore = create<IToggleContext>((set, get) => ({
  toggle: true,
  handleChangeVisible: () =>
    set({
      toggle: !get().toggle,
    }),
}));
