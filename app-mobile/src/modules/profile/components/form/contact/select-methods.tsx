import { Text, TouchableOpacity, View } from 'react-native';

import { ButtonMethods, Typography } from '@/shared/components';
import { InfoIcon } from '@/shared/assets';
import ChatSMS from '@/shared/assets/images/svg/chat-sms.svg';
import Whatsapp from '@/shared/assets/images/svg/whatsapp.svg';
import Return from '@/shared/assets/images/svg/return.svg';

import { useContact } from './use-contact';

const ContactSelectMethodsCard = () => {
  const { phone, handleBackSteps, handleShowSelectMethods } = useContact();

  return (
    <View className="gap-4">
      <View className="gap-4 bg-gray-50 p-4 rounded-lg">
        <View className="flex-row justify-between">
          <Typography title="Validar telefone" weight="bold" />
          <TouchableOpacity
            className="flex-row items-center gap-1"
            onPress={handleBackSteps}
            activeOpacity={0.8}>
            <Typography
              title="Alterar número"
              weight="bold"
              variant="caption"
              color="primary"
            />
            <Return />
          </TouchableOpacity>
        </View>
        <Text className="font-Satoshi-Regular text-xs">
          Selecione um dos métodos abaixo e enviaremos um código para o número
          de telefone:{' '}
          <Typography title={phone} weight="bold" variant="caption" />
        </Text>

        <ButtonMethods
          title="Whatsapp"
          icon={<Whatsapp />}
          onSelectMethods={handleShowSelectMethods}
        />

        <ButtonMethods
          title="SMS"
          icon={<ChatSMS />}
          onSelectMethods={handleShowSelectMethods}
        />
      </View>

      <View className="gap-4 bg-gray-50 p-4 rounded-lg ">
        <View className="flex-row p-2 gap-4 bg-gray-100 rounded">
          <View className="flex-row items-center">
            <InfoIcon />
          </View>
          <Text className="font-Satoshi-Regular text-xs w-5/6">
            Caso você não tenha mais acesso ao seu telefone atual entre em
            contato com o nosso{' '}
            <Typography
              title="suporte"
              weight="bold"
              color="primary"
              variant="caption"
            />{' '}
            para a alteração.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContactSelectMethodsCard;
