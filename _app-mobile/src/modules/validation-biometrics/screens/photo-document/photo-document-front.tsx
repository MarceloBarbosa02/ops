import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { NativeEventEmitter, NativeModules, Platform } from 'react-native';

import { Button, ModalScreen, Typography } from '@/shared/components';
import rgFront from '@/shared/assets/images/png/biometrics/rgFront.png';
import cnhFront from '@/shared/assets/images/png/biometrics/cnhFront.png';

import { ButtonFooter } from '../../components';
import { useBiometric } from '../../store/use-biometrics.store';
import { IPhotoDocumentProps } from '../../store/biometrics.interfaces';
import { usePhotoDocument } from './use-photo-document';

import * as S from './photo-document.styles';
import { showToast } from '@/shared/components/toast/use-toast-store';

const PhotoDocumentFrontScreen = () => {
  const { picture } = useBiometric();
  const { isPending, handleSubmit, handleNavigationBackModal } =
    usePhotoDocument();
  const { UnicoCheckModule } = NativeModules;
  const eventEmitter = new NativeEventEmitter(UnicoCheckModule);
  const [documentFront, setDocumentFront] = useState<IPhotoDocumentProps>(
    {} as IPhotoDocumentProps
  );

  const loadCameraSdk = () => {
    setDocumentFront({
      imageBase64: '',
      jwt: '',
      current: picture.front,
      type: picture.front,
    });
    if (picture.front === 'IDENTITY_CARD_FRONT') {
      return UnicoCheckModule.callIdentityFrontCamera();
    } else {
      return UnicoCheckModule.callDocumentFrontCamera();
    }
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
          const photo_front = {
            imageBase64: base64,
            jwt: encrypted,
            current: picture.front,
            type: picture.front,
          };

          setDocumentFront(photo_front);
        }
        return;
      }
      setDocumentFront(e);
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
  }, [documentFront.imageBase64]);

  return (
    <ModalScreen
      title="Biometria"
      handleNavigateRight={handleNavigationBackModal}>
      {documentFront.imageBase64 ? (
        <S.Container>
          <S.WrapperHeader>
            <Typography
              title={`Confirmação de envio`}
              weight="bold"
              size="large"
              align="center"
            />
            <Typography
              title="Certifique-se de que seu documento está legível."
              align="center"
              variant="subtitle"
              size="large"
            />
          </S.WrapperHeader>
          <S.WrapperPreview>
            <S.ImgPreview
              source={{
                uri: `data:image/png;base64,${documentFront.imageBase64}`,
              }}
              resizeMode="cover"
            />
          </S.WrapperPreview>
          <S.WrapperButtonsAccept>
            <Button
              title="Repetir"
              sizeWidth={48}
              colorValue="secondary"
              variant="link"
              size="small"
              onPress={loadCameraSdk}
            />
            <Button
              title="Usar foto"
              sizeWidth={48}
              size="small"
              onPress={() => handleSubmit(documentFront)}
              isLoading={isPending}
            />
          </S.WrapperButtonsAccept>
        </S.Container>
      ) : (
        <>
          {picture.front === 'IDENTITY_CARD_FRONT' && (
            <S.Container>
              <S.WrapperHeader>
                <Typography
                  title={`Posicione a parte da frente do seu RG como no exemplo abaixo`}
                  weight="bold"
                  size="large"
                  align="center"
                />
                <Typography
                  title="Para que possamos verificar sua identidade"
                  align="center"
                  variant="subtitle"
                  size="large"
                />
              </S.WrapperHeader>
              <S.WrapperDefault>
                <S.ImgPreview source={rgFront} resizeMode="contain" />
              </S.WrapperDefault>
              <ButtonFooter
                handleNavigation={loadCameraSdk}
                handleNavigationBack={() => router.dismiss()}
              />
            </S.Container>
          )}

          {picture.front === 'DRIVER_LICENSE_FRONT' && (
            <S.Container>
              <S.WrapperHeader>
                <Typography
                  title={`Posicione a parte da frente do seu\n CNH como no exemplo abaixo`}
                  weight="bold"
                  size="large"
                  align="center"
                />
                <Typography
                  title="Para que possamos verificar sua identidade"
                  align="center"
                  variant="subtitle"
                  size="large"
                />
              </S.WrapperHeader>
              <S.WrapperDefault>
                <S.ImgPreview source={cnhFront} resizeMode="contain" />
              </S.WrapperDefault>
              <ButtonFooter
                handleNavigation={loadCameraSdk}
                handleNavigationBack={() => router.dismiss()}
              />
            </S.Container>
          )}
        </>
      )}
    </ModalScreen>
  );
};

export default PhotoDocumentFrontScreen;
