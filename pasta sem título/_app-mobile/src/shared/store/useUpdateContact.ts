import { create } from "zustand";

export interface IUpdateContactContext {
  code: string;
  phoneNumber: string;
  emailCurrent: string;
  uuid: string;
  isOpen: boolean;
  isOpenEmail: boolean;
  isValidation: boolean;
  isValidationEmail: boolean;

  handleChangeEmailCurrent(email: string): void;
  handleChangeUUID(uuid: string): void;
  handleChangeIsValidation(valid: boolean): void;
  handleChangeIsValidationEmail(valid: boolean): void;
  handleChangeIsOpen(open: boolean): void;
  handleChangeIsOpenEmail(open: boolean): void;
  handleChangePhoneNumber(phone: string): void;
  handleChangeCode(code: string): void;
}

export const useUpdateContact = create<IUpdateContactContext>((set, get) => ({
  uuid: "",
  code: "",
  phoneNumber: "",
  emailCurrent: "",
  isOpen: false,
  isOpenEmail: false,
  isValidation: false,
  isValidationEmail: false,
  handleChangeEmailCurrent: (email: string) => set({ emailCurrent: email }),
  handleChangeUUID: (uuid: string) => set({ uuid: uuid }),
  handleChangePhoneNumber: (phone: string) => set({ phoneNumber: phone }),
  handleChangeCode: (code: string) => set({ code }),
  handleChangeIsOpen: (open: boolean) => set({ isOpen: open }),
  handleChangeIsOpenEmail: (open: boolean) => set({ isOpenEmail: open }),
  handleChangeIsValidation: (valid: boolean) => set({ isValidation: valid }),
  handleChangeIsValidationEmail: (valid: boolean) =>
    set({ isValidationEmail: valid }),
}));
