import React, { useMemo } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import * as S from './validate-biometric.styles';
import { Badge, Button, Typography } from '@/shared/components';
import {
  colorsFlag,
  msgStatusBiometric,
} from '@/modules/profile/mocks/status-biometric';
import { EnumBiometryStatus } from '@/shared/enum';
import { useFetchMe } from '@/shared/queries';
import { useBiometric } from '@/modules/validation-biometrics/store/use-biometrics.store';
import { router } from 'expo-router';
import { TBiometryStatus } from '@/shared/queries/user/sign-in.types';
import { TColor } from '@/shared/components/badge/badge.types';

export const BiometricCard = () => {
  const theme = useTheme();
  const { data: userData } = useFetchMe();
  const { handleChangeNavigation } = useBiometric((store) => {
    return {
      handleChangeNavigation: store.handleChangeNavigation,
    };
  });

  const handleNavigation = () => {
    handleChangeNavigation('profile');
    router.navigate('/(private)/(stack)/biometrics');
  };

  const isDisabled = useMemo(() => {
    return (
      [
        EnumBiometryStatus.APPROVED,
        EnumBiometryStatus.MEDIATION,
        EnumBiometryStatus.SENT_DOCUMENTS,
        EnumBiometryStatus.CAPTURE,
        EnumBiometryStatus.STORED_DOCUMENTS,
      ].filter((item) => item === userData?.biometryStatus)?.length > 0
    );
  }, [userData?.biometryStatus]);

  return (
    <S.Container>
      {userData?.verificationStatus === 'BIOMETRY_APPROVED' ? (
        <S.Wrapper>
          <S.WrapperHeader>
            <Typography
              variant="body"
              weight="bold"
              size="large"
              title="Biometria"
            />
            <Badge label="Verificado" colorValue="success" typeBorder="solid" />
          </S.WrapperHeader>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.WrapperHeader>
            <Typography title="Biometria" variant="body" weight="bold" />
            <Badge
              label={
                msgStatusBiometric[userData?.biometryStatus as TBiometryStatus]
              }
              colorValue={
                colorsFlag[
                  userData?.biometryStatus as TBiometryStatus
                ] as TColor
              }
              typeBorder="solid"
              size="lg"
            />
          </S.WrapperHeader>
          <S.WrapperInfo>
            <S.TitleText>
              <Typography weight="bold" size="small" title="Aviso: " />
              para solicitar um saque, é necessário verificar sua identidade
              aqui.
            </S.TitleText>
          </S.WrapperInfo>
          <Button
            title="Cadastrar Biometria"
            endContent={
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={theme.button.text.primary}
              />
            }
            onPress={handleNavigation}
            disabled={isDisabled}
            size="medium"
          />
        </S.Wrapper>
      )}
    </S.Container>
  );
};
