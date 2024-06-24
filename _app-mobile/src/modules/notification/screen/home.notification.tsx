import { Checkbox, StackScreen, Typography } from '@/shared/components';
import * as S from './home.notification.styles';
import { useNotification } from './use-notification';
import { View } from 'react-native';

const NotificationScreen = () => {
  const { methods } = useNotification();

  return (
    <StackScreen title="Notificações">
      <S.Wrapper>
        {/* <View>
          <Typography title="Vendas" weight="bold" />
          <S.WrapperOptions>
            <Checkbox
              control={methods.control}
              name=""
              label="Cartão aprovado"
            />
            <Checkbox control={methods.control} name="" label="PIX aprovado" />
            <Checkbox control={methods.control} name="" label="Boleto gerado" />
            <Checkbox control={methods.control} name="" label="E-wallets" />
          </S.WrapperOptions>
        </View>

        <View>
          <Typography title="Sistema" weight="bold" />
          <S.WrapperOptions>
            <Checkbox control={methods.control} name="" label="Saques" />
            <Checkbox control={methods.control} name="" label="Acessos" />
            <Checkbox
              control={methods.control}
              name=""
              label="Alteração de dados"
            />
          </S.WrapperOptions>
        </View> */}
      </S.Wrapper>
    </StackScreen>
  );
};

export default NotificationScreen;
