import { View } from 'react-native';
import { ProfileCards } from '../../components';
import { StackScreen } from '@/shared/components';
import { router } from 'expo-router';
import { useProfileHome } from './use-profile-home';

const ProfileScreen = () => {
  const { handleRefresh, handleNavigationBack, isRefreshing } =
    useProfileHome();

  return (
    <StackScreen
      title="Perfil"
      handleNavigateLeft={handleNavigationBack}
      isFetching={isRefreshing}
      handleRefresh={handleRefresh}>
      <View style={{ padding: 24 }}>
        <ProfileCards />
      </View>
    </StackScreen>
  );
};

export default ProfileScreen;
