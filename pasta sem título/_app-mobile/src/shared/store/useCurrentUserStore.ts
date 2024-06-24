import { create } from "zustand";

import { ItemDDI } from "@modules/SignIn/models/phone";
import {
  TContactTypes,
  TOptionSelectMain,
} from "@shared/types/entities/User/types";
import { IFormNewUserSchema } from "@shared/types/validations/user";

export interface ICurrentUserContext {
  currentUser: IFormNewUserSchema;
  optionSelect: TContactTypes;
  uuidRegister: string;
  uuidLogsTokenUuid: string;
  selectedDDI: ItemDDI;
  optionMain: TOptionSelectMain;
  paramRef: string;
  showModalDDI: boolean;

  handleShowModalDDI(): void;
  updateCurrentUser(data: IFormNewUserSchema): void;
  handleSelectDDI(item: ItemDDI): void;
  handleSetParam(param: string): void;
  handleUuidLogsTokenUuid(item: string): void;
  handleUuidRegister(item: string): void;
  handleSelectOptionMain(option: TOptionSelectMain): void;
  handleOptionSelect(item: TContactTypes): void;
}

export const useCurrentUserStore = create<ICurrentUserContext>((set, get) => ({
  currentUser: {} as IFormNewUserSchema,
  optionSelect: "PHONE",
  uuidRegister: "",
  uuidLogsTokenUuid: "",
  selectedDDI: {} as ItemDDI,
  optionMain: "Login",
  paramRef: "",
  showModalDDI: false,

  handleShowModalDDI: () =>
    set((state) => ({ showModalDDI: !state.showModalDDI })),
  updateCurrentUser: (data: IFormNewUserSchema) => set({ currentUser: data }),
  handleSelectDDI: (item: ItemDDI) => set({ selectedDDI: item }),
  handleUuidLogsTokenUuid: (item: string) => set({ uuidLogsTokenUuid: item }),
  handleSetParam: (param: string) => set({ paramRef: param }),
  handleUuidRegister: (item: string) => set({ uuidRegister: item }),
  handleSelectOptionMain: (option: TOptionSelectMain) =>
    set({ optionMain: option }),
  handleOptionSelect: (item: TContactTypes) => set({ optionSelect: item }),
}));
