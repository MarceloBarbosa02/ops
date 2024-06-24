import React, { useEffect, useState } from 'react';
import { NativeEventEmitter, NativeModules, Platform } from 'react-native';
import { router } from 'expo-router';

import { Button, ModalScreen, Typography } from '@/shared/components';
import rgVerse from '@/shared/assets/images/png/biometrics/rgVerse.png';
import cnhVerse from '@/shared/assets/images/png/biometrics/cnhVerse.png';

import { ButtonFooter } from '../../components';
import { useBiometric } from '../../store/use-biometrics.store';
import { IPhotoDocumentProps } from '../../store/biometrics.interfaces';
import { usePhotoDocument } from './use-photo-document';

import * as S from './photo-document.styles';
import { showToast } from '@/shared/components/toast/use-toast-store';

const PhotoDocumentBackScreen = () => {
  const { picture } = useBiometric();
  const { isPending, handleSubmit, handleNavigationBackModal } =
    usePhotoDocument();
  const { UnicoCheckModule } = NativeModules;
  const eventEmitter = new NativeEventEmitter(UnicoCheckModule);
  const [documentBack, setDocumentBack] = useState<IPhotoDocumentProps>(
    {} as IPhotoDocumentProps
  );

  const loadCameraSdk = () => {
    setDocumentBack({
      imageBase64: '',
      jwt: '',
      current: picture.back,
      type: picture.back,
    });
    if (picture.back === 'IDENTITY_CARD_VERSE') {
      return UnicoCheckModule.callIdentityBackCamera();
    } else {
      return UnicoCheckModule.callDocumentBackCamera();
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
            current: picture.back,
            type: picture.back,
          };

          setDocumentBack(photo_front);
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
      {documentBack.imageBase64 ? (
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
                uri: `data:image/png;base64,${documentBack.imageBase64}`,
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
              isLoading={isPending}
              size="small"
              onPress={() => handleSubmit(documentBack)}
            />
          </S.WrapperButtonsAccept>
        </S.Container>
      ) : (
        <>
          {picture.back === 'IDENTITY_CARD_VERSE' && (
            <S.Container>
              <S.WrapperHeader>
                <Typography
                  title={`Agora, posicione o verso do seu RG como no exemplo abaixo`}
                  weight="bold"
                  size="large"
                  align="center"
                />
                <Typography
                  title="Para que possamos continuar a verificar sua identidade"
                  align="center"
                  variant="subtitle"
                  size="large"
                />
              </S.WrapperHeader>
              <S.WrapperDefault>
                <S.ImgPreview source={rgVerse} resizeMode="contain" />
              </S.WrapperDefault>
              <ButtonFooter
                handleNavigation={loadCameraSdk}
                handleNavigationBack={() => router.dismiss()}
              />
            </S.Container>
          )}

          {picture.back === 'DRIVER_LICENSE_VERSE' && (
            <S.Container>
              <S.WrapperHeader>
                <Typography
                  title={`Agora, posicione o verso do seu CNH como no exemplo abaixo`}
                  weight="bold"
                  size="large"
                  align="center"
                />
                <Typography
                  title="Para que possamos continuar a verificar sua identidade"
                  align="center"
                  variant="subtitle"
                  size="large"
                />
              </S.WrapperHeader>
              <S.WrapperDefault>
                <S.ImgPreview source={cnhVerse} resizeMode="contain" />
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

export default PhotoDocumentBackScreen;
