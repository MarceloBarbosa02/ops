import React, { useMemo } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { Linking } from "react-native";

import ImgValidationDark from "@shared/assets/images/svg/img_validation_dark.svg";
import ImgValidation from "@shared/assets/images/svg/img_validation.svg";
import Wallet from "@shared/assets/images/svg/wallet.svg";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { useBiometricNavigation } from "@shared/store/useBiometricNavigation";
import { links_general } from "@shared/constants/links";
import { BiometricLayout } from "@shared/components/Layouts/BiometricLayout";
import { TypographyTextMaster } from "@shared/components/Typography";
import { ButtonMaster } from "@shared/components/Buttons/ButtonMaster";

import { ItemList } from "../../components/ItemList";
import * as S from "./styles";

export const InfoUserScreen = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { data: userData } = useFetchMe();
  const { route } = useBiometricNavigation((store) => {
    return {
      route: store.route,
    };
  });

  const handleLinkNavigation = () => {
    Linking.openURL(links_general.policy);
  };

  const document = useMemo(() => {
    return `***.***.***${userData?.document?.slice(11, 14)}`;
  }, [userData]);

  return (
    <BiometricLayout left right={false}>
      <S.Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <S.WrapperContent>
            <View>
              {route === "finance" ? (
                <S.WrapperHeader>
                  <Wallet />
                  <View style={{ paddingHorizontal: 16 }}>
                    <TypographyTextMaster
                      variant="body"
                      typeWeight="bold"
                      align="center"
                      fontSize={theme.fonts.sizes.mediumX}
                      color={theme.colors.gray_l800_d100}
                    >
                      Para solicitar um saque, é necessário verificar sua
                      identidade{" "}
                    </TypographyTextMaster>
                    <S.WrapperInfo>
                      <TypographyTextMaster
                        variant="subtitle"
                        typeWeight="regular"
                        fontSize={theme.fonts.sizes.smallX}
                        color={theme.colors.gray_l700_d200}
                      >
                        Comece agora mesmo
                      </TypographyTextMaster>
                      <S.WrapperFlag>
                        <S.FlagText>4 MIN</S.FlagText>
                      </S.WrapperFlag>
                    </S.WrapperInfo>
                  </View>
                </S.WrapperHeader>
              ) : (
                <S.WrapperHeader>
                  {theme.theme === "light" ? (
                    <ImgValidation />
                  ) : (
                    <ImgValidationDark />
                  )}
                  <View style={{ paddingHorizontal: 16 }}>
                    <TypographyTextMaster
                      variant="body"
                      typeWeight="bold"
                      align="center"
                      fontSize={theme.fonts.sizes.mediumX}
                      color={theme.colors.gray_l800_d100}
                    >
                      Prepare-se, vamos verificar sua identidade
                    </TypographyTextMaster>
                    <S.WrapperInfo>
                      <TypographyTextMaster
                        variant="subtitle"
                        typeWeight="regular"
                        fontSize={theme.fonts.sizes.smallX}
                        color={theme.colors.gray_l700_d200}
                      >
                        Duração aproximada
                      </TypographyTextMaster>
                      <S.WrapperFlag>
                        <S.FlagText>4 MIN</S.FlagText>
                      </S.WrapperFlag>
                    </S.WrapperInfo>
                  </View>
                </S.WrapperHeader>
              )}
            </View>
            <S.Items>
              <ItemList title="Disponha de uma identificação que seja válida e emitida pelo governo" />
              <ItemList
                title={`É necessário que o documento pertença ao titular da conta:  ${document}`}
              />
              <ItemList title="Certifique-se de estar em um ambiente bem iluminado" />
              <ItemList title="Prepare-se para tirar uma selfie e fotos do seu documento de identificação" />
              <ItemList title="Para evitar erros, certifique-se que a imagem do documento esteja legível" />
            </S.Items>
            <View style={{ width: "100%", paddingHorizontal: 24 }}>
              <ButtonMaster
                title="Vamos lá"
                variant="primary"
                size="small"
                onPress={() => navigate("TypeDocument")}
              />
              <S.WrapperFooter>
                <S.Description>
                  O áudio e vídeo da sessão podem ser gravados. Caso tenha
                  dúvidas, acesse a{" "}
                  <S.BtnLink onPress={handleLinkNavigation}>
                    <S.DescriptionLink>
                      Política de Privacidade.
                    </S.DescriptionLink>
                  </S.BtnLink>
                </S.Description>
              </S.WrapperFooter>
            </View>
          </S.WrapperContent>
        </ScrollView>
      </S.Container>
    </BiometricLayout>
  );
};
