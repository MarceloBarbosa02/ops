import { create } from "zustand";

import { IMessageProps } from "../types/entities";

export interface IToastContext {
  messages: IMessageProps[];
  showToast(itemToast: Omit<IMessageProps, "id">): void;
  hideToast(id: string): void;
}

export const useToastStore = create<IToastContext>((set, get) => ({
  messages: [],
  showToast: ({
    type,
    message,
    delay = 2000,
    isSettings = false,
  }: Omit<IMessageProps, "id">) => {
    const id = Math.floor(Math.random() * 5);

    if (get().messages.find((msg) => msg.message === message)) {
      return;
    }

    const toast = {
      id: id.toString(),
      type,
      message,
      delay,
      isSettings,
    };

    set({ messages: [toast] });
  },
  hideToast: (id: string) =>
    set({ messages: get().messages.filter((item) => item.id !== id) }),
}));

export const showToast = (itemToast: Omit<IMessageProps, "id">) =>
  useToastStore.getState().showToast(itemToast);
