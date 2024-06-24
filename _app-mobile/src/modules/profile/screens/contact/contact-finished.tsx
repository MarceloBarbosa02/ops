import { Button, ModalScreen, Typography } from '@/shared/components';
import { InfoIcon, format } from '@/shared';

import { useContact } from './use-contact';

import * as S from './contact.styles';

const ContactFinishedModalScreen = () => {
  const { type, userData, countdown, handleNavigationInitial } = useContact();

  return (
    <ModalScreen
      title={type === 'PHONE' ? 'Atualizar telefone' : 'Atualizar e-mail'}
      handleNavigateRight={handleNavigationInitial}>
      <S.Wrapper>
        <S.WrapperCard>
          {type === 'PHONE' ? (
            <S.WrapperCardHeader>
              <Typography
                title="Seu telefone está prestes a ser alterado"
                weight="bold"
              />
              <S.WrapperTextPhone>
                Para terminar esta validação, enviamos um link com validade de{' '}
                <Typography
                  title={countdown}
                  weight="bold"
                  variant="subtitle"
                  size="large"
                />{' '}
                para seu e-mail atual.
              </S.WrapperTextPhone>
            </S.WrapperCardHeader>
          ) : (
            <S.WrapperCardHeader>
              <Typography
                title="Seu e-mail está prestes a ser alterado"
                weight="bold"
              />
              <S.WrapperTextPhone>
                Enviamos um código para o seu novo e-mail:{' '}
                <Typography
                  title={format.obscureEmail(`${userData?.email}`, 1)}
                  weight="bold"
                  variant="subtitle"
                  size="large"
                />
              </S.WrapperTextPhone>
            </S.WrapperCardHeader>
          )}
          <S.WrapperForm>
            <S.WrapperCardInfo>
              <InfoIcon />
              <S.WrapperTextPhoneInfo>
                Caso não encontre na sua caixa de entrada, verifique sua caixa
                de spam ou lixo eletrônico. Para sua segurança, não compartilhe
                com terceiros.
              </S.WrapperTextPhoneInfo>
            </S.WrapperCardInfo>
          </S.WrapperForm>
        </S.WrapperCard>
        <S.WrapperPhoneButtonFinished>
          <Button
            title="Você já pode voltar para o seu perfil"
            variant="link"
            onPress={handleNavigationInitial}
          />
        </S.WrapperPhoneButtonFinished>
      </S.Wrapper>
    </ModalScreen>
  );
};

export default ContactFinishedModalScreen;
