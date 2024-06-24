import {
  USER_LOGIN,
  USER_ME,
  USER_REGISTER,
  USER_SEND_CODE,
} from '@/shared/constants';
import { EnumStorageSignIn } from '@/shared/enum';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { api } from '@/shared/services/api';
import {
  ICreateUserDataRequest,
  IUserDataRequest,
  IUserDataResponse,
  IUserMeDataResponse,
  IVerifyCodeRequest,
} from './auth.interfaces';
import { IFormCreateUserSchema } from '@/modules/auth/screens/sign-up/sign-up.validations.form';

export async function fetchSigIn(
  form: IUserDataRequest
): Promise<IUserDataResponse> {
  const { data } = await api.post(USER_LOGIN, form);
  return data;
}

export function useRequestSignIn() {
  return useMutation({
    mutationFn: (data: IUserDataRequest) => {
      return fetchSigIn(data);
    },
  });
}

export async function fetchSigUp(form: ICreateUserDataRequest): Promise<any> {
  const { data } = await api.post(USER_LOGIN, form);
  return data;
}

export function useRequestSignUp() {
  return useMutation({
    mutationFn: async (data: ICreateUserDataRequest) => {
      return fetchSigUp(data);
    },
  });
}

export async function fetchSendCodeEmail(
  form: IVerifyCodeRequest
): Promise<any> {
  const { data } = await api.post(USER_SEND_CODE(form?.uuid), {
    contact: form.contact,
    contactType: form.contactType,
  });
  return data;
}

export function useRequestSendCodeEmail() {
  return useMutation({
    mutationFn: async (data: IVerifyCodeRequest) => {
      return fetchSendCodeEmail(data);
    },
  });
}
