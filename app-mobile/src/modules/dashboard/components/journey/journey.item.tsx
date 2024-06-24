import { Pressable, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Typography } from '@/shared/components';

import { TJourneyCardInfo } from './journey.types';

export const JourneyItemIcon = ({ item }: TJourneyCardInfo) => {
  const { navigate } = useNavigation();

  const handleNavigationModal = () => {
    // navigate("JourneyAchievements");
  };

  return (
    <Pressable
      onPress={handleNavigationModal}
      className={`w-[31.5%] items-center rounded py-3 ${
        item.completed ? 'bg-blue-600' : 'bg-gray-200'
      }`}>
      {item.img}
      <View>
        <Typography
          title={`R$ ${item.label.max}`}
          size="medium"
          weight="bold"
          color={'neutral-bold'}
        />
      </View>
    </Pressable>
  );
};
