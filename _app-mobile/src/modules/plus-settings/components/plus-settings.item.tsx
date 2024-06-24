import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { router } from 'expo-router';

import { Typography } from '@/shared/components';

import { TPlusSettingItem } from '../screens/plus-settings.types';

import * as S from './plus-settings.styles';

const PlusSettingsItem = ({
  icon,
  title,
  index = 0,
  navigate,
  ...rest
}: TPlusSettingItem) => {
  const colors = useTheme();

  return (
    <>
      {typeof navigate === 'function' ? (
        <S.WrapperItem index={index} onPress={navigate}>
          <S.WrapperItemInfo>
            {icon}
            <Typography
              title={title}
              weight="medium"
              size="small"
              colorValue={title === 'Sair' ? 'danger' : 'neutral-black'}
            />
          </S.WrapperItemInfo>
          <Entypo
            name="chevron-small-right"
            size={24}
            color={colors.gray[900]}
          />
        </S.WrapperItem>
      ) : (
        <S.WrapperItem index={index} onPress={() => router.push(navigate)}>
          <S.WrapperItemInfo>
            {icon}
            <Typography
              title={title}
              weight="medium"
              size="small"
              colorValue={title === 'Sair' ? 'danger' : 'neutral-black'}
            />
          </S.WrapperItemInfo>
          <Entypo
            name="chevron-small-right"
            size={24}
            color={colors.gray[900]}
          />
        </S.WrapperItem>
      )}
    </>
  );
};

export default PlusSettingsItem;
