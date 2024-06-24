import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import logo_dark from "@shared/assets/images/png/log_dark.png";
import logo from "@shared/assets/images/png/log_light.png";
import { useFetchAllowContact } from "@modules/SignIn/hooks/useRegisterUser";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { BodyLayout } from "@shared/components/Layouts";
import { Checkbox } from "@shared/components/Selects/Checkbox";
import { ButtonDefault } from "@shared/components/Buttons/Default";
import { showToast } from "@shared/store/useToastStore";

import * as S from "./styles";

export const ValidationPhoneScreen = () => {
  const theme = useTheme();
  const [check, setCheck] = useState<boolean>(true);
  const { mutate } = useFetchAllowContact();
  const { navigate } = useNavigation();
  const { currentUser, selectedDDI, uuidRegister } = useCurrentUserStore(
    (store) => {
      return {
        currentUser: store.currentUser,
        selectedDDI: store.selectedDDI,
        uuidRegister: store.uuidRegister,
      };
    }
  );

  const handleFetchAllowContact = () => {
    const payload = {
      uuid: uuidRegister,
      allowContact: check,
    };

    mutate(payload, {
      onSuccess: () => {
        navigate("ConfirmEmail");
        showToast({
          type: "success",
          message: "Preferência de contato salva com sucesso.",
        });
      },
      onError(error: any) {
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  const handleChangeCheck = () => {
    setCheck((prev) => !prev);
  };

  return (
    <BodyLayout routeParam={() => {}}>
      <S.Wrapper>
        <S.Container>
          {theme.theme === "dark" ? (
            <S.ImgLogo source={logo} resizeMode="contain" />
          ) : (
            <S.ImgLogo source={logo_dark} resizeMode="contain" />
          )}
          <S.Form>
            <S.Title>Validamos seu contato</S.Title>
            <S.TitlePhone>{`+${selectedDDI.dialCode} ${currentUser.phone}`}</S.TitlePhone>

            <S.Description>
              Servirá para você recuperar sua conta e que possamos confirmar sua
              identidade caso necessário.
            </S.Description>

            <S.ContentCard>
              <Checkbox
                onPress={handleChangeCheck}
                active={check}
                title="Aceito que falem comigo via WhatsApp e/ou SMS neste número"
              />
            </S.ContentCard>

            <ButtonDefault
              onPress={() => handleFetchAllowContact()}
              variant="info"
              title="Continuar"
            />
          </S.Form>
        </S.Container>
      </S.Wrapper>
    </BodyLayout>
  );
};
