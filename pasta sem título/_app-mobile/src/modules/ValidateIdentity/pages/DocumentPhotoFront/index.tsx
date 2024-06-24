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

import {
  DataPhoto,
  useBiometric,
} from "@modules/ValidateIdentity/context/BiometricContext";
import { useFetchDocumentBiometric } from "@modules/ValidateIdentity/hook/useBiometrics";
import { CNHFront, RGFront } from "@modules/ValidateIdentity/mocks/docs";
import { ButtonFooter } from "@modules/ValidateIdentity/components/ButtonFooter";
import { showToast } from "@shared/store/useToastStore";
import { BiometricLayout } from "@shared/components/Layouts/BiometricLayout";
import { TypographyTextMaster } from "@shared/components/Typography";
import { ButtonMaster } from "@shared/components/Buttons/ButtonMaster";

import * as S from "./styles";

export const DocumentPhotoFrontScreen = () => {
  const theme = useTheme();
  const { navigate, goBack } = useNavigation();
  const { typeDocumentFront } = useBiometric();
  const { UnicoCheckModule } = NativeModules;
  const eventEmitter = new NativeEventEmitter(UnicoCheckModule);
  const [isShow, setIsShow] = useState("instruction");
  const [documentFront, setDocumentFront] = useState<DataPhoto>(
    {} as DataPhoto
  );
  const { mutate, isLoading: isLoading } = useFetchDocumentBiometric();

  const handleSubmit = async (data: DataPhoto) => {
    const payload = {
      imageBase64: data.base64,
      jwt: data.encrypted,
      type: typeDocumentFront,
    };

    mutate(payload, {
      onSuccess: () => {
        navigate("DocumentPhotoBack");
      },
      onError(error: any) {
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  const loadCameraSdk = () => {
    setIsShow("");
    setDocumentFront({
      base64: "",
      encrypted: "",
    });
    if (typeDocumentFront === "IDENTITY_CARD_FRONT") {
      return UnicoCheckModule.callIdentityFrontCamera();
    } else {
      return UnicoCheckModule.callDocumentFrontCamera();
    }
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
          const photo_front = {
            base64,
            encrypted,
          };

          setDocumentFront(photo_front);
          setIsShow("");
        }
        return;
      }
      setDocumentFront(e);
    });

    eventEmitter.addListener("onError", () => {
      navigate("TypeDocument");
    });

    return () => {
      eventEmitter.removeAllListeners("onError");
      eventEmitter.removeAllListeners("onSuccess");
    };
  }, [documentFront.base64]);

  return (
    <BiometricLayout>
      {documentFront.base64 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <S.WrapperHeader>
            <TypographyTextMaster
              variant="body"
              typeWeight="bold"
              align="center"
              fontSize={theme.fonts.sizes.mediumX}
              color={theme.colors.gray_l800_d100}
            >
              Confirmação de envio
            </TypographyTextMaster>
            <TypographyTextMaster
              variant="subtitle"
              typeWeight="regular"
              align="center"
              fontSize={theme.fonts.sizes.smallX}
              color={theme.colors.gray_l700_d200}
            >
              Certifique-se de que seu documento está legível.
            </TypographyTextMaster>
          </S.WrapperHeader>

          <S.ImgPreview
            source={{
              uri: `data:image/png;base64,${documentFront.base64}`,
            }}
            resizeMode="contain"
          />

          <S.WrapperFooter>
            <ButtonMaster
              title="Repetir"
              variant="secondary"
              type="link"
              size="small"
              sizeWidth={47}
              disabled={isLoading}
              onPress={loadCameraSdk}
            />
            <ButtonMaster
              title="Usar foto"
              variant="primary"
              size="small"
              isLoading={isLoading}
              disabled={isLoading}
              sizeWidth={47}
              onPress={() => handleSubmit(documentFront)}
            />
          </S.WrapperFooter>
        </ScrollView>
      )}

      {isShow === "instruction" && (
        <S.Container>
          {typeDocumentFront === "IDENTITY_CARD_FRONT" ? (
            <>
              <View style={{ gap: 4 }}>
                <TypographyTextMaster
                  variant="body"
                  typeWeight="bold"
                  align="center"
                  fontSize={theme.fonts.sizes.mediumX}
                  color={theme.colors.gray_l800_d100}
                >
                  Posicione a parte da frente do seu RG como no exemplo abaixo
                </TypographyTextMaster>
                <TypographyTextMaster
                  variant="subtitle"
                  typeWeight="regular"
                  align="center"
                  fontSize={theme.fonts.sizes.smallX}
                  color={theme.colors.gray_l700_d200}
                >
                  Para que possamos verificar sua identidade
                </TypographyTextMaster>
              </View>
              <S.WrapperDefault>
                <S.ImgPreview source={{ uri: RGFront }} resizeMode="contain" />
              </S.WrapperDefault>
            </>
          ) : (
            <>
              <View style={{ gap: 4 }}>
                <TypographyTextMaster
                  variant="body"
                  typeWeight="bold"
                  align="center"
                  fontSize={theme.fonts.sizes.mediumX}
                  color={theme.colors.gray_l800_d100}
                >
                  Posicione a parte de cima da sua CNH como no exemplo abaixo
                </TypographyTextMaster>
                <TypographyTextMaster
                  variant="subtitle"
                  typeWeight="regular"
                  align="center"
                  fontSize={theme.fonts.sizes.smallX}
                  color={theme.colors.gray_l700_d200}
                >
                  Para que possamos verificar sua identidade
                </TypographyTextMaster>
              </View>
              <S.WrapperDefault>
                <S.ImgPreview source={{ uri: CNHFront }} resizeMode="contain" />
              </S.WrapperDefault>
            </>
          )}
          <ButtonFooter
            handleNavigation={loadCameraSdk}
            handleNavigationBack={goBack}
          />
        </S.Container>
      )}
    </BiometricLayout>
  );
};
