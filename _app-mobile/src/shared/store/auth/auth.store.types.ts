import { IUserDataResponse } from '@/shared/queries/user/sign-in.interfaces';

export type TUserSecurity = {
  token: string;
  refreshToken: string;
};

export type TAuthStoreHookProps = {
  token: string;
  userData: IUserDataResponse;
  handleSignOut(): void;
  handleSetToken(data: string): void;
  handleSetUserData(data: any): void;
};
