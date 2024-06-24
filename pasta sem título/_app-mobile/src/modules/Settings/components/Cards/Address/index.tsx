import React, { useEffect, useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { useFormContext } from "react-hook-form";
import { Keyboard, TextInput } from "react-native";
import { useTheme } from "styled-components";
import { cleanMask } from "masks-br";
import { TextInputMaskMethods } from "react-native-masked-text";

import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { OptionsProfile } from "@modules/Settings/mocks/options_profile";
import { Address } from "@shared/types/entities/User";

import { InputTextEdit } from "../../Inputs/InputText";
import { SelectOptionModal } from "../../Modal/SelectOption";
import { useAddressCard } from "./hook/useAddress";
import * as S from "./styles";

export const AddressCard = () => {
  const theme = useTheme();
  const { data: userData } = useFetchMe();
  const {
    control,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useFormContext<Address>();
  const modalCEPRef = useRef<TextInputMaskMethods>(null);
  const modalCityRef = useRef<TextInput>(null);
  const modalSelectStateRef = useRef<Modalize>(null);
  const modalSelectCountryRef = useRef<Modalize>(null);

  const _zipCode = watch("zipCode");
  const _country = watch("country");
  const _state = watch("state");

  const {
    isState,
    isCountry,
    labelState,
    isLoadingCEP,
    labelCountry,
    ValidState,
    setIsState,
    setIsCountry,
    clean_fields,
    handleFormDefault,
    handleSelectState,
    handleSelectCountry,
    handleZipCodeChange,
    handleSelectOptionState,
    handleSelectOptionCountry,
  } = useAddressCard({
    _state,
    _country,
    setValue,
    clearErrors,
    modalCEPRef,
    modalCityRef,
    modalSelectStateRef,
    modalSelectCountryRef,
  });

  useEffect(() => {
    handleFormDefault();
  }, []);

  useEffect(() => {
    if (cleanMask(_zipCode).length === 8) {
      if (_zipCode === userData?.address?.zipCode) {
        handleFormDefault();
        return;
      } else {
        Keyboard.dismiss();
        handleZipCodeChange(_zipCode);
      }
    } else {
      clean_fields();
    }
  }, [_zipCode]);

  return (
    <S.Wrapper>
      <S.FieldContainer>
        <S.Title>Endereço</S.Title>
        <S.WrapperSelect>
          <S.Label>País</S.Label>
          <S.SelectButton
            onPress={handleSelectCountry}
            active={isCountry}
            isErrored={!!errors?.country?.message}
          >
            <S.LabelSelect>
              {labelCountry[0]?.label || OptionsProfile.country[0]?.label}
            </S.LabelSelect>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={theme.colors.color_neutral_60}
            />
          </S.SelectButton>
          {errors?.country && (
            <S.Error>{errors?.country?.message || ""}</S.Error>
          )}
        </S.WrapperSelect>

        <InputTextEdit
          textRefMask={modalCEPRef}
          control={control}
          name="zipCode"
          property="Higher"
          label="CEP"
          placeholder="CEP"
          onFocus={ValidState}
          mask
          type="zip-code"
          maxLength={9}
          isLoading={isLoadingCEP}
          editable
          errorMessage={errors?.zipCode?.message}
        />

        <InputTextEdit
          control={control}
          name="street"
          property="Higher"
          label="Endereço"
          placeholder="Quadra, rua, conjunto..."
          editable
          errorMessage={errors?.street?.message}
        />

        <InputTextEdit
          control={control}
          name="number"
          property="Higher"
          label="Número"
          placeholder="123"
          editable
          errorMessage={errors?.number?.message}
        />

        <S.WrapperSelect>
          <S.Label>Estado</S.Label>
          <S.SelectButton
            onPress={handleSelectState}
            active={isState}
            isErrored={!!errors?.state?.message}
          >
            <S.LabelSelect>{labelState}</S.LabelSelect>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color={theme.colors.color_neutral_60}
            />
          </S.SelectButton>
          {errors?.state && <S.Error>{errors?.state?.message || " "}</S.Error>}
        </S.WrapperSelect>

        <InputTextEdit
          textRef={modalCityRef}
          control={control}
          name="city"
          property="Higher"
          label="Cidade"
          placeholder="Sua cidade"
          editable
          errorMessage={errors?.city?.message}
        />

        <InputTextEdit
          control={control}
          name="district"
          property="Higher"
          label="Bairro"
          placeholder="Seu Bairro"
          editable
          errorMessage={errors?.district?.message}
        />

        <InputTextEdit
          control={control}
          name="complement"
          property="Higher"
          label="Complemento"
          placeholder="Seu complemento"
          editable
          errorMessage={errors?.complement?.message}
        />
      </S.FieldContainer>

      <SelectOptionModal
        title="Estados"
        refModal={modalSelectStateRef}
        options={OptionsProfile.states}
        onSelect={handleSelectOptionState}
        setIsActive={setIsState}
        option={_state}
      />
      <SelectOptionModal
        title="País"
        options={OptionsProfile.country}
        refModal={modalSelectCountryRef}
        onSelect={handleSelectOptionCountry}
        setIsActive={setIsCountry}
        option={_country}
      />
    </S.Wrapper>
  );
};
