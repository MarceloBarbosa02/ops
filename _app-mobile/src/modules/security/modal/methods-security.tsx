import { useTheme } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { ButtonOption, ModalScreen, Typography } from '@/shared/components';
import { EmailIcon, InfoIcon, SMSIcon, WhatsappIcon } from '@/shared';

import { useSecurity } from '../screens/use-security';

import * as S from '../screens/security.styles';

const MethodsSecurityScreen = () => {
  const theme = useTheme();
  const { handleNavigationMethod, handleNavigationBackModal } = useSecurity();

  return (
    <ModalScreen
      title="Esqueceu a senha"
      handleNavigateRight={handleNavigationBackModal}>
      <S.Wrapper>
        <S.WrapperCard>
          <S.WrapperCardHeader>
            <Typography title="Escolha um dos métodos a seguir" weight="bold" />
            <Typography
              title="Enviarmos um código e prosseguirmos com a recuperação da sua senha antiga."
              size="large"
              variant="subtitle"
              colorValue="neutral-medium"
            />
          </S.WrapperCardHeader>
          <ButtonOption
            title="E-mail"
            startContent={<EmailIcon />}
            endContent={
              <Entypo
                name="chevron-small-right"
                size={24}
                color={theme.blue[600]}
              />
            }
            onPress={() => handleNavigationMethod('EMAIL', 'EMAIL')}
          />
          {/* <ButtonOption
            title="Whatsapp"
            startContent={<WhatsappIcon />}
            endContent={
              <Entypo
                name="chevron-small-right"
                size={24}
                color={theme.blue[600]}
              />
            }
          /> */}
          <ButtonOption
            title="SMS"
            startContent={<SMSIcon />}
            endContent={
              <Entypo
                name="chevron-small-right"
                size={24}
                color={theme.blue[600]}
              />
            }
            onPress={() => handleNavigationMethod('PHONE', 'SMS')}
          />
          <S.WrapperCardInfo>
            <InfoIcon />
            <S.WrapperTextGenerics>
              Caso você não tenha mais acesso ao seu e-mail atual entre em
              contato com o nosso{' '}
              <Typography title="suporte" weight="bold" colorValue="primary" />{' '}
              para a alteração.
            </S.WrapperTextGenerics>
          </S.WrapperCardInfo>
        </S.WrapperCard>
      </S.Wrapper>
    </ModalScreen>
  );
};

export default MethodsSecurityScreen;
