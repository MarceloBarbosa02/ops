import { ChevronRightIcon } from '@/shared/assets';
import {
  Button,
  EmptyCards,
  LayoutStackScreen,
  Typography,
} from '@/shared/components';
import { router } from 'expo-router';
import { View } from 'react-native';
import { ButtonOption } from '../../components';
import { typeProductMock } from '../../mocks/type-product';
import { useState } from 'react';
import { useConfigureProduct } from './use-configure-product';

function ProductAutoralConfigScreen() {
  const { handleNavigationCreateProduct, option, setOption } =
    useConfigureProduct();

  return (
    <LayoutStackScreen
      title="Configure um produto autoral"
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
          onPress={handleNavigationCreateProduct}
          size="medium"
          sizeWidth="size50"
          radius="full"
          endContent={<ChevronRightIcon />}
        />
      }>
      <View className="gap-4 items-center p-4">
        <EmptyCards title="Escolha um tipo de produto para vender">
          <Typography
            title="Não se preocupe, após selecionar o tipo de produto nós iremos te ajudar com um passo a passo nas configurações."
            variant="caption"
          />
          {typeProductMock.map((item) => (
            <ButtonOption
              key={item.id}
              description={item.description}
              title={item.title}
              icon={item.icon}
              isSelected={option === item.id}
              onPress={() => setOption(item.id)}
            />
          ))}
        </EmptyCards>
      </View>
    </LayoutStackScreen>
  );
}

export default ProductAutoralConfigScreen;
