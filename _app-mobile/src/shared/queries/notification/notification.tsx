import { USER_NOTIFICATION } from '@/shared/constants';
import { api } from '@/shared/services';
import { useMutation } from '@tanstack/react-query';

export function useRequestNotification() {
  return useMutation({
    mutationFn: async (allowNotification: boolean) => {
      return await api.patch(USER_NOTIFICATION, {
        allowNotification,
      });
    },
  });
}
