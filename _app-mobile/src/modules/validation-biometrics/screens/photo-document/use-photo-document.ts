import { showToast } from '@/shared/components/toast/use-toast-store';
import { IPhotoDocumentProps } from '../../store/biometrics.interfaces';
import { useFetchDocumentBiometric } from '@/shared/queries/biometrics/biometrics';
import { router } from 'expo-router';

export const usePhotoDocument = () => {
  const { mutate, isPending } = useFetchDocumentBiometric();

  const handleSubmit = async (dataUser: IPhotoDocumentProps) => {
    const payload = {
      imageBase64: dataUser.imageBase64,
      jwt: dataUser.jwt,
      type: dataUser.type,
    };

    mutate(payload, {
      onSuccess: (data) => {
        if (data.data.message) {
          showToast({
            type: data.data.status,
            message: data.data.message,
          });
        }
        if (data.data.status === 'success') {
          if (
            dataUser.current === 'IDENTITY_CARD_FRONT' ||
            dataUser.current === 'DRIVER_LICENSE_FRONT'
          ) {
            return router.push('/(private)/(modais)/document-back');
          }
          if (
            dataUser.current === 'IDENTITY_CARD_VERSE' ||
            dataUser.current === 'DRIVER_LICENSE_VERSE'
          ) {
            return router.push('/(private)/(modais)/selfie');
          }
          if (dataUser.current === 'SELFIE') {
            return router.push('/(private)/(modais)/validation-analysis');
          }
        }
      },
      onError(error: any) {
        showToast({
          type: 'error',
          message: error?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
      },
    });
  };

  const handleNavigationBackModal = () => {
    router.dismiss();
  };

  return {
    isPending,
    handleSubmit,
    handleNavigationBackModal,
  };
};
