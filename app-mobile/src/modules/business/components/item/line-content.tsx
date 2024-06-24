import { Typography } from '@/shared/components';
import { View } from 'react-native';

export const LineContent = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => {
  return (
    <View className="w-full flex-row">
      <View className="w-2/5">
        <Typography title={label} size="small" weight="bold" />
      </View>
      <View className="w-3/5">
        <Typography title={description} size="small" />
      </View>
    </View>
  );
};
