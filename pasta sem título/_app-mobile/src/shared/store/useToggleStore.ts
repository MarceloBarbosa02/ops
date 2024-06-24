import { create } from "zustand";

export interface IToggleContext {
  toggle: boolean;

  handleChangeVisible(): void;
}

export const useToggleStore = create<IToggleContext>((set, get) => ({
  toggle: true,
  handleChangeVisible: () =>
    set({
      toggle: !get().toggle,
    }),
}));
