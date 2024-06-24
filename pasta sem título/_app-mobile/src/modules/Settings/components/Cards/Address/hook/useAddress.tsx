import { RefObject, useMemo, useState } from "react";
import {
  FieldValues,
  UseFormClearErrors,
  UseFormSetValue,
} from "react-hook-form";
import { Keyboard, TextInput } from "react-native";
import { TextInputMaskMethods } from "react-native-masked-text";
import { Modalize } from "react-native-modalize";

import { OptionsProfile } from "@modules/Settings/mocks/options_profile";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { showToast } from "@shared/store/useToastStore";
import { getAddressByZipCode } from "@shared/utils/getAddressByZipCode";
import { Address } from "@shared/types/entities/User";

interface AddressProps {
  _country: string;
  _state: string;
  setValue: UseFormSetValue<Address>;
  clearErrors: UseFormClearErrors<Address>;
  modalSelectStateRef: RefObject<Modalize>;
  modalSelectCountryRef: RefObject<Modalize>;
  modalCEPRef: RefObject<TextInputMaskMethods>;
  modalCityRef: RefObject<TextInput>;
}

export const useAddressCard = ({
  _state,
  _country,
  setValue,
  clearErrors,
  modalSelectStateRef,
  modalSelectCountryRef,
  modalCEPRef,
  modalCityRef,
}: AddressProps) => {
  const { data: userData } = useFetchMe();
  const [isLoadingCEP, setIsLoadingCEP] = useState<boolean>(false);
  const [isCountry, setIsCountry] = useState<boolean>(false);
  const [isState, setIsState] = useState<boolean>(false);

  const handleFormDefault = () => {
    setValue("country", userData?.address?.country || "Brasil");
    setValue("zipCode", userData?.address?.zipCode || "");
    setValue("street", userData?.address?.street || "");
    setValue("number", userData?.address?.number || "");
    setValue("state", userData?.address?.state || "");
    setValue("city", userData?.address?.city || "");
    setValue("district", userData?.address?.district || "");
    setValue("complement", userData?.address?.complement || "");
  };

  const handleSelectState = () => {
    setIsState(true);
    modalSelectStateRef.current?.open();
  };

  const handleSelectCountry = () => {
    Keyboard.dismiss();
    setIsCountry(true);
    modalSelectCountryRef.current?.open();
  };

  const handleSelectOptionState = (data: string) => {
    if (data === "") {
      showToast({
        type: "error",
        message: "Escolha primeiro um país válido.",
      });
      return;
    }
    setIsState(false);
    setValue("state", data);
    modalSelectStateRef.current?.close();
    modalCityRef.current?.focus();
  };

  const handleSelectOptionCountry = (data: string) => {
    if (data === "") {
      showToast({
        type: "error",
        message: "Escolha primeiro um país válido.",
      });
      return;
    }
    setIsCountry(false);
    setValue("country", data);
    setValue("zipCode", "");
    setValue("number", "");
    modalSelectCountryRef.current?.close();
    modalCEPRef.current?.getElement().focus();
  };

  const clean_fields = () => {
    setValue("street", "");
    setValue("district", "");
    setValue("city", "");
    setValue("state", "");
    setValue("number", "");
    setValue("complement", "");
  };

  const handleZipCodeChange = async (zipCode: string) => {
    setValue("zipCode", zipCode);

    setIsLoadingCEP(true);

    clearErrors(["zipCode", "street", "district", "city", "state"]);

    const data = await getAddressByZipCode(zipCode);

    setIsLoadingCEP(false);

    if (data) {
      setValue("street", data.logradouro);
      setValue("district", data.bairro);
      setValue("city", data.localidade);
      setValue("state", data.uf);
    } else {
      clean_fields();
    }

    setValue("number", "");
    setValue("complement", "");
  };

  const labelCountry = useMemo(() => {
    return OptionsProfile.country.filter((item) => item.value === _country);
  }, [_country]);

  const labelState = useMemo(() => {
    const state_data = OptionsProfile.states.find(
      (item) => item.value === _state
    );

    if (state_data?.label) {
      return state_data.label;
    }
    return OptionsProfile.states[0]?.label;
  }, [_state]);

  const ValidState = () => {
    if (labelCountry[0]?.value === "") {
      showToast({
        type: "error",
        message: "Escolha primeiro um país.",
      });
    }
  };

  return {
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
  };
};
