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
import { CNHVerse, RGVerse } from "@modules/ValidateIdentity/mocks/docs";
import { ButtonFooter } from "@modules/ValidateIdentity/components/ButtonFooter";
import { showToast } from "@shared/store/useToastStore";
import { BiometricLayout } from "@shared/components/Layouts/BiometricLayout";
import { TypographyTextMaster } from "@shared/components/Typography";
import { ButtonMaster } from "@shared/components/Buttons/ButtonMaster";

import * as S from "./styles";

export const DocumentPhotoBackScreen = ({}) => {
  const { navigate, goBack } = useNavigation();
  const { typeDocumentBack } = useBiometric();
  const { UnicoCheckModule } = NativeModules;
  const eventEmitter = new NativeEventEmitter(UnicoCheckModule);
  const [isShow, setIsShow] = useState("instruction");
  const [documentBack, setDocumentBack] = useState<DataPhoto>({} as DataPhoto);
  const theme = useTheme();
  const { mutate, isLoading: isLoading } = useFetchDocumentBiometric();

  const handleSubmit = async (data: DataPhoto) => {
    const payload = {
      imageBase64: data.base64,
      jwt: data.encrypted,
      type: typeDocumentBack,
    };

    mutate(payload, {
      onSuccess: () => {
        navigate("TakeSelfie");
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
    setDocumentBack({
      base64: "",
      encrypted: "",
    });
    if (typeDocumentBack === "IDENTITY_CARD_VERSE") {
      return UnicoCheckModule.callIdentityBackCamera();
    } else {
      return UnicoCheckModule.callDocumentBackCamera();
    }
  };

  useEffect(() => {
    let base64 = "";
    let encrypted = "";

    eventEmitter.addListener("onSuccess", (e) => {
      if (Platform.OS === "ios") {
        if (e.objResult.charAt(20) !== ".") {
          base64 = e.objResult;
        } else {
          encrypted = e.objResult;
        }
        if (base64 !== "" && encrypted !== "") {
          const photo_back = {
            base64,
            encrypted,
          };

          setDocumentBack(photo_back);
        }
        return;
      }
      setDocumentBack(e);
    });

    eventEmitter.addListener("onError", (e) => {
      navigate("TypeDocument");
      showToast({
        type: "error",
        message: e.objResult || "Ops! Algo deu errado. Tente novamente",
      });
    });

    return () => {
      eventEmitter.removeAllListeners("onError");
      eventEmitter.removeAllListeners("onSuccess");
    };
  }, [documentBack.base64]);

  return (
    <BiometricLayout routeParam={goBack}>
      {documentBack.base64 && (
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
              uri: `data:image/png;base64,${documentBack?.base64}`,
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
              onPress={() => handleSubmit(documentBack)}
            />
          </S.WrapperFooter>
        </ScrollView>
      )}

      {isShow === "instruction" && (
        <S.Container>
          {typeDocumentBack === "IDENTITY_CARD_VERSE" ? (
            <>
              <View style={{ gap: 4 }}>
                <TypographyTextMaster
                  variant="body"
                  typeWeight="bold"
                  align="center"
                  fontSize={theme.fonts.sizes.mediumX}
                  color={theme.colors.gray_l800_d100}
                >
                  Agora, posicione o verso do seu RG como no exemplo abaixo
                </TypographyTextMaster>
                <TypographyTextMaster
                  variant="subtitle"
                  typeWeight="regular"
                  align="center"
                  fontSize={theme.fonts.sizes.smallX}
                  color={theme.colors.gray_l700_d200}
                >
                  Para que possamos continuar a verificar sua identidade
                </TypographyTextMaster>
              </View>
              <S.WrapperDefault>
                <S.ImgPreview source={{ uri: RGVerse }} resizeMode="contain" />
              </S.WrapperDefault>
            </>
          ) : (
            <>
              <View style={{ gap: 4 }}>
                <TypographyTextMaster
                  variant="body"
                  typeWeight="bold"
                  fontSize={theme.fonts.sizes.mediumX}
                  color={theme.colors.gray_l800_d100}
                >
                  Agora, posicione a parte de baixo da sua CNH
                </TypographyTextMaster>
                <TypographyTextMaster
                  variant="subtitle"
                  typeWeight="regular"
                  fontSize={theme.fonts.sizes.smallX}
                  color={theme.colors.gray_l700_d200}
                >
                  Para que possamos continuar a verificar sua identidade
                </TypographyTextMaster>
              </View>
              <S.WrapperDefault>
                <S.ImgPreview source={{ uri: CNHVerse }} resizeMode="contain" />
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
