import { ButtonOption, Typography } from '@/shared/components';
import * as S from './phone.styles';
import { InfoIcon, SMSIcon } from '@/shared/assets/components';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

const PhoneCard = ({}) => {
  const theme = useTheme();

  return (
    <S.WrapperCard>
      <S.WrapperCardHeader>
        <Typography title="Escolha um dos métodos a seguir" weight="bold" />
        <S.WrapperTextPhone>
          Enviaremos um código para o seu novo número com final{' '}
          <Typography
            title="1234."
            weight="bold"
            variant="subtitle"
            size="large"
          />
        </S.WrapperTextPhone>
      </S.WrapperCardHeader>
      <S.WrapperPhoneButtons>
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
        />
      </S.WrapperPhoneButtons>
      <S.WrapperCardInfo>
        <InfoIcon />
        <S.WrapperTextPhoneInfo>
          Caso você não tenha mais acesso ao seu e-mail atual entre em contato
          com o nosso{' '}
          <Typography
            title="suporte"
            size="small"
            weight="bold"
            colorValue="primary"
          />{' '}
          para a alteração.
        </S.WrapperTextPhoneInfo>
      </S.WrapperCardInfo>
    </S.WrapperCard>
  );
};

export default PhoneCard;
