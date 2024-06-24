import { Input, Select, Typography } from '@/shared/components';

import * as S from './form.styles';
import { useFormContext } from 'react-hook-form';

const EmployeeDataForm = () => {
  const methods = useFormContext();

  return (
    <S.Wrapper>
      <Select
        options={[]}
        control={methods.control}
        name="city"
        label="Negocio atrelado"
        title="Brasil"
      />
      <Typography title="Dados do colaborador" weight="bold" />
      <Input
        control={methods.control}
        name="name"
        label="Nome"
        placeholder=" "
        autoCapitalize="words"
      />
      <Input
        control={methods.control}
        name="email"
        label="E-mail"
        placeholder=" "
        autoCapitalize="words"
      />
      <Select
        options={[]}
        control={methods.control}
        name="function"
        label="Função"
        title="Brasil"
      />
    </S.Wrapper>
  );
};

export default EmployeeDataForm;
