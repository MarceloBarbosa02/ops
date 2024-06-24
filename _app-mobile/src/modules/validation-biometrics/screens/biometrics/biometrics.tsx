import React from 'react';
import { useTheme } from 'styled-components/native';
import { Image, ScrollView, View } from 'react-native';

import {
  Badge,
  BiometricsScreen,
  Button,
  Typography,
} from '@/shared/components';
import imgDocsDark from '@/shared/assets/images/png/biometrics/docs-dark.png';
import imgDocsLight from '@/shared/assets/images/png/biometrics/docs-light.png';
import Wallet from '@/shared/assets/images/svg/wallet.svg';

import { ItemList } from './biometrics.item';
import { useBiometrics } from './use-biometrics';

import * as S from './biometrics.styles';

const InfoBiometricScreen = () => {
  const theme = useTheme();
  const {
    route,
    document,
    handleLinkNavigation,
    handleNavigationBack,
    handleLinkNavigationNext,
  } = useBiometrics();

  return (
    <BiometricsScreen
      title="Biometria"
      handleNavigateRight={handleNavigationBack}>
      <S.Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <S.WrapperContent>
            <View>
              {route === 'finance' ? (
                <S.WrapperHeader>
                  <Wallet />
                  <View style={{ paddingHorizontal: 16, alignItems: 'center' }}>
                    <Typography
                      colorValue="neutral-bold"
                      title={`Para solicitar um saque, é necessário verificar\n sua identidade`}
                      align="center"
                    />
                    <S.WrapperInfo>
                      <Typography title="Comece agora mesmo" align="center" />
                      <Badge label="4 MIN" colorValue="secondary" />
                    </S.WrapperInfo>
                  </View>
                </S.WrapperHeader>
              ) : (
                <S.WrapperHeader>
                  {theme.theme === 'light' ? (
                    <Image source={imgDocsLight} resizeMode="contain" />
                  ) : (
                    <Image source={imgDocsDark} resizeMode="contain" />
                  )}
                  <View style={{ paddingHorizontal: 16 }}>
                    <Typography
                      weight="bold"
                      title={`Prepare-se, vamos verificar\n sua identidade`}
                      align="center"
                    />
                    <S.WrapperInfo>
                      <Typography title="Duração aproximada" align="center" />
                      <Badge label="4 MIN" colorValue="secondary" />
                    </S.WrapperInfo>
                  </View>
                </S.WrapperHeader>
              )}
            </View>
            <S.Items>
              <ItemList title="Disponha de uma identificação que seja válida e emitida pelo governo" />
              <ItemList
                title={`É necessário que o documento pertença ao titular da conta: CPF ${document}`}
              />
              <ItemList title="Certifique-se de estar em um ambiente bem iluminado" />
              <ItemList title="Prepare-se para tirar uma selfie e fotos do seu documento de identificação" />
              <ItemList title="Para evitar erros, certifique-se que a imagem do documento esteja legível" />
            </S.Items>
            <View style={{ width: '100%', paddingHorizontal: 24 }}>
              <Button
                title="Vamos lá"
                colorValue="primary"
                size="small"
                textWeightButton="bold"
                onPress={handleLinkNavigationNext}
              />
              <S.WrapperFooter>
                <S.Description>
                  O áudio e vídeo da sessão podem ser gravados. Caso tenha
                  dúvidas, acesse a
                  <S.BtnLink onPress={handleLinkNavigation}>
                    <Typography
                      title=" Política de Privacidade."
                      variant="subtitle"
                      colorValue="primary"
                      underline
                      size="small"
                    />
                  </S.BtnLink>
                </S.Description>
              </S.WrapperFooter>
            </View>
          </S.WrapperContent>
        </ScrollView>
      </S.Container>
    </BiometricsScreen>
  );
};

export default InfoBiometricScreen;
