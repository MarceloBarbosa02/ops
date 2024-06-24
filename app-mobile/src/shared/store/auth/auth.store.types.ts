import { IUserDataResponse } from '@/shared/queries/user/auth.interfaces';

export type TUserSecurity = {
  token: string;
};

export type TAuthStoreHookProps = {
  token: string;
  userData: IUserDataResponse;
  handleSignOut(): void;
  handleSetToken(data: string): void;
  handleSetUserData(data: any): void;
};
