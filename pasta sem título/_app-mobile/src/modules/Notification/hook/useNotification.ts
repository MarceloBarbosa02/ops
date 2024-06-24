import { useMutation } from "@tanstack/react-query";
import { NOTIFICATION } from "@shared/constants";
import { api } from "@shared/services/api";

export function useSendNotification() {
  return useMutation(async (allowNotification: boolean) => {
    return await api.patch(NOTIFICATION, {
      allowNotification,
    });
  });
}
