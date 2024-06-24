import { router } from 'expo-router';
import { useTheme } from 'styled-components/native';

import { Button, StackScreen, Typography } from '@/shared/components';
import { WarningIcon } from '@/shared';

import { useConfigure } from './use-configure';

import * as S from './configure.styles';

const OutConfigureScreen = () => {
  const theme = useTheme();
  const { handleNavigationOut } = useConfigure();

  return (
    <StackScreen title="Perfil">
      <S.WrapperOut>
        <S.WrapperContent>
          <S.WrapperOutCard>
            <WarningIcon />
            <S.TitleCard>
              Você está prestes a sair da configuração do seu perfil. Esta etapa
              é{' '}
              <Typography
                title="obrigatória"
                weight="bold"
                size="small"
                style={{ color: theme.button.text.secondary }}
              />{' '}
              para começar a vender seus produtos na nossa plataforma e usufruir
              dos nossos benefícios.{' '}
              <Typography
                title="Configure seu perfil."
                weight="bold"
                size="small"
                style={{ color: theme.button.text.secondary }}
              />
            </S.TitleCard>
          </S.WrapperOutCard>
        </S.WrapperContent>
        <S.WrapperFooter>
          <Button
            title="Sair assim mesmo"
            variant="link"
            colorValue="secondary"
            size="small"
            textWeightButton="bold"
            onPress={handleNavigationOut}
          />
          <Button
            title="Configurar perfil"
            size="small"
            textWeightButton="bold"
            onPress={() => router.back()}
          />
        </S.WrapperFooter>
      </S.WrapperOut>
    </StackScreen>
  );
};

export default OutConfigureScreen;
