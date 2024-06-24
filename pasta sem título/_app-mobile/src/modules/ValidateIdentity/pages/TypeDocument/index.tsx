import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { PermissionsAndroid, Platform, ScrollView, View } from "react-native";

import ImgValidationDark from "@shared/assets/images/svg/img_validation_dark.svg";
import ImgValidation from "@shared/assets/images/svg/img_validation.svg";
import { useBiometric } from "@modules/ValidateIdentity/context/BiometricContext";
import { ButtonFooter } from "@modules/ValidateIdentity/components/ButtonFooter";
import { BiometricLayout } from "@shared/components/Layouts/BiometricLayout";
import { TypographyTextMaster } from "@shared/components/Typography";
import { RadioButton } from "@shared/components/Buttons/RadioButton";

import * as S from "./styles";

export const TypeDocumentScreen = () => {
  const theme = useTheme();
  const { navigate, goBack } = useNavigation();
  const { handleSelectTypeDocument } = useBiometric();
  const [activeOption, setActiveOption] = useState<number>(0);
  const [isGranted, setIsGranted] = useState<boolean>(false);

  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "App Permissão de Câmera",
        message: "O App precisa de acesso à câmera.",
        buttonNeutral: "Pergunte-me depois",
        buttonNegative: "Cancelar",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      setIsGranted(true);
      handleSelectTypeDocument(activeOption === 0 ? "RG" : "CNH");
      navigate("DocumentPhotoFront");
    } else {
      setIsGranted(false);
    }
  };

  const buttons = [
    {
      id: 0,
      title: "Carteira de identidade",
    },
    {
      id: 1,
      title: "Carteira de habilitação",
    },
  ];

  const handleSelectOption = (id: number) => {
    setActiveOption(id);
  };

  const handleNavigation = () => {
    if (Platform.OS === "ios") {
      handleSelectTypeDocument(activeOption === 0 ? "RG" : "CNH");
      navigate("DocumentPhotoFront");
    } else {
      if (isGranted) {
        handleSelectTypeDocument(activeOption === 0 ? "RG" : "CNH");
        navigate("DocumentPhotoFront");
      } else {
        requestCameraPermission();
      }
    }
  };

  return (
    <BiometricLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <S.WrapperContent>
          <S.WrapperInfo>
            {theme.theme === "light" ? (
              <ImgValidation />
            ) : (
              <ImgValidationDark />
            )}
            <View style={{ paddingHorizontal: 24, gap: 8 }}>
              <TypographyTextMaster
                variant="body"
                typeWeight="bold"
                align="center"
                fontSize={theme.fonts.sizes.mediumX}
                color={theme.colors.gray_l800_d100}
              >
                Tipo de documento para análise
              </TypographyTextMaster>
              <TypographyTextMaster
                variant="subtitle"
                align="center"
                typeWeight="regular"
                fontSize={theme.fonts.sizes.smallX}
                color={theme.colors.gray_l700_d200}
              >
                Selecione abaixo o tipo de documento que será enviado na etapa
                seguinte.
              </TypographyTextMaster>
            </View>
            <S.WrapperButtons>
              {buttons.map((item) => (
                <RadioButton
                  key={item.title}
                  active={item.id === activeOption}
                  title={item.title}
                  onPress={() => handleSelectOption(item.id)}
                />
              ))}
            </S.WrapperButtons>
          </S.WrapperInfo>
          <ButtonFooter
            handleNavigation={handleNavigation}
            handleNavigationBack={goBack}
          />
        </S.WrapperContent>
      </ScrollView>
    </BiometricLayout>
  );
};
