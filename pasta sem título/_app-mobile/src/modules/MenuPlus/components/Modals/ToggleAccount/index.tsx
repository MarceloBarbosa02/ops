import React, { RefObject, useContext } from "react";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { showToast } from "@shared/store/useToastStore";
import { useCompanyStore } from "@shared/store/useCompanyStore";
import { useFetchCompanies } from "@shared/hooks/useCompany";
import { useUpdateCompanies } from "@modules/MenuPlus/hook/useCompany";
import { queryClient } from "@shared/services/queryClient";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { CStatus, ICompany } from "@shared/types";

import { ItemAccount } from "../../Items/Account";
import * as S from "./styles";

interface ToggleAccountProps {
  refModal: RefObject<Modalize>;
}

export const ToggleAccountModal = ({ refModal }: ToggleAccountProps) => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { mutate: updateCompany } = useUpdateCompanies();
  const { data: allCompanies } = useFetchCompanies();
  const { data: userData } = useFetchMe();
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });

  const updateCompanyDefault = async (companyUuid: string, active: boolean) => {
    if (!active) {
      updateCompany(companyUuid, {
        onSuccess: () => {
          queryClient.resetQueries();

          refModal.current?.close();
          showToast({
            type: "success",
            message: "Negócio alterado com sucesso",
          });
          navigate("DashboardRoutes");
        },
        onError(error: any) {
          refModal.current?.close();
          showToast({
            type: "error",
            message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
          });
        },
      });
    }
  };
  const handleClose = () => {
    refModal.current?.close();
  };

  return (
    <Portal>
      <Modalize
        ref={refModal}
        adjustToContentHeight
        modalStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: theme.colors.color_neutral_0,
        }}
        overlayStyle={{ overflow: "hidden" }}
        onClosed={() => {}}
      >
        <S.Wrapper>
          <S.WrapperHeader>
            <S.Title>Alterar conta</S.Title>
            <S.WrapperBtnClose onPress={handleClose}>
              <AntDesign
                name="close"
                size={18}
                color={theme.colors.color_neutral_100}
              />
            </S.WrapperBtnClose>
          </S.WrapperHeader>
          <ScrollView>
            <S.WrapperItems>
              {allCompanies?.data?.map((item: ICompany) => (
                <ItemAccount
                  photo={userData?.photo ?? ""}
                  key={item.uuid}
                  avatar_title={item.name}
                  title={item.nickname ?? item.fantasyName}
                  type="toggle"
                  type_acronym={item.type}
                  active={currentCompany?.uuid === item.uuid}
                  onPress={() =>
                    updateCompanyDefault(item.uuid, item.isDefault)
                  }
                  disabled={item.status === CStatus.DISABLED}
                />
              ))}
            </S.WrapperItems>
          </ScrollView>
        </S.Wrapper>
      </Modalize>
    </Portal>
  );
};
