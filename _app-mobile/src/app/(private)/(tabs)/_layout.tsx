import React from 'react';
import { Tabs } from 'expo-router';
import { useTheme } from 'styled-components/native';

import { ButtonNavigateTabBar } from '@/shared/components';
import { Platform } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const colors = useTheme();
  const { bottom } = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 60 + bottom : RFPercentage(8),
          borderTopColor: colors.gray[300],
          backgroundColor: colors.menu.gray.primary,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <ButtonNavigateTabBar title="Dashboard" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="sales"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <ButtonNavigateTabBar title="Vendas" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="finances"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <ButtonNavigateTabBar title="Finanças" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <ButtonNavigateTabBar title="Mais" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
