import WarningIcon from "@shared/assets/components/generics/warning-icon";
import * as S from "./alert.styles";
import { useTheme } from "styled-components/native";
import { InfoIcon } from "@modules/SignIn/components/ButtonCustom/styles";
import { useNavigation } from "@react-navigation/native";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { useFetchCompanies } from "@shared/hooks/useCompany";
import { useFetchProducts } from "@shared/hooks/useProductsData";

const Alert = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { data: userData, isFetching: isFetchingUser } = useFetchMe();
  const { data: companiesData, isFetching: isFetchingCompanies } =
    useFetchCompanies();
  const { data: productsData, isFetching: isFetchingProducts } =
    useFetchProducts();

  const profile = userData?.isUpdated as boolean;
  const company = companiesData?.data?.length;
  const product = productsData?.data?.length;

  const isVisible = isFetchingUser || isFetchingCompanies || isFetchingProducts;

  if (isVisible) {
    return <></>;
  }

  const handleNavigationProfile = () => {
    navigate("SettingsRoutes", { screen: "SettingsScreen" });
  };

  const handleNavigationBusiness = () => {
    navigate("SettingsRoutes", { screen: "SettingsScreen" });
  };

  if (!profile) {
    return (
      <S.Wrapper onPress={handleNavigationProfile}>
        <WarningIcon />
        <S.TitleText>
          <S.TitleBold>Etapa 1 de 2: </S.TitleBold>
          para prosseguir, finalize seu cadastro.{"\n"}
          <S.TitleBoldConfig>Configurar perfil.</S.TitleBoldConfig>
        </S.TitleText>
      </S.Wrapper>
    );
  }

  if (company === 0) {
    return (
      <S.Wrapper onPress={handleNavigationBusiness}>
        <WarningIcon />
        <S.TitleText>
          <S.TitleBold>Etapa 2 de 2: </S.TitleBold>
          para prosseguir, finalize seu cadastro.{"\n"}
          <S.TitleBoldConfig>Configurar perfil.</S.TitleBoldConfig>
        </S.TitleText>
      </S.Wrapper>
    );
  }

  // if (product === 0) {
  //   return (
  //     <S.WrapperInfo>
  //       <InfoIcon />
  //       <S.TitleTextInfo>
  //         <S.TitleBold>Seu primeiro produto: </S.TitleBold>
  //         Você receberá um e-mail com as instruções para terminar de configurar
  //         este produto pelo seu computador.
  //       </S.TitleTextInfo>
  //     </S.WrapperInfo>
  //   );
  // }
};

export default Alert;
