import { IPhotoDocumentProps } from '@/modules/validation-biometrics/store/biometrics.interfaces';
import { BIOMETRY } from '@/shared/constants';
import { api } from '@/shared/services';
import { useMutation } from '@tanstack/react-query';

export function useFetchDocumentBiometric() {
  return useMutation({
    mutationFn: async (data: Omit<IPhotoDocumentProps, 'current'>) => {
      return await api.post(BIOMETRY, data);
    },
  });
}
