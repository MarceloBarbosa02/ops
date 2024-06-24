import React from 'react';
import { useTheme } from 'styled-components/native';
import { ScrollView, View } from 'react-native';

import imgDocsDark from '@/shared/assets/images/png/biometrics/docs-dark.png';
import imgDocsLight from '@/shared/assets/images/png/biometrics/docs-light.png';

import * as S from './type-documents.styles';
import { ModalScreen, Radio, Typography } from '@/shared/components';
import { useBiometric } from '../../store/use-biometrics.store';
import { Image } from 'react-native';
import { ButtonFooter } from '../../components';
import { router } from 'expo-router';
import { TTypeDocumentProps } from '../../store/biometrics.types';

const TypeDocumentScreen = () => {
  const theme = useTheme();
  const { picture, handleTypePicture } = useBiometric();

  const buttons = [
    {
      id: 'IDENTITY_CARD_FRONT',
      title: 'Carteira de identidade',
    },
    {
      id: 'DRIVER_LICENSE_FRONT',
      title: 'Carteira de habilitação',
    },
  ];

  const handleSelectOption = (id: TTypeDocumentProps) => {
    if (id === 'IDENTITY_CARD_FRONT') {
      handleTypePicture({
        front: 'IDENTITY_CARD_FRONT',
        back: 'IDENTITY_CARD_VERSE',
      });
    } else {
      handleTypePicture({
        front: 'DRIVER_LICENSE_FRONT',
        back: 'DRIVER_LICENSE_VERSE',
      });
    }
  };

  return (
    <ModalScreen title="Biometria">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <S.WrapperContent>
          <S.WrapperInfo>
            {theme.theme === 'light' ? (
              <Image source={imgDocsLight} resizeMode="contain" />
            ) : (
              <Image source={imgDocsDark} resizeMode="contain" />
            )}
            <View style={{ paddingHorizontal: 24, gap: 8 }}>
              <Typography
                weight="bold"
                align="center"
                title="Tipo de documento para análise"
              />
              <Typography
                variant="subtitle"
                align="center"
                size="large"
                colorValue="neutral-medium"
                title="Selecione abaixo o tipo de documento que será enviado na etapa seguinte."
              />
            </View>
            <S.WrapperButtons>
              {buttons.map((item) => (
                <S.WrapperButton
                  key={item.title}
                  onPress={() =>
                    handleSelectOption(item.id as TTypeDocumentProps)
                  }>
                  <Radio
                    select={item.id === picture.front}
                    title={item.title}
                    sizeWidth="100%"
                  />
                </S.WrapperButton>
              ))}
            </S.WrapperButtons>
          </S.WrapperInfo>
          <ButtonFooter
            handleNavigation={() =>
              router.push('/(private)/(modais)/document-front')
            }
            handleNavigationBack={() => router.back()}
          />
        </S.WrapperContent>
      </ScrollView>
    </ModalScreen>
  );
};

export default TypeDocumentScreen;
