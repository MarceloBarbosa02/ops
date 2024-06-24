import { Input, Select, Typography } from '@/shared/components';
import { useFormContext } from 'react-hook-form';
import { View } from 'react-native';

import * as S from './form.styles';
import {
  countryOptions,
  extraDocumentTypesOptions,
  languagesOptions,
} from '../../mocks/form';
import { useFetchMe } from '@/shared/queries';
import { CalendarIcon } from '@/shared';
import { useEffect } from 'react';
import { shouldEnableNativeNagger } from '@sentry/react-native/dist/js/options';

const ProfileIdentifyCard = () => {
  const methods = useFormContext();
  const { data: userData } = useFetchMe();
  const isDisabled = userData?.isDocumentUpdated || false;

  return (
    <S.Wrapper>
      <S.WrapperHeaderTitle>
        <Typography title="Identificação" size="large" weight="bold" />
      </S.WrapperHeaderTitle>
      <Input
        control={methods.control}
        name="name"
        label="Nome"
        placeholder="Seu nome"
        autoCapitalize="words"
        isDisabled={isDisabled}
        errorMessage={methods.formState.errors.name?.message as string}
      />
      <S.WrapperItemHorizontal>
        <Select
          options={countryOptions}
          control={methods.control}
          name="nationality"
          label="Nacionalidade"
          sizeWidth={48}
          disabled={isDisabled}
          errorMessage={methods.formState.errors.nationality?.message as string}
        />
        <Select
          options={languagesOptions}
          control={methods.control}
          name="language"
          label="Idioma"
          sizeWidth={48}
          disabled={isDisabled}
          errorMessage={methods.formState.errors.language?.message as string}
        />
      </S.WrapperItemHorizontal>
      <Input
        control={methods.control}
        name="document"
        label="CPF"
        placeholder="000.000.000-00"
        keyboardType="numeric"
        maxLength={14}
        isRequired
        mask
        type="cpf"
        isDisabled={isDisabled}
        errorMessage={methods.formState.errors.document?.message as string}
      />
      <Input
        control={methods.control}
        name="birthDate"
        label="Data de nascimento"
        placeholder="DD/MM/AAAA"
        isRequired
        maxLength={10}
        keyboardType="numeric"
        isDisabled={isDisabled}
        endContent={<CalendarIcon />}
        // isErrorMessage
        mask
        type="datetime"
        options={{
          format: 'DD/MM/YYYY',
        }}
        errorMessage={methods.formState.errors.birthDate?.message as string}
      />
      <View>
        <S.WrapperIsRequired isDisabled={isDisabled}>
          <Typography
            title="Documento alternativo"
            variant="subtitle"
            size="large"
          />
          <Typography
            title="(obrigatório)"
            variant="subtitle"
            colorValue="neutral-light"
          />
        </S.WrapperIsRequired>
        <S.WrapperDoc>
          <S.WrapperItemHorizontal>
            <Select
              control={methods.control}
              name="additionalDocumentType"
              options={extraDocumentTypesOptions}
              label="Tipo"
              sizeWidth={32}
              disabled={isDisabled}
              errorMessage={
                methods.formState.errors.additionalDocumentType
                  ?.message as string
              }
            />
            <Input
              control={methods.control}
              name="additionalDocument"
              label="Número"
              placeholder="123.456.78"
              sizeWidth={63}
              maxLength={14}
              keyboardType="numeric"
              isDisabled={isDisabled}
              errorMessage={
                methods.formState.errors.additionalDocument?.message as string
              }
            />
          </S.WrapperItemHorizontal>
          <Input
            control={methods.control}
            name="additionalDocumentIssueDate"
            label="Data de emissão"
            placeholder="DD/MM/AA"
            keyboardType="numeric"
            maxLength={10}
            mask
            type="datetime"
            options={{
              format: 'DD/MM/YYYY',
            }}
            isDisabled={isDisabled}
            endContent={<CalendarIcon />}
            isErrorMessage={
              !methods.formState.errors.additionalDocumentIssueDate?.message
            }
            errorMessage={
              methods.formState.errors.additionalDocumentIssueDate
                ?.message as string
            }
          />
        </S.WrapperDoc>
      </View>
    </S.Wrapper>
  );
};

export default ProfileIdentifyCard;
