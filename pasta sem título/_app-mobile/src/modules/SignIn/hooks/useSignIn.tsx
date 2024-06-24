import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/services/api";
import { USER_ME } from "../../../shared/constants";
import { AxiosResponse } from "axios";
import { MMKV } from "react-native-mmkv";
import {
  EnumStorageSignIn,
  IUserData,
  IUserDataResponse,
  IUserMeDataResponse,
} from "../../../shared/types";

const storage = new MMKV();

export async function fetchUserData(): Promise<IUserMeDataResponse> {
  const { data } = await api.get(USER_ME);
  return data;
}

export async function fetchSigIn(
  form: IUserData
): Promise<AxiosResponse<IUserDataResponse>> {
  const resp = api.post("/users/login", form);
  return resp;
}

export function useFetchMe() {
  const _token = storage.getString(EnumStorageSignIn.ACCESS);

  return useQuery(["/users", "/me"], fetchUserData, {
    enabled: !!_token,
    staleTime: Infinity,
  });
}

export function useFetchLogin() {
  return useMutation((data: IUserData) => {
    return fetchSigIn(data);
  });
}

export function useMutationUser() {
  return useMutation(() => {
    return fetchUserData();
  });
}
