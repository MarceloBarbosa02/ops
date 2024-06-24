import {
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useAuthStore } from '../store/auth';
import checkVersion from 'react-native-store-version';
import { getVersion } from 'react-native-device-info';
import { AppContextProps, CheckVersionResponse } from './context.types';
import { ActionSheet, Button, Typography } from '../components';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Linking, Platform, View } from 'react-native';

export const ModalsContext = createContext({
  handleSetContentModal: () => {},
  handleSetThanksYourTimeModal: () => {},
});

import * as S from './context.styles';

const ModalsProvider = ({ children }: AppContextProps) => {
  const refActionSheet = useRef<BottomSheetModal>(null);
  const refActionSheetThanksYourTime = useRef<BottomSheetModal>(null);
  const [title, setTitle] = useState('');

  const handleSetContentModal = () => {
    setTitle('Parabéns');
    refActionSheet.current?.present();
  };

  const handleSetThanksYourTimeModal = () => {
    setTitle('Agradecemos pelo seu tempo');
    refActionSheetThanksYourTime.current?.present();
  };

  const congratulations = useMemo(() => {
    return (
      <>
        <S.WrapperInfoModal>
          <Typography
            title="Sua conta está configurada e você já pode começar a vender na nossa plataforma."
            colorValue="neutral-regular"
          />
          <Typography
            title="Obrigado e  boas vendas."
            size="small"
            weight="bold"
          />
        </S.WrapperInfoModal>
        <S.WrapperButton>
          <Button
            title="Ok, entendi"
            size="small"
            colorValue="success"
            onPress={() => refActionSheet.current?.dismiss()}
          />
        </S.WrapperButton>
      </>
    );
  }, []);

  const thanksYourTime = useMemo(() => {
    return (
      <>
        <S.WrapperInfoModal>
          <S.Title>
            Nossa{' '}
            <Typography title="equipe de sucesso" size="small" weight="bold" />{' '}
            ao cliente
            <Typography
              title="entrará em contato"
              size="small"
              weight="bold"
            />{' '}
            com você para te auxiliar a transferência do seu produto para
            Kirvano.
          </S.Title>
        </S.WrapperInfoModal>
        <S.WrapperButton>
          <Button
            title="Ok, entendi"
            size="small"
            colorValue="success"
            onPress={() => refActionSheetThanksYourTime.current?.dismiss()}
          />
        </S.WrapperButton>
      </>
    );
  }, []);

  return (
    <ModalsContext.Provider
      value={{ handleSetContentModal, handleSetThanksYourTimeModal }}>
      {children}
      {title === 'Parabéns' && (
        <ActionSheet
          bottomSheetRef={refActionSheet}
          indexOpen={1}
          title={title}>
          {congratulations}
        </ActionSheet>
      )}
      {title === 'Agradecemos pelo seu tempo' && (
        <ActionSheet
          bottomSheetRef={refActionSheetThanksYourTime}
          indexOpen={1}
          title={title}>
          {thanksYourTime}
        </ActionSheet>
      )}
    </ModalsContext.Provider>
  );
};

export { ModalsProvider };
