import React, { useEffect, useState } from "react";
import {
  NativeModules,
  NativeEventEmitter,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import ImgValidationDark from "@shared/assets/images/svg/img_validation_dark.svg";
import ImgValidation from "@shared/assets/images/svg/img_validation.svg";
import UserSelfie from "@shared/assets/icons/svg/user_selfie.svg";
import { ItemList } from "@modules/ValidateIdentity/components/ItemList";
import {
  DataPhoto,
  useBiometric,
  TypeDocumentProps,
} from "@modules/ValidateIdentity/context/BiometricContext";
import { useFetchDocumentBiometric } from "@modules/ValidateIdentity/hook/useBiometrics";
import { ButtonFooter } from "@modules/ValidateIdentity/components/ButtonFooter";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { showToast } from "@shared/store/useToastStore";
import { BiometricLayout } from "@shared/components/Layouts/BiometricLayout";
import { TypographyTextMaster } from "@shared/components/Typography";

import * as S from "./styles";

export const TakeSelfieScreen = () => {
  const theme = useTheme();
  const { refetch } = useFetchMe();
  const { handleSelfie } = useBiometric();
  const { navigate, goBack } = useNavigation();
  const { UnicoCheckModule } = NativeModules;
  const { mutate, isLoading: isLoading } = useFetchDocumentBiometric();
  const [isShow, setIsShow] = useState("instruction");
  const eventEmitter = new NativeEventEmitter(UnicoCheckModule);

  const loadCameraSdk = () => {
    setIsShow("");
    return UnicoCheckModule.callLivenessCamera();
  };

  const handleSubmit = async (data: DataPhoto) => {
    const payload = {
      imageBase64: data.base64,
      jwt: data.encrypted,
      type: "SELFIE" as TypeDocumentProps,
    };

    mutate(payload, {
      onSuccess: () => {
        refetch();
        navigate("Validation", { type: "progress" });
      },
      onError(error: any) {
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  useEffect(() => {
    let base64 = "";
    let encrypted = "";

    eventEmitter.addListener("onSuccess", (e: any) => {
      if (Platform.OS === "ios") {
        if (e.objResult.charAt(20) !== ".") {
          base64 = e.objResult;
        } else {
          encrypted = e.objResult;
        }
        if (base64 !== "" && encrypted !== "") {
          const photo_selfie = {
            base64,
            encrypted,
          };

          handleSubmit(photo_selfie);
        }
        return;
      }
      handleSubmit(e);
    });

    eventEmitter.addListener("onError", () => {
      navigate("TypeDocument");
      handleSelfie({
        base64: "",
        encrypted: "",
      });
    });

    return () => {
      eventEmitter.removeAllListeners("onError");
      eventEmitter.removeAllListeners("onSuccess");
    };
  }, []);

  return (
    <S.Wrapper>
      {isLoading && (
        <BiometricLayout>
          <S.Container>
            <S.WrapperContent>
              {theme.theme === "light" ? (
                <ImgValidation />
              ) : (
                <ImgValidationDark />
              )}
              <TypographyTextMaster
                variant="body"
                typeWeight="bold"
                align="center"
                spacing={24}
                fontSize={theme.fonts.sizes.mediumX}
                color={theme.colors.gray_l800_d100}
              >
                Aguarde o carregamento da validação...
              </TypographyTextMaster>
            </S.WrapperContent>
            <S.ItemsLoading>
              <ItemList title="Foto processadas" />
              <ItemList title="Qualidade da imagem processada" />
              <ItemList title="Documento inspecionado" />
              <ItemList title="Biometria verificada" />
              <ItemList title="Finalizando a decisão" isLoading={isLoading} />
            </S.ItemsLoading>
          </S.Container>
        </BiometricLayout>
      )}

      {isShow === "instruction" && (
        <BiometricLayout>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <S.Content>
              <S.WrapperHeader>
                <UserSelfie />
                <View style={{ gap: 4 }}>
                  <TypographyTextMaster
                    variant="body"
                    typeWeight="bold"
                    align="center"
                    fontSize={theme.fonts.sizes.mediumX}
                    color={theme.colors.gray_l800_d100}
                  >
                    Prepare-se para tirar uma selfie
                  </TypographyTextMaster>
                  <TypographyTextMaster
                    variant="subtitle"
                    typeWeight="regular"
                    align="center"
                    fontSize={theme.fonts.sizes.smallX}
                    color={theme.colors.gray_l700_d200}
                  >
                    Esta é a última etapa
                  </TypographyTextMaster>
                </View>
                <S.Items>
                  <ItemList title="Certifique-se de estar em um ambiente bem iluminado" />
                  <ItemList title="Caso utilize óculos, os olhos devem estar totalmente visíveis e a armação não deve ser chamativa ou cobri-los " />
                  <ItemList title="Não utilize boné" />
                </S.Items>
              </S.WrapperHeader>
              <ButtonFooter
                handleNavigation={loadCameraSdk}
                handleNavigationBack={goBack}
              />
            </S.Content>
          </ScrollView>
        </BiometricLayout>
      )}
    </S.Wrapper>
  );
};
