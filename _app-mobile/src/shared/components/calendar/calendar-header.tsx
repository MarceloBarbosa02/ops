import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { LocaleConfig } from 'react-native-calendars';

import { ptBR } from './locale-config';

import * as S from './styles';

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
          <Feather size={24} name="chevron-left" color={theme.gray[900]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Feather size={24} name="chevron-right" color={theme.gray[900]} />
        </TouchableOpacity>
      </S.WrapperArrows>
    </S.WrapperHeaderCalendar>
  );
};
