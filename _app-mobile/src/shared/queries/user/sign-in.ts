import {
  USERS,
  USER_LOGIN,
  USER_ME,
  USER_RECOVERY_PASSWORD,
  USER_REGISTER,
  USER_RESET_PASSWORD,
  USER_SEND_CODE,
  USER_VALID_EMAIL,
} from '@/shared/constants';
import { EnumStorageSignIn } from '@/shared/enum';
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '@/shared/services/api';
import {
  ICreateUserDataRequest,
  IFormDataProfileRequest,
  IRecoverPasswordRequest,
  IResetPasswordRequest,
  IUserDataRequest,
  IUserDataResponse,
  IUserMeDataResponse,
  IVerifyCodeRequest,
} from './sign-in.interfaces';
import { zustandStorage } from '@/shared/utils';

export async function fetchSigIn(
  form: IUserDataRequest
): Promise<IUserDataResponse> {
  const { data } = await api.post(USER_LOGIN, form);
  return data;
}

export async function fetchUserData(): Promise<IUserMeDataResponse> {
  const { data } = await api.get(USER_ME);
  return data;
}

export async function fetchRecoveryPassword(
  dataEmail: IRecoverPasswordRequest
): Promise<any> {
  const { data } = await api.post(USER_RECOVERY_PASSWORD, dataEmail);
  return data;
}

export async function fetchResetPassword(
  form: IResetPasswordRequest
): Promise<any> {
  const { data } = await api.post(USER_RESET_PASSWORD, form);
  return data;
}

export function useRequestSignIn() {
  return useMutation({
    mutationFn: (data: IUserDataRequest) => {
      return fetchSigIn(data);
    },
  });
}

export function useFetchMe() {
  const _token = zustandStorage.getItem(EnumStorageSignIn.ACCESS);

  return useQuery({
    queryKey: ['/users', '/me'],
    queryFn: fetchUserData,
    enabled: !!_token,
    staleTime: Infinity,
  });
}

export function useProfileUser() {
  return useMutation({
    mutationFn: async (user: IFormDataProfileRequest) => {
      return await api.put(USERS, user);
    },
  });
}

export function useRequestEmail() {
  return useMutation({
    mutationFn: async (data: IVerifyCodeRequest) => {
      return await api.post(USER_SEND_CODE(data?.uuid), {
        contact: data.contact,
        contactType: data.contactType,
      });
    },
  });
}

export function useRequestCurrentUser() {
  return useMutation({
    mutationFn: async (data: ICreateUserDataRequest) => {
      return await api.post(USER_REGISTER, data);
    },
  });
}

export function useSendRecoverPasswordEmail() {
  return useMutation({
    mutationFn: (sendEmail: IRecoverPasswordRequest) => {
      return fetchRecoveryPassword(sendEmail);
    },
  });
}

export function useRequestResetPassword() {
  return useMutation({
    mutationFn: (form: IResetPasswordRequest) => {
      return fetchResetPassword(form);
    },
  });
}

export function useFetchEmailValidation() {
  return useMutation({
    mutationFn: async (uuid: string) => {
      return await api.get(USER_VALID_EMAIL(uuid));
    },
  });
}
