import { useFormContext } from 'react-hook-form';

import { EmptyCards, InputControl, Typography } from '@/shared/components';

import { useContact } from './use-contact';

const ContactPhoneCard = () => {
  const methods = useFormContext();
  const { maskCustom } = useContact();

  return (
    <EmptyCards title="Validar telefone">
      <Typography title="Mantenha ou altere o telefone informado no seu cadastro" />
      <InputControl
        name="phone"
        type="custom"
        options={{ mask: maskCustom }}
        labelPlacement="phone"
        placeholder={maskCustom.replace(/9/g, '0')}
        maxLength={maskCustom.length}
        control={methods.control}
        errorMessage={methods.formState.errors.phone?.message as string}
        keyboardType="phone-pad"
      />
    </EmptyCards>
  );
};

export default ContactPhoneCard;
