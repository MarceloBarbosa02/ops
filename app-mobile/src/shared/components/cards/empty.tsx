import { View } from 'react-native';
import { Typography } from '../typography';
import { TCardsProps } from './cards.types';

const EmptyCards = ({ title, children }: TCardsProps) => {
  return (
    <View className="w-full gap-4 bg-gray-50 p-4 rounded-lg">
      <Typography title={title} weight="bold" />
      {children}
    </View>
  );
};

export default EmptyCards;
