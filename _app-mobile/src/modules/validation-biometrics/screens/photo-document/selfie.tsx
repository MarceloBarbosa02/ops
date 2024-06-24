import React, { useEffect, useState } from 'react';
import {
  Image,
  NativeEventEmitter,
  NativeModules,
  Platform,
} from 'react-native';

import selfie from '@/shared/assets/images/png/biometrics/selfie.png';
import { ModalScreen, Typography } from '@/shared/components';
import imgDocsDark from '@/shared/assets/images/png/biometrics/docs-dark.png';
import imgDocsLight from '@/shared/assets/images/png/biometrics/docs-light.png';

import { ItemList } from '../biometrics/biometrics.item';
import { ButtonFooter } from '../../components';
import { useBiometric } from '../../store/use-biometrics.store';
import { usePhotoDocument } from './use-photo-document';
import { IPhotoDocumentProps } from '../../store/biometrics.interfaces';

import * as S from './photo-document.styles';
import { useTheme } from 'styled-components/native';
import { router } from 'expo-router';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { TTypeDocumentProps } from '../../store/biometrics.types';

const SelfieScreen = () => {
  const theme = useTheme();
  const { picture } = useBiometric();
  const { isPending, handleSubmit, handleNavigationBackModal } =
    usePhotoDocument();
  const { UnicoCheckModule } = NativeModules;
  const eventEmitter = new NativeEventEmitter(UnicoCheckModule);
  const [documentBack, setDocumentBack] = useState<IPhotoDocumentProps>(
    {} as IPhotoDocumentProps
  );

  const loadCameraSdk = () => {
    return UnicoCheckModule.callLivenessCamera();
  };

  useEffect(() => {
    let base64 = '';
    let encrypted = '';

    eventEmitter.addListener('onSuccess', (e: any) => {
      if (Platform.OS === 'ios') {
        if (e.objResult.charAt(20) !== '.') {
          base64 = e.objResult;
        } else {
          encrypted = e.objResult;
        }
        if (base64 !== '' && encrypted !== '') {
          const photoSelfie = {
            imageBase64: base64,
            jwt: encrypted,
            current: 'SELFIE' as TTypeDocumentProps,
            type: 'SELFIE' as TTypeDocumentProps,
          };

          handleSubmit(photoSelfie);
        }
        return;
      }
      setDocumentBack(e);
    });

    eventEmitter.addListener('onError', () => {
      showToast({
        type: 'error',
        message: 'Ops! Algo deu errado. Tente novamente mais tarde.',
      });
    });

    return () => {
      eventEmitter.removeAllListeners('onError');
      eventEmitter.removeAllListeners('onSuccess');
    };
  }, [documentBack.imageBase64]);

  return (
    <ModalScreen
      title="Biometria"
      handleNavigateRight={handleNavigationBackModal}>
      {isPending ? (
        <S.Container>
          <S.WrapperContent>
            <S.WrapperHeader>
              {theme.theme === 'light' ? (
                <Image source={imgDocsLight} resizeMode="contain" />
              ) : (
                <Image source={imgDocsDark} resizeMode="contain" />
              )}
            </S.WrapperHeader>
            <Typography
              title="Aguarde o carregamento da validação..."
              align="center"
            />
            <S.Items>
              <ItemList title="Foto processadas" />
              <ItemList title="Qualidade da imagem processada" />
              <ItemList title="Documento inspecionado" />
              <ItemList title="Biometria verificada" />
              <ItemList title="Finalizando a decisão" isLoading={true} />
            </S.Items>
          </S.WrapperContent>
        </S.Container>
      ) : (
        <S.Container>
          <S.WrapperContent>
            <S.WrapperHeader>
              <Image source={selfie} resizeMode="contain" />
              <Typography
                title="Prepare-se para tirar uma selfie"
                size="large"
                weight="bold"
              />
              <Typography title="Esta é a última etapa" size="small" />
            </S.WrapperHeader>
            <S.Items>
              <ItemList title="Certifique-se de estar em um ambiente bem iluminado" />
              <ItemList title="Caso utilize óculos, os olhos devem estar totalmente visíveis e a armação não deve ser chamativa ou cobri-los " />
              <ItemList title="Não utilize boné" />
            </S.Items>
          </S.WrapperContent>
          <ButtonFooter
            handleNavigation={loadCameraSdk}
            handleNavigationBack={() => router.dismiss()}
          />
        </S.Container>
      )}
    </ModalScreen>
  );
};

export default SelfieScreen;
