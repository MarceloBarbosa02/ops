import { Button, Typography } from '@/shared/components';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { useFetchMe } from '@/shared/queries/user';
import { format } from '@/shared/utils';
import { useProfileHome } from '@/modules/profile/screens/home/use-profile-home';

import ProfileCardsItem from './profile.cards.item';
import ProfileSkeleton from './profile.skeleton';
import ProfileAvatar from '../../avatar/profile.avatar';

import * as S from './profile.cards.styles';

const ProfileCards = () => {
  const colors = useTheme();
  const { data: dataUser, isFetching } = useFetchMe();
  const { handleNavigation } = useProfileHome();

  if (isFetching) {
    return <ProfileSkeleton />;
  }

  return (
    <S.Wrapper>
      <ProfileAvatar />
      <View style={{ alignItems: 'center' }}>
        <Typography
          title={`${format.initialsName(`${dataUser?.name}`).split(' ')[0]} ${
            format.initialsName(`${dataUser?.name}`).split(' ')[1] ?? ''
          }`}
          weight="bold"
          variant="body"
          size="large"
        />
        <Typography
          title={format.obscureEmail(`${dataUser?.email}`)}
          size="small"
        />
      </View>
      <View style={{ gap: 16 }}>
        <ProfileCardsItem title="Verificação" description="" />
        <ProfileCardsItem
          title="Documento"
          description={`${dataUser?.document ?? 'Não informado'}`}
        />
        <ProfileCardsItem
          title="Telefone"
          description={`${dataUser?.phoneNumber ?? 'Não informado'}`}
        />
        <ProfileCardsItem title="Idioma" description="Português (BR)" />
      </View>
      <Button
        title="Atualizar perfil"
        size="medium"
        textWeightButton="bold"
        endContent={
          <Entypo
            name="chevron-small-right"
            size={24}
            color={colors.button.disabled.background}
          />
        }
        onPress={handleNavigation}
      />
    </S.Wrapper>
  );
};

export default ProfileCards;
