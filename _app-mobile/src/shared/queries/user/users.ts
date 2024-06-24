import { api } from '@/shared/services';
import { useMutation } from '@tanstack/react-query';
import {
  ICreateAccessRequest,
  IRequestPasswordConfirmCode,
  IRequestPasswordUpdateCode,
  IUserContactUpdateRequest,
  IUserContactUpdateResponse,
} from './sign-in.interfaces';
import {
  USER_CHANGE_PASSWORD,
  USER_CREATE_PASSWORD,
  USER_PASSWORD_UPDATE_CONFIRM_CODE,
  USER_PASSWORD_UPDATE_SEND_CODE,
  USER_RECEIVED_SMS,
  USER_VALIDATE_CODE,
  USER_VALIDATE_EMAIL,
} from '@/shared/constants';
import { TRedefinePasswordSchema } from '@/modules/security/validations';

export async function createPassword(form: ICreateAccessRequest) {
  const resp = api.post(USER_CREATE_PASSWORD, form);

  return resp;
}

export async function sendContactUpdate(
  data: IUserContactUpdateRequest
): Promise<IUserContactUpdateResponse> {
  const resp = await api.post(USER_RECEIVED_SMS, data);
  return resp;
}

export function useCreatePasswordAccessPurchase() {
  return useMutation({
    mutationFn: (form: ICreateAccessRequest) => {
      return createPassword(form);
    },
  });
}

export function useUpdateChangePassword() {
  return useMutation({
    mutationFn: async (data: TRedefinePasswordSchema) => {
      return await api.put(USER_CHANGE_PASSWORD, data);
    },
  });
}

export function useSendContactUpdate() {
  return useMutation({
    mutationFn: (data: IUserContactUpdateRequest) => {
      return sendContactUpdate(data);
    },
  });
}

export function useSendUpdateCode() {
  return useMutation({
    mutationFn: async (data: IRequestPasswordConfirmCode) => {
      return await api.post(USER_VALIDATE_CODE, data);
    },
  });
}

export function usePasswordUpdateConfirmCode() {
  return useMutation({
    mutationFn: async (data: IRequestPasswordConfirmCode) => {
      return await api.post(USER_PASSWORD_UPDATE_CONFIRM_CODE, data);
    },
  });
}

export function usePasswordUpdateSendCode() {
  return useMutation({
    mutationFn: async (data: IRequestPasswordUpdateCode) => {
      return await api.post(USER_PASSWORD_UPDATE_SEND_CODE, data);
    },
  });
}

export function useFetchSettingsEmailValidation() {
  return useMutation({
    mutationFn: async (uuid: string) => {
      return await api.get(USER_VALIDATE_EMAIL(uuid));
    },
  });
}
