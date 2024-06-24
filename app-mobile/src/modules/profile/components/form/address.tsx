import { useFormContext } from 'react-hook-form';
import { View } from 'react-native';

import {
  CheckboxControl,
  EmptyCards,
  InputControl,
  SelectControl,
} from '@/shared/components';
import { colors } from '@/shared/theme';

const ProfileAddressCard = () => {
  const methods = useFormContext();

  return (
    <View className="mb-28">
      <EmptyCards title="Endereço">
        <View className="flex-row gap-4">
          <View style={{ width: '48%' }}>
            <SelectControl
              options={[]}
              control={methods.control}
              name="additionalDocumentType"
              label="País"
              type="select"
            />
          </View>
          <View style={{ width: '48%' }}>
            <InputControl
              control={methods.control}
              name="zipCode"
              label="CEP*"
              placeholder="CEP*"
            />
          </View>
        </View>
        <InputControl
          control={methods.control}
          name="street"
          label="Endereço"
          placeholder="Endereço*"
          keyboardType="numeric"
          isRequired
        />
        <View className="flex-row gap-4">
          <View style={{ width: '48%' }}>
            <InputControl
              control={methods.control}
              name="number"
              label="Número"
              placeholder="Número*"
              isRequired
            />
          </View>
          <View style={{ width: '48%' }}>
            <InputControl
              control={methods.control}
              name="district"
              label="Bairro"
              placeholder="Bairro*"
              isRequired
            />
          </View>
        </View>

        <InputControl
          control={methods.control}
          name="complement"
          label="Complemento"
          placeholder="Complemento (opcional)"
          isRequired
        />

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            padding: 16,
            borderWidth: 1,
            borderRadius: 8,
            borderStyle: 'dashed',
            borderColor: colors.gray[400],
          }}>
          <CheckboxControl
            control={methods.control}
            errorMessage={
              methods.formState.errors?.isUpdated?.message as string
            }
            name="isUpdated"
            label={`Reconheço que as informações são verdadeiras e futuramente para solicitar o meu primeiro saque, será necessário verificar minha  identidade por biometria pelo aplicativo Kirvano.`}
          />
        </View>
      </EmptyCards>
    </View>
  );
};

export default ProfileAddressCard;
