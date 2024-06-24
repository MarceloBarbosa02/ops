import axios, { AxiosError } from 'axios';
import { MMKV } from 'react-native-mmkv';

import { EnumStorageSignIn } from '../enum';
import { handleSignOut } from '../store';

import template from '../../../template.json';

const storage = new MMKV();

type PromiseType = {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
};

const api = axios.create(template.infoBase);

let failedQueued: Array<PromiseType> = [];
let isRefreshing = false;

api.interceptors.response.use(
  (response) => {
    console.log('Response', response);
    return response;
  },
  (requestError: any) => {
    if (requestError.response.status === 401) {
      if (requestError.response?.data?.message === 'Token missing') {
        const token = storage.getString(EnumStorageSignIn.ACCESS);

        if (token) {
          failedQueued.forEach((request) => {
            request.onSuccess(token as string);
          });
        }

        return;
      }

      if (requestError.response?.data?.message === 'Invalid token!') {
        const refresh_token = storage.getString(EnumStorageSignIn.REFRESH);

        if (!refresh_token) {
          handleSignOut();
          return Promise.reject(requestError);
        }

        const originalRequestConfig = requestError.config;

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueued.push({
              onSuccess: (token: string) => {
                originalRequestConfig.headers['Authorization'] =
                  `Bearer ${token}`;
                resolve(api(originalRequestConfig));
              },
              onFailure: (error: AxiosError) => {
                reject(error);
              },
            });
          });
        }

        isRefreshing = true;

        return new Promise(async (resolve, reject) => {
          try {
            const { data } = await api.post('/users/refresh-token', {
              refreshToken: 'refresh_token',
            });

            const { token, refreshToken } = data;

            storage.set(EnumStorageSignIn.ACCESS, token);
            storage.set(EnumStorageSignIn.REFRESH, refreshToken);

            originalRequestConfig.headers = {
              Authorization: `Bearer ${data.token}`,
            };

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            failedQueued.forEach((request) => {
              request.onSuccess(token);
            });

            resolve(api(originalRequestConfig));
          } catch (error: any) {
            failedQueued.forEach((request: any) => request.onFailure(error));

            handleSignOut();
            reject(error);
          } finally {
            isRefreshing = false;
            failedQueued = [];
          }
        });
      }
      handleSignOut();
    }

    if (requestError.response.status === 403) {
      handleSignOut();
    }

    return Promise.reject(requestError);
  }
);

export { api };
