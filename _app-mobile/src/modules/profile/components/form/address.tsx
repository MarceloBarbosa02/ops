import { Input, Select, Typography } from '@/shared/components';

import InputCEP from '@/shared/components/input/input.cep';

import { countryOptions, statesOptions } from '../../mocks/form';
import { useFormData } from './use-form-data';

import * as S from './form.styles';

const ProfileAddressCard = () => {
  const {
    methods,
    isFocusedOut,
    isCityLength,
    isStreetLength,
    isDistrictLength,
    isLoadingCEP,
    isShowFormAddress,
    handleInputFocus,
    handleInputBlur,
  } = useFormData();

  return (
    <S.Wrapper>
      <S.WrapperHeaderTitle>
        <Typography title="Endereço" size="large" weight="bold" />
      </S.WrapperHeaderTitle>
      <S.WrapperItemHorizontal>
        <Select
          control={methods.control}
          name="country"
          options={countryOptions}
          label="País"
          sizeWidth={46}
          errorMessage={methods.formState.errors.country?.message as string}
        />
        <InputCEP
          control={methods.control}
          name="zipCode"
          sizeWidth={50}
          keyboardType="numeric"
          maxLength={9}
          label="CEP"
          isFocusedOut={isFocusedOut}
          isLoading={isLoadingCEP}
          errorMessage={methods.formState.errors.zipCode?.message as string}
          onFocusedCEP={handleInputFocus}
          onBlurCEP={handleInputBlur}
        />
      </S.WrapperItemHorizontal>
      {isShowFormAddress && (
        <>
          <S.WrapperItemHorizontal>
            <Input
              control={methods.control}
              name="street"
              label="Endereço"
              placeholder="Rua, Avenida, Alameda"
              sizeWidth={70}
              errorMessage={methods.formState.errors.street?.message as string}
              multiline={isStreetLength}
            />
            <Input
              control={methods.control}
              name="number"
              label="Número"
              placeholder="10000"
              sizeWidth={26}
              errorMessage={methods.formState.errors.number?.message as string}
            />
          </S.WrapperItemHorizontal>
          <S.WrapperItemHorizontal>
            <Input
              control={methods.control}
              name="complement"
              label="Complemento"
              placeholder="AP. Bloco"
              sizeWidth={46}
            />
            <Input
              control={methods.control}
              name="district"
              label="Bairro"
              placeholder="Centro"
              sizeWidth={50}
              errorMessage={
                methods.formState.errors.district?.message as string
              }
              multiline={isDistrictLength}
            />
          </S.WrapperItemHorizontal>
          <S.WrapperItemHorizontal>
            <Input
              control={methods.control}
              name="city"
              label="Cidade"
              placeholder="São Paulo"
              sizeWidth={46}
              errorMessage={methods.formState.errors.city?.message as string}
              multiline={isCityLength}
            />
            <Select
              options={statesOptions}
              control={methods.control}
              name="state"
              label="Estado"
              sizeWidth={50}
              errorMessage={methods.formState.errors.state?.message as string}
            />
          </S.WrapperItemHorizontal>
        </>
      )}
    </S.Wrapper>
  );
};

export default ProfileAddressCard;
