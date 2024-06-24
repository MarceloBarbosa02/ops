import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { EnumStorageSignIn } from '@/shared/enum';
// import { MMKV } from 'react-native-mmkv';
import * as FileSystem from 'expo-file-system';

import template from '../../../../../template.json';
import { useFetchMe } from '@/shared/queries/user';
import { zustandStorage } from '@/shared/utils';

// const storage = new MMKV();

export const useAvatar = () => {
  const { refetch: refetchUser } = useFetchMe();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');

  const handleChangeImage = (img: string) => {
    setImage(img);
  };

  const handlePickImage = async () => {
    setIsLoading(true);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (result?.canceled) {
      showToast({
        type: 'error',
        message: 'Usuário cancelou o acesso.',
      });
    }

    if (result.assets) {
      const uri = result.assets[0].uri;
      const response = await handleSendAvatar(uri);

      if (response) {
        setImage(uri);
        refetchUser();
      }
    }

    setIsLoading(false);
  };

  async function handleSendAvatar(uri: string): Promise<boolean> {
    const token = zustandStorage.getItem(EnumStorageSignIn.ACCESS);
    // const token = storage.getString(EnumStorageSignIn.ACCESS);
    const url = template.mobile.avatar_url;

    try {
      const response = await FileSystem.uploadAsync(url, uri, {
        fieldName: 'file',
        httpMethod: 'PUT',
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        showToast({
          type: 'success',
          message: 'Imagem atualizada com sucesso!',
        });
        return true;
      }
    } catch (error: any) {
      showToast({
        type: 'error',
        message:
          error?.response?.data.message ||
          'Ops! Algo saiu errado, por favor tente novamente.',
      });
      return false;
    }
    return false;
  }

  return {
    image,
    isLoading,
    handlePickImage,
    handleChangeImage,
  };
};
