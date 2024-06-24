import React, { useMemo } from 'react';

import { Button, Typography } from '@/shared/components';
import { TBiometryStatus } from '@/shared/queries/user/sign-in.types';

import { useVerifyIdentity } from './use-verify-identity';

import * as S from './verify-identity.styles';

const VerifyIdentityCard = () => {
  const {
    colorsFlag,
    refused,
    userData,
    pendent,
    isDisabled,
    msgBiometric,
    handleNavigation,
  } = useVerifyIdentity();

  return (
    <S.Wrapper>
      {refused && (
        <S.Title>
          A verificação de identidade foi{' '}
          <Typography
            variant="body"
            weight="bold"
            title={msgBiometric[userData?.biometryStatus as TBiometryStatus]}
            style={{
              color: colorsFlag[userData?.biometryStatus as TBiometryStatus],
            }}
          />
          . Tente novamente para solicitar um saque.
        </S.Title>
      )}

      {pendent && (
        <S.Title>
          A verificação de identidade está{' '}
          <Typography
            weight="bold"
            size="small"
            title={msgBiometric[userData?.biometryStatus as TBiometryStatus]}
            style={{
              color: colorsFlag[userData?.biometryStatus as TBiometryStatus],
            }}
          />
          , realize a biometria e aguarde a aprovação para solicitar um saque.
        </S.Title>
      )}

      {!refused && !pendent && (
        <S.Title>
          A verificação de identidade está{' '}
          <Typography
            variant="body"
            weight="bold"
            size="small"
            title={msgBiometric[userData?.biometryStatus as TBiometryStatus]}
            style={{
              color: colorsFlag[userData?.biometryStatus as TBiometryStatus],
            }}
          />
          , aguarde a aprovação para solicitar um saque.
        </S.Title>
      )}

      <S.WrapperInput>
        <Typography
          variant="subtitle"
          title="Valor"
          colorValue="neutral-regular"
        />
        <Typography
          size="medium"
          colorValue="neutral-regular"
          title="R$ 0,00"
        />
      </S.WrapperInput>
      <Button
        title="Verificar identidade"
        onPress={handleNavigation}
        disabled={isDisabled}
        size="medium"
      />
    </S.Wrapper>
  );
};

export default VerifyIdentityCard;
