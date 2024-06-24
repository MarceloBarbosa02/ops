import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useUpdateNicknameCompany } from "@modules/Settings/hooks/useBusiness";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { IdentifierItem } from "@modules/Settings/components/Items/Identifier";
import { useFetchCompanies } from "@shared/hooks/useCompany";
import { useBusinessStore } from "@shared/store/useBusinessStore";
import { InputTextMaster } from "@shared/components/TextFields/InputText";
import { LayoutSettings } from "@modules/Settings/components/LayoutSettings";
import { AlertCard } from "@modules/Settings/components/Cards/Alert";
import { IFormNewBusinessSchema } from "@shared/types/validations/profile";
import { showToast } from "@shared/store/useToastStore";

import * as S from "./styles";

export const EditCompanyScreen = () => {
  const { goBack } = useNavigation();
  const { data: userData } = useFetchMe();
  const { refetch: refetchCompanies } = useFetchCompanies();
  const nicknamePFRef = useRef<TextInput>(null);
  const { companyData } = useBusinessStore((store) => {
    return {
      companyData: store.companyData,
    };
  });
  const { mutate, isLoading } = useUpdateNicknameCompany();
  const { control, setValue, handleSubmit } = useForm<IFormNewBusinessSchema>(
    {}
  );

  const handleCreateCompany = ({ nickname }: IFormNewBusinessSchema) => {
    const payload = {
      uuid: companyData?.uuid,
      data: {
        nickname: nickname,
      },
    };

    mutate(payload, {
      onSuccess() {
        showToast({
          type: "success",
          message: "Negócio atualizado com sucesso!",
        });
        refetchCompanies();
        goBack();
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
    if (companyData?.uuid) {
      setValue("nickname", companyData?.nickname as string);
      nicknamePFRef.current?.focus();
    }
  }, []);

  return (
    <LayoutSettings
      title="Editar negócio"
      submit={handleSubmit(handleCreateCompany)}
      handleNavigateBack={goBack}
      isLoading={isLoading}
    >
      <S.Wrapper>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <S.Container>
            {companyData?.document.length === 11 && (
              <>
                <S.Content>
                  <S.Title>Apelido interno PF</S.Title>
                  <InputTextMaster
                    textRef={nicknamePFRef}
                    control={control}
                    name="nickname"
                    property="Higher"
                    placeholder="Digite um apelido para o negócio"
                    editable={!isLoading}
                  />
                </S.Content>
                <S.Label>Identificação</S.Label>
                <S.Content>
                  <IdentifierItem identifier="Nome" content={userData?.name ?? ''} />
                  <IdentifierItem identifier="Nacionalidade" content="Brasil" />
                  <IdentifierItem identifier="Idioma" content="Português" />
                  <IdentifierItem
                    identifier="CPF"
                    content={userData?.document ?? ''}
                  />
                  <IdentifierItem
                    identifier="Nascimento"
                    content={userData?.birthDate ?? ''}
                  />
                  <IdentifierItem
                    identifier="Telefone"
                    content={userData?.phoneNumber ?? ''}
                  />
                  <IdentifierItem
                    identifier="E-mail"
                    content={userData?.email ?? ''}
                  />
                </S.Content>
                <S.Label>Endereço</S.Label>
                <S.Content>
                  <IdentifierItem
                    identifier="CEP"
                    content={userData?.address.zipCode ?? ''}
                  />
                  <IdentifierItem
                    identifier="País"
                    content={userData?.address.country ?? ''}
                  />
                  <IdentifierItem
                    identifier="Endereço"
                    content={userData?.address.street ?? ''}
                  />
                  <IdentifierItem
                    identifier="Número"
                    content={userData?.address.number ?? ''}
                  />
                  <IdentifierItem
                    identifier="Estado"
                    content={userData?.address.state ?? ''}
                  />
                  <IdentifierItem
                    identifier="Cidade"
                    content={userData?.address.city ?? ''}
                  />
                  <IdentifierItem
                    identifier="Bairro"
                    content={userData?.address.district ?? ''}
                  />
                  <IdentifierItem
                    identifier="Complemento"
                    content={userData?.address.complement ?? ''}
                  />
                </S.Content>
                <S.Content>
                  <S.Label>Pagamento</S.Label>
                  <AlertCard text="Seu recebimento via PIX está atrelado ao CPF informado" />
                </S.Content>
              </>
            )}

            {companyData?.document.length > 11 && (
              <>
                <S.Content>
                  <S.Title>Apelido interno PJ</S.Title>
                  <InputTextMaster
                    textRef={nicknamePFRef}
                    control={control}
                    name="nickname"
                    placeholder="Digite um apelido para o negócio"
                    editable={!isLoading}
                  />
                </S.Content>
                <S.Label>Identificação</S.Label>
                <S.Content>
                  <IdentifierItem
                    identifier="Razão social"
                    content={companyData?.name}
                  />
                  <IdentifierItem
                    identifier="Nome fantasia"
                    content={companyData?.fantasyName}
                  />
                  <IdentifierItem identifier="País" content="Brasil" />
                  <IdentifierItem
                    identifier="Situação cadastral"
                    content="Ativa"
                  />
                </S.Content>
                <S.Label>Endereço</S.Label>
                <S.Content>
                  <IdentifierItem
                    identifier="CEP"
                    content={companyData?.address?.zipCode}
                  />
                  <IdentifierItem
                    identifier="País"
                    content={companyData?.address?.country}
                  />
                  <IdentifierItem
                    identifier="Endereço"
                    content={companyData?.address?.street}
                  />
                  <IdentifierItem
                    identifier="Número"
                    content={companyData?.address?.number || ""}
                  />
                  <IdentifierItem
                    identifier="Estado"
                    content={companyData?.address?.state}
                  />
                  <IdentifierItem
                    identifier="Cidade"
                    content={companyData?.address?.city}
                  />
                  <IdentifierItem
                    identifier="Bairro"
                    content={companyData?.address?.district}
                  />
                  <IdentifierItem
                    identifier="Complemento"
                    content={companyData?.address?.complement || ""}
                  />
                </S.Content>
                <S.Content>
                  <S.Label>Pagamento</S.Label>
                  <AlertCard text="Seu recebimento via PIX está atrelado ao CNPJ informado" />
                </S.Content>
              </>
            )}
          </S.Container>
        </ScrollView>
      </S.Wrapper>
    </LayoutSettings>
  );
};
