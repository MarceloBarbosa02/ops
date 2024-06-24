import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { SafeAreaView } from 'react-native';
import { TabsLayoutProps } from './base.screen.types';
import { forwardRef, memo } from 'react';

const LayoutBaseScreen = ({ children }: TabsLayoutProps, ref: any) => {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaView className={'flex-1 bg-gray-50 dark:bg-gray-900'} ref={ref}>
      <StatusBar
        style={colorScheme === 'dark' ? 'light' : 'dark'}
        translucent
      />
      {children}
    </SafeAreaView>
  );
};

export default memo(forwardRef(LayoutBaseScreen));
