import { useFormContext } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

import { PinCode, Typography } from '@/shared/components';
import Return from '@/shared/assets/images/svg/return.svg';

import { useContact } from './use-contact';

const ContactCodeCard = () => {
  const methods = useFormContext();
  const { phone, handleBackSteps } = useContact();

  return (
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
        Insira o código enviado por{' '}
        <Typography title="SMS" weight="bold" variant="caption" /> para o número
        de telefone:
        <Typography title={phone} weight="bold" variant="caption" />
      </Text>
      <PinCode control={methods.control} name="pin" />
    </View>
  );
};

export default ContactCodeCard;
