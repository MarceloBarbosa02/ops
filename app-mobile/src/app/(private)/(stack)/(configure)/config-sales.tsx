import { router } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

import { ChevronRightIcon } from '@/shared/assets';
import {
  Button,
  EmptyCards,
  LayoutStackScreen,
  Radio,
} from '@/shared/components';
import { useState } from 'react';
import { showToast } from '@/shared/components/toast/use-toast-store';

export default function ConfigureSales() {
  const [option, setOption] = useState<'autoral' | 'existing' | ''>('');

  const handleNavigationConfig = () => {
    if (option === '') {
      return showToast({
        type: 'info',
        message: 'Selecione uma opção para prosseguir',
      });
    }
    if (option === 'autoral') {
      router.push('/(private)/(stack)/(configure)/config-product');
    }
    if (option === 'existing') {
      router.push('/(private)/(stack)/marketplace');
    }
  };

  return (
    <LayoutStackScreen
      title="Configure sua primeira venda"
      startContent={
        <Button
          title="Cancelar"
          onPress={() => router.back()}
          colorValue="whiteBlack"
          size="medium"
          radius="full"
          sizeWidth="size50"
        />
      }
      endContent={
        <Button
          title="Avançar"
          onPress={handleNavigationConfig}
          size="medium"
          sizeWidth="size50"
          radius="full"
          endContent={<ChevronRightIcon />}
        />
      }>
      <View className="flex-1 gap-4 p-4">
        <EmptyCards title="Qual produto você pretende vender?">
          <TouchableOpacity
            onPress={() => setOption('existing')}
            activeOpacity={0.8}
            className="w-full border-[1px] border-gray-300 py-2 px-3 rounded">
            <Radio
              colorValue="primary"
              select={option === 'existing'}
              title="Quero me afiliar a um produto existente"
              description="Encontre produtos no Marketplace e se afilie."
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOption('autoral')}
            activeOpacity={0.8}
            className="w-full border-[1px] border-gray-300 py-2 px-3 rounded">
            <Radio
              colorValue="primary"
              select={option === 'autoral'}
              title="Quero vender um produto autoral"
              description="Adicione um produto e comece a vender."
            />
          </TouchableOpacity>
        </EmptyCards>
      </View>
    </LayoutStackScreen>
  );
}
