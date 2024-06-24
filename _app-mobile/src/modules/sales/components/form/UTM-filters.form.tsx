import React, { useEffect } from 'react';
import { Keyboard } from 'react-native';

import * as S from './form.styles';
import { useFilterSales } from '../../screens/modal/use-filter-sales';
import { CheckboxControl, Input } from '@/shared/components';
import { useFormContext } from 'react-hook-form';

export const UTMFiltersCard = () => {
  const methods = useFormContext();

  const isCheckCampaign = methods.watch('isCheckUtmCampaign');
  const isCheckContent = methods.watch('isCheckUtmContent');
  const isCheckMedium = methods.watch('isCheckUtmMedium');
  const isCheckSource = methods.watch('isCheckUtmSource');
  const isCheckSrc = methods.watch('isCheckUtmSrc');
  const isCheckTerm = methods.watch('isCheckUtmTerm');

  const handleUTMFiltersAll = () => {
    if (
      methods.getValues('isCheckUtmCampaign') &&
      methods.getValues('isCheckUtmContent') &&
      methods.getValues('isCheckUtmMedium') &&
      methods.getValues('isCheckUtmSource') &&
      methods.getValues('isCheckUtmSrc') &&
      methods.getValues('isCheckUtmTerm')
    ) {
      methods.setValue('isCheckUtmCampaign', false);
      methods.setValue('utmCampaign', '');
      methods.setValue('isCheckUtmContent', false);
      methods.setValue('utmContent', '');
      methods.setValue('isCheckUtmMedium', false);
      methods.setValue('utmMedium', '');
      methods.setValue('isCheckUtmSource', false);
      methods.setValue('utmSource', '');
      methods.setValue('isCheckUtmSrc', false);
      methods.setValue('utmSrc', '');
      methods.setValue('isCheckUtmTerm', false);
      methods.setValue('utmTerm', '');
    } else {
      methods.setValue('isCheckUtmCampaign', true);
      methods.setValue('utmCampaign', '');
      methods.setValue('isCheckUtmContent', true);
      methods.setValue('utmContent', '');
      methods.setValue('isCheckUtmMedium', true);
      methods.setValue('utmMedium', '');
      methods.setValue('isCheckUtmSource', true);
      methods.setValue('utmSource', '');
      methods.setValue('isCheckUtmSrc', true);
      methods.setValue('utmSrc', '');
      methods.setValue('isCheckUtmTerm', true);
      methods.setValue('utmTerm', '');
    }
  };

  useEffect(() => {
    if (!isCheckCampaign) {
      methods.setValue('utmCampaign', '');
      methods.setError('utmCampaign', {
        type: '',
        message: '',
      });
    }
    if (!isCheckContent) {
      methods.setValue('utmContent', '');
      methods.setError('v', {
        type: '',
        message: '',
      });
    }
    if (!isCheckMedium) {
      methods.setValue('utmMedium', '');
      methods.setError('utmMedium', {
        type: '',
        message: '',
      });
    }
    if (!isCheckSource) {
      methods.setValue('utmSource', '');
      methods.setError('utmSource', {
        type: '',
        message: '',
      });
    }
    if (!isCheckSrc) {
      methods.setValue('utmSrc', '');
      methods.setError('utmSrc', {
        type: '',
        message: '',
      });
    }
    if (!isCheckTerm) {
      methods.setValue('utmTerm', '');
      methods.setError('utmTerm', {
        type: '',
        message: '',
      });
    }
  }, [
    isCheckCampaign,
    isCheckContent,
    isCheckMedium,
    isCheckSource,
    isCheckSrc,
    isCheckTerm,
  ]);

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>UTM</S.Title>
        <S.BtnAll
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss();
            handleUTMFiltersAll();
          }}
        >
          <S.AllText>(Selecionar todos)</S.AllText>
        </S.BtnAll>
      </S.WrapperHeader>
      <S.WrapperUTM>
        <S.WrapperItem index={0}>
          <CheckboxControl
            control={methods.control}
            name="isCheckUtmCampaign"
            label="Campaign"
          />
          <S.WrapperItemInput>
            <Input
              control={methods.control}
              placeholder="Insira o valor para filtrar"
              name="utmCampaign"
              isDisabled={!isCheckCampaign}
              errorMessage={
                methods.formState.errors.utmCampaign?.message as string
              }
            />
          </S.WrapperItemInput>
        </S.WrapperItem>
        <S.WrapperItem index={1}>
          <CheckboxControl
            control={methods.control}
            name="isCheckUtmContent"
            label="Content"
          />
          <S.WrapperItemInput>
            <Input
              control={methods.control}
              placeholder="Insira o valor para filtrar"
              name="utmContent"
              isDisabled={!isCheckContent}
              errorMessage={
                methods.formState.errors.utmContent?.message as string
              }
            />
          </S.WrapperItemInput>
        </S.WrapperItem>
        <S.WrapperItem index={1}>
          <CheckboxControl
            control={methods.control}
            name="isCheckUtmMedium"
            label="Campaign"
          />
          <S.WrapperItemInput>
            <Input
              control={methods.control}
              placeholder="Insira o valor para filtrar"
              name="utmMedium"
              isDisabled={!isCheckMedium}
              errorMessage={
                methods.formState.errors.utmMedium?.message as string
              }
            />
          </S.WrapperItemInput>
        </S.WrapperItem>
        <S.WrapperItem index={1}>
          <CheckboxControl
            control={methods.control}
            name="isCheckUtmSource"
            label="Source"
          />
          <S.WrapperItemInput>
            <Input
              control={methods.control}
              placeholder="Insira o valor para filtrar"
              name="utmSource"
              isDisabled={!isCheckSource}
              errorMessage={
                methods.formState.errors.utmSource?.message as string
              }
            />
          </S.WrapperItemInput>
        </S.WrapperItem>
        <S.WrapperItem index={1}>
          <CheckboxControl
            control={methods.control}
            name="isCheckUtmSrc"
            label="Src"
          />
          <S.WrapperItemInput>
            <Input
              control={methods.control}
              placeholder="Insira o valor para filtrar"
              name="utmSrc"
              isDisabled={!isCheckSrc}
              errorMessage={methods.formState.errors.utmSrc?.message as string}
            />
          </S.WrapperItemInput>
        </S.WrapperItem>
        <S.WrapperItem index={1}>
          <CheckboxControl
            control={methods.control}
            name="isCheckUtmTerm"
            label="Term"
          />
          <S.WrapperItemInput>
            <Input
              control={methods.control}
              placeholder="Insira o valor para filtrar"
              name="utmTerm"
              isDisabled={!isCheckTerm}
              errorMessage={methods.formState.errors.utmTerm?.message as string}
            />
          </S.WrapperItemInput>
        </S.WrapperItem>
      </S.WrapperUTM>
    </S.Wrapper>
  );
};
