import React from 'react';
import { Tabs } from 'expo-router';
import { NavigateTabBar } from '@/shared/components';

export const unstable_settings = {
  initialRouteName: 'dash',
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <NavigateTabBar {...props} />}>
      <Tabs.Screen name="dash" />
      <Tabs.Screen name="sales" />
      <Tabs.Screen name="marketplace" />
      <Tabs.Screen name="plus" />
    </Tabs>
  );
}
