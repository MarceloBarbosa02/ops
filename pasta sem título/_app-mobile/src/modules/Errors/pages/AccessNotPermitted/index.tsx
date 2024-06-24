import React, { useMemo } from "react";
import { Linking } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import LogoDark from "@shared/assets/images/svg/dark_kirvano.svg";
import LogoLight from "@shared/assets/images/svg/light_kirvano.svg";
import { ButtonDefault } from "@shared/components/Buttons";
import { BodyLayout } from "@shared/components/Layouts";
import { links_general } from "@shared/constants/links";

import * as S from "./styles";

export const AccessNotPermittedScreen = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  const handleNavigation = () => {
    Linking.openURL(links_general.web_app);
  };

  const handleNavigationBack = () => {
    navigate("SignIn");
  };

  const _logo = useMemo(() => {
    if (theme.theme === "dark") {
      return <LogoLight width={200} />;
    } else {
      return <LogoDark width={200} />;
    }
  }, [theme.theme]);

  return (
    <BodyLayout>
      <S.Wrapper>
        <S.Container>
          <S.WrapperImg>{_logo}</S.WrapperImg>
          <S.Content>
            <S.Title>Acesse a Kirvano em um computador</S.Title>
            <S.Description>
              O app é exclusivo para vendedores. Visualize todas as
              funcionalidades com melhor desempenho.
            </S.Description>
            <S.WrapperButton>
              <ButtonDefault
                title="Prosseguir"
                variant="info"
                fontSize="large"
                onPress={handleNavigation}
              />
              <ButtonDefault
                title="Cancelar"
                variant="link"
                fontSize="large"
                onPress={handleNavigationBack}
              />
            </S.WrapperButton>
          </S.Content>
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
