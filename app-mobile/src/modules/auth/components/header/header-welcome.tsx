import { Typography } from '@/shared/components';
import { View, TouchableOpacity } from 'react-native';
import { THeaderProps } from './header.types';
import { LogoWelcomeIcon } from '@/shared/assets/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeaderWelcome = ({ onNavigation, index }: THeaderProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        zIndex: 999,
        position: 'absolute',
        paddingHorizontal: 16,
        marginTop: top + 24,
      }}>
      <View className="w-full flex-row justify-center items-center gap-[12px]">
        <TouchableOpacity
          className={`w-[31%] bg-gray-300 h-[5px] rounded-full ${index === 0 && 'bg-gray-900'}`}
          onPress={() => onNavigation(0)}
        />
        <TouchableOpacity
          className={`w-[31%] bg-gray-300 h-[5px] rounded-full ${index === 1 && 'bg-gray-900'}`}
          onPress={() => onNavigation(1)}
        />
        <TouchableOpacity
          className={`w-[31%] bg-gray-300 h-[5px] rounded-full ${index === 2 && 'bg-gray-900'}`}
          onPress={() => onNavigation(2)}
        />
      </View>
      <View className="flex-row items-center gap-2 mt-4">
        <LogoWelcomeIcon />
        <Typography title="Que legal ter você na Kirvano!" />
      </View>
    </View>
  );
};

export default HeaderWelcome;
