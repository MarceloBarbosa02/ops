import { Button, PinCode, StackScreen, Typography } from '@/shared/components';
import * as S from './security.styles';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useSecurity } from './use-security';
import { router } from 'expo-router';

const SecurityScreen = () => {
  const theme = useTheme();
  const { handleNavigationRedefine } = useSecurity();

  return (
    <StackScreen
      title="Segurança"
      handleNavigateLeft={() => router.push('/(private)/(tabs)/plus')}>
      <S.Wrapper>
        <S.WrapperCard>
          <Typography title="Senha" weight="bold" />
          <S.WrapperTextCard>
            Ao redefinir sua <Typography title="senha" weight="bold" />, você
            sairá de todas as sessões da Kirvano ativas em outros dispositivos.
          </S.WrapperTextCard>
          <Button
            title="Redefinir senha"
            size="medium"
            textWeightButton="bold"
            endContent={
              <Entypo
                name="chevron-small-right"
                size={24}
                color={theme.button.text.primary}
              />
            }
            onPress={handleNavigationRedefine}
          />
        </S.WrapperCard>
      </S.Wrapper>
    </StackScreen>
  );
};

export default SecurityScreen;
