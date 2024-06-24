import { router } from 'expo-router';
import { useTheme } from 'styled-components/native';

import { Button, StackScreen, Typography } from '@/shared/components';
import { WarningIcon } from '@/shared';
import { useBusiness } from './use-business';

import * as S from './business.styles';

const OutConfigureBusinessScreen = () => {
  const theme = useTheme();
  const { handleNavigationOut } = useBusiness();

  return (
    <StackScreen
      title="Pessoa jurídica"
      handleNavigateLeft={() => router.back()}>
      <S.WrapperOut>
        <S.WrapperContent>
          <S.WrapperOutCard>
            <WarningIcon />
            <S.TitleCard>
              Você está prestes a sair sem adicionar um negócio. Esta etapa é{' '}
              <Typography
                title="obrigatória"
                weight="bold"
                size="small"
                style={{ color: theme.button.text.secondary }}
              />{' '}
              para começar a vender seus produtos na nossa plataforma e usufruir
              dos nossos benefícios.
              <Typography
                title="Adicione um negócio."
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

export default OutConfigureBusinessScreen;
