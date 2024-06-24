import { TContactTypes } from '@/shared/queries/user/sign-in.types';

export type TSecurityContext = {
  contact: TContactTypes;
  uuidCode: string;
  uuidMethod: string;
  handleSetContact(data: TContactTypes): void;
  handleSetUUIDCode(data: string): void;
  handleSetUUIDMethod(data: string): void;
};
