import { Select, Switch, Typography } from '@/shared/components';
import * as S from './form.styles';
import { useFormContext } from 'react-hook-form';

const AccessStatusForm = () => {
  const methods = useFormContext();

  return (
    <S.Wrapper>
      <Typography title="Status de acesso" weight="bold" />
      <Switch title="Ativo" />
      <Typography title="Permissões" weight="bold" />
      <Select
        options={[]}
        control={methods.control}
        name="city"
        label="Visualização de produtos"
        title="Brasil"
      />
      <Switch title="Ativo" />
    </S.Wrapper>
  );
};

export default AccessStatusForm;
