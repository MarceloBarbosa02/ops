import { TSelectOptions } from '@/shared/components/select/select.types';
import { ICreateUserDataRequest } from '@/shared/queries/user/sign-in.interfaces';

export type TCreateUserContext = {
  user: ICreateUserDataRequest;
  uuid: string;
  handleSetNewUser(data: ICreateUserDataRequest): void;
  handleSetUUID(data: string): void;
};

export type TInputPhoneContext = {
  optionCountry: TSelectOptions;
  handleSelectOptionCountry: (item: TSelectOptions) => void;
};

export type TForgotPasswordContext = {
  email: string;
  handleSetEmail: (data: string) => void;
};
