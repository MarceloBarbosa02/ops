export type IStorageProps = {
  token: string;
  refreshToken: string;
  uuid: string;
  email?: string;
  name?: string;
  permissions?: string[];
};
