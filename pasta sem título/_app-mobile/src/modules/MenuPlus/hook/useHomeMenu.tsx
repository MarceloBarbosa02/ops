import { RFPercentage } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { RefObject } from "react";
import { Modalize } from "react-native-modalize";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useFetchCompanies } from "@shared/hooks/useCompany";
import { handleSignOut } from "@shared/store/useAuthStore";
import useThemeStore from "@shared/store/useThemeStore";
import { showToast } from "@shared/store/useToastStore";
import { EnumMenuRows } from "@shared/types/enum/EnumMenu";
import Ligth from "@shared/assets/icons/svg/plus/mon.svg";
import Out from "@shared/assets/icons/svg/plus/out.svg";
import Dark from "@shared/assets/icons/svg/plus/sum.svg";
import Bell from "@shared/assets/icons/svg/plus/bell.svg";

interface HomeMenuProps {
  refModal: RefObject<Modalize>;
}

export const useHomeMenu = ({ refModal }: HomeMenuProps) => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { data: allCompanies } = useFetchCompanies();
  const { toggleTheme } = useThemeStore((store) => {
    return {
      toggleTheme: store.toggleTheme,
    };
  });

  const rows_menu = [
    {
      label: EnumMenuRows.SETTINGS,
      icon: (
        <Feather
          name="settings"
          size={RFPercentage(3.3)}
          color={theme.colors.color_neutral_100}
        />
      ),
      navigation: () => handleSettingsNavigation(),
    },
    {
      label: EnumMenuRows.NOTIFICATION,
      icon: (
        <Bell
          fill={theme.colors.color_neutral_100}
          width={RFPercentage(3.3)}
          height={RFPercentage(3.3)}
        />
      ),
      navigation: () => handleNotificationNavigation(),
    },
    {
      label: EnumMenuRows.LIGHT,
      icon:
        theme.theme === "dark" ? (
          <Ligth
            color={theme.colors.color_neutral_100}
            width={RFPercentage(3.3)}
            height={RFPercentage(3.3)}
          />
        ) : (
          <Dark
            stroke={theme.colors.color_neutral_100}
            width={RFPercentage(3.3)}
            height={RFPercentage(3.3)}
          />
        ),
      navigation: () => toggleTheme(),
    },
    {
      label: EnumMenuRows.OUT,
      icon: <Out width={RFPercentage(3.3)} height={RFPercentage(3.3)} />,
      navigation: () => handleSignOut(),
    },
  ];

  const handleShowModalToggleAccount = () => {
    if (allCompanies && allCompanies?.data?.length >= 1) {
      refModal.current?.open();
    } else {
      showToast({
        type: "warning",
        message: "Você precisa registrar pelo menos um negócio ativo",
      });
    }
  };

  const handleSettingsNavigation = () => {
    return navigate("SettingsRoutes");
  };

  const handleNotificationNavigation = () => {
    return navigate("Notification");
  };

  return {
    rows_menu,
    handleShowModalToggleAccount,
  };
};
