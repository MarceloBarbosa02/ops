import { showToast } from '@/shared/components/toast/use-toast-store';
import { router } from 'expo-router';
import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';

export function useConfigureProduct() {
  const [option, setOption] = useState<number>(0);

  const handleNavigationCreateProduct = () => {
    if (option === 0) {
      return showToast({
        type: 'info',
        message: 'Selecione uma opção para prosseguir',
      });
    }

    router.push('/(private)/(stack)/(configure)/config-add-files');
  };

  const handleSelectFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({ multiple: true });
    console.log(result);
  };

  return {
    option,
    setOption,
    handleSelectFile,
    handleNavigationCreateProduct,
  };
}
