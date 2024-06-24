import { api } from "@shared/services/api";
import { useMutation } from "@tanstack/react-query";
import {
  ALLOW_CONTACT,
  SEND_CODE,
  USER_INVITE_CODE,
  USER_REGISTER,
  VALID_CODE,
  VALID_EMAIL,
} from "@shared/constants/request";
import {
  IAllowContactRequest,
  ICreateUserDataRequest,
  IRequestCheckIfValidCode,
  IVerifyCodeRequest,
} from "@shared/types";

export function useCurrentUser() {
  return useMutation(async (data: ICreateUserDataRequest) => {
    return await api.post(USER_REGISTER, data);
  });
}

export function useSelectOption() {
  return useMutation(async (dataCode: IVerifyCodeRequest) => {
    return await api.post(SEND_CODE(dataCode?.uuid), {
      contact: dataCode.contact,
      contactType: dataCode.contactType,
    });
  });
}

export function useFetchSendCode() {
  return useMutation(async (dataCode: IRequestCheckIfValidCode) => {
    return await api.post(VALID_CODE(dataCode.uuid), {
      code: dataCode.code,
    });
  });
}

export function useFetchAllowContact() {
  return useMutation(async (dataContact: IAllowContactRequest) => {
    return await api.post(ALLOW_CONTACT(dataContact.uuid), {
      allowContact: dataContact.allowContact,
    });
  });
}

export function useFetchEmailValidation() {
  return useMutation(async (uuid: string) => {
    return await api.get(VALID_EMAIL(uuid));
  });
}

export function useCheckInviteValidity() {
  return useMutation(async (inviteCode: string) => {
    return await api.get(USER_INVITE_CODE(inviteCode));
  });
}
