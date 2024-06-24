import { useFormContext } from 'react-hook-form';
import { View } from 'react-native';

import {
  EmptyCards,
  InputControl,
  SelectControl,
  Typography,
} from '@/shared/components';

const ProfileIdentifyCard = () => {
  const methods = useFormContext();

  return (
    <EmptyCards title="Identificação">
      <InputControl
        control={methods.control}
        name="name"
        label="Nome"
        placeholder="Nome completo"
        autoCapitalize="words"
      />
      <View className="flex-row gap-4 w-full">
        <View style={{ width: '48%' }}>
          <SelectControl
            options={[]}
            control={methods.control}
            name="nationality"
            label="Nacionalidade"
            type="select"
          />
        </View>
        <View style={{ width: '48%' }}>
          <SelectControl
            options={[]}
            control={methods.control}
            name="nationality"
            label="Idioma"
            type="select"
          />
        </View>
      </View>
      <InputControl
        control={methods.control}
        name="document"
        label="CPF"
        placeholder="CPF*"
        keyboardType="numeric"
        isRequired
      />
      <InputControl
        control={methods.control}
        name="birthDate"
        label="Data de nascimento"
        placeholder="Data de nascimento*"
        isRequired
      />
      <Typography title="Documento alternativo" weight="bold" />
      <View className="flex-row gap-4">
        <View style={{ width: '30%' }}>
          <SelectControl
            options={[]}
            control={methods.control}
            name="additionalDocumentType"
            label="Tipo"
            type="select"
          />
        </View>
        <View style={{ width: '65%' }}>
          <InputControl
            control={methods.control}
            name="birthDate"
            label="Número"
            placeholder="Número*"
          />
        </View>
      </View>
      <InputControl
        control={methods.control}
        name="birthDate"
        label="Data de emissão"
        placeholder="Data de emissão*"
      />
    </EmptyCards>
  );
};

export default ProfileIdentifyCard;
