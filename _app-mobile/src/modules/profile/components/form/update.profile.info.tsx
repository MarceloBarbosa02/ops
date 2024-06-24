import { CheckboxControl } from '@/shared/components';
import * as S from './form.styles';
import { useFormContext } from 'react-hook-form';

const UpdateProfileCardsInfo = () => {
  const methods = useFormContext();

  return (
    <S.WrapperCard>
      <S.WrapperInfo>
        <CheckboxControl
          control={methods.control}
          errorMessage={
            methods.formState.errors?.acceptTerms?.message as string
          }
          name="acceptTerms"
          label={`Reconheço que as informações são verdadeiras e futuramente para solicitar o meu primeiro saque, será necessário verificar minha  identidade por biometria pelo aplicativo Kirvano.`}
        />
      </S.WrapperInfo>
    </S.WrapperCard>
  );
};

export default UpdateProfileCardsInfo;
