import { View } from 'react-native';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';

import { useFetchMe } from '@/shared/queries/user';
import { BLUR_HASH } from '@/shared/constants/generic';
import PencilIcon from '@/shared/assets/components/generics/pencil';
import { useAvatar } from './use-profile.avatar';

import * as S from './profile.avatar.styles';
import { useTheme } from 'styled-components/native';
import { Typography } from '@/shared/components';
import { format } from '@/shared/utils';

const ProfileAvatar = () => {
  const theme = useTheme();
  const { data: dataUser } = useFetchMe();
  const { handlePickImage } = useAvatar();

  return (
    <S.Wrapper>
      {dataUser?.photo ? (
        <View>
          <Image
            source={`${dataUser?.photo}`}
            placeholder={BLUR_HASH}
            contentFit="cover"
            transition={1000}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: theme.blue[600],
            }}
          />
          <S.ButtonToggle onPress={handlePickImage}>
            <PencilIcon />
          </S.ButtonToggle>
        </View>
      ) : (
        <View>
          <S.Flag>
            <Typography
              title={format.initialsNameLatter(String(dataUser?.name))}
              weight="bold"
              style={{ color: theme.gray[50], fontSize: 48, lineHeight: 64 }}
            />
          </S.Flag>
          <S.ButtonToggle onPress={handlePickImage}>
            <Feather name="plus" size={16} color={theme.blue[600]} />
          </S.ButtonToggle>
        </View>
      )}
    </S.Wrapper>
  );
};

export default ProfileAvatar;
