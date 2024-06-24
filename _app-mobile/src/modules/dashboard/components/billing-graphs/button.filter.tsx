import * as S from './billing-graphs.styles';
import { FilterChartsProps } from './billing-graphs.types';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Typography } from '@/shared/components';

export const ButtonFilter = ({
  active = false,
  title,
  type = 'filter',
  ...rest
}: FilterChartsProps) => {
  const theme = useTheme();

  if (type === 'date') {
    return (
      <S.WrapperButtonDateFilter activeOpacity={0.7} {...rest}>
        <Typography
          title={title}
          style={{ color: active ? theme.gray[50] : theme.gray[600] }}
        />
        <MaterialIcons
          name="keyboard-arrow-down"
          size={20}
          color={theme.blue[600]}
        />
      </S.WrapperButtonDateFilter>
    );
  }

  return (
    <S.WrapperButtonFilter isActive={active} activeOpacity={0.8} {...rest}>
      <Typography
        title={title}
        style={{ color: active ? theme.gray[50] : theme.gray[600] }}
      />
    </S.WrapperButtonFilter>
  );
};
