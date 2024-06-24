import React from 'react';

import { IconLogo } from '@/shared';
import { AuthScreen, Button, Typography } from '@/shared/components';

import { useAccessNotPermitted } from './use-access-not-permitted';

import * as S from './access-not-permitted.styles';

const AccessNotPermittedScreen = () => {
  const { handleNavigationBack, handleNavigation } = useAccessNotPermitted();

  return (
    <AuthScreen>
      <S.Wrapper>
        <S.Container>
          <S.WrapperLogo>
            <IconLogo />
          </S.WrapperLogo>
          <S.WrapperInfo>
            <Typography
              title="Acesse a Kirvano em um computador"
              align="center"
              weight="bold"
            />
            <Typography
              title="O app é exclusivo para vendedores. Visualize todas as
              funcionalidades com melhor desempenho."
              align="center"
            />
          </S.WrapperInfo>
          <S.WrapperButton>
            <Button
              title="Prosseguir"
              colorValue="primary"
              onPress={handleNavigation}
              size="medium"
            />
            <Button
              title="Cancelar"
              variant="link"
              size="medium"
              onPress={handleNavigationBack}
            />
          </S.WrapperButton>
        </S.Container>
      </S.Wrapper>
    </AuthScreen>
  );
};

export default AccessNotPermittedScreen;
