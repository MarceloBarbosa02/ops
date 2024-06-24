import { TouchableOpacity } from "react-native";
import { ptBR } from "./locale-config";
import * as S from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { LocaleConfig } from "react-native-calendars";

export const RenderHeader = (date?: LocaleConfig | undefined) => {
  const theme = useTheme();
  const year = date?.getFullYear();

  return (
    <S.WrapperHeaderCalendar>
      <S.TitleCalendar>
        {ptBR.monthNames[date?.getMonth() as number]} {year}
      </S.TitleCalendar>
      <S.WrapperArrows>
        <TouchableOpacity onPress={() => {}}>
          <Feather
            size={24}
            name="chevron-left"
            color={theme.colors.color_neutral_100}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Feather
            size={24}
            name="chevron-right"
            color={theme.colors.color_neutral_100}
          />
        </TouchableOpacity>
      </S.WrapperArrows>
    </S.WrapperHeaderCalendar>
  );
};
