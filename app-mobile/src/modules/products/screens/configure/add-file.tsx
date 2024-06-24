import { ChevronRightIcon, InfoIcon } from '@/shared/assets';
import {
  Button,
  EmptyCards,
  LayoutStackScreen,
  Typography,
} from '@/shared/components';
import { router } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

import AddFile from '@/shared/assets/images/svg/products/add-file.svg';
import { useConfigureProduct } from './use-configure-product';

function AddFileScreen() {
  const { handleSelectFile } = useConfigureProduct();

  return (
    <LayoutStackScreen
      title="Configure um produto autoral"
      startContent={
        <Button
          title="Próxima etapa"
          // onPress={handleNavigationCreateProduct}
          size="medium"
          sizeWidth="sizeFull"
          radius="full"
          endContent={<ChevronRightIcon />}
        />
      }>
      <View className="gap-4 items-center p-4">
        <View className="w-full gap-4 bg-gray-50 p-4 rounded-lg">
          <Typography title="Arquivos" weight="bold" />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleSelectFile}
            className="w-full items-center justify-center border border-base-blue-default rounded-lg p-4 gap-3">
            <View className="p-4 items-center justify-center bg-base-blue-default rounded-full">
              <AddFile />
            </View>
            <View>
              <Typography
                title="Adicione um arquivo do seu dispositivo"
                weight="bold"
                align="center"
              />
              <Typography
                title="Formatos aceitos: JPG, PNG, PDF ou ZIP, não superior a 10 MB"
                variant="caption"
                align="center"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View className="w-full gap-4 bg-gray-50 p-4 rounded-lg">
          <View className="flex-row items-center gap-3 bg-gray-100 p-2 rounded">
            <InfoIcon />
            <Typography
              title="A partir da primeira venda os arquivos adicionados não poderão mais ser excluídos deste produto."
              variant="caption"
              style={{ width: '80%' }}
            />
          </View>
        </View>
      </View>
    </LayoutStackScreen>
  );
}

export default AddFileScreen;
