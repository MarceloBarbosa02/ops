import { useMutation } from "@tanstack/react-query";
import { MMKV } from "react-native-mmkv";
import * as FileSystem from "expo-file-system";

import { api } from "@shared/services/api";
import {
  CHANGE_PASSWORD,
  USERS,
  USER_RECEIVED_SMS,
  USER_VALIDATE_CODE,
  USER_VALIDATE_EMAIL,
} from "@shared/constants/request";
import { showToast } from "@shared/store/useToastStore";
import { EnumStorageSignIn } from "@shared/types/enum";
import {
  IFormDataProfileRequest,
  IRequestCheckIfValidCode,
  IUserContactUpdateRequestType,
  IUserUpdatePasswordRequest,
} from "@shared/types/entities";

import { mobile } from "../../../../template.json";

const storage = new MMKV();

export function useProfileUser() {
  return useMutation(async (user: IFormDataProfileRequest) => {
    return await api.put(USERS, user);
  });
}

export function useSendContactUpdate() {
  return useMutation(async (data: IUserContactUpdateRequestType) => {
    return await api.post(USER_RECEIVED_SMS, data);
  });
}

export function useSendUpdateCode() {
  return useMutation(async (data: IRequestCheckIfValidCode) => {
    return await api.post(USER_VALIDATE_CODE, data);
  });
}

export function useUpdatePassword() {
  return useMutation(async (data: IUserUpdatePasswordRequest) => {
    return await api.put(CHANGE_PASSWORD, data);
  });
}

export function useFetchSettingsEmailValidation() {
  return useMutation(async (uuid: string) => {
    return await api.get(USER_VALIDATE_EMAIL(uuid));
  });
}

export async function handleSendAvatar(uri: string): Promise<boolean> {
  const token = storage.getString(EnumStorageSignIn.ACCESS);
  const url = mobile.avatarURL;

  try {
    const response = await FileSystem.uploadAsync(url, uri, {
      fieldName: "file",
      httpMethod: "PUT",
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      showToast({
        type: "success",
        message: "Imagem atualizada com sucesso!",
      });
      return true;
    }
  } catch (error: any) {
    showToast({
      type: "error",
      message:
        error?.response?.data.message ||
        "Ops! Algo saiu errado, por favor tente novamente.",
    });
    return false;
  }
  return false;
}
