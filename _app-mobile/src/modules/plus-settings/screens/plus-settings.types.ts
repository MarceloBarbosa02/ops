import { Href } from 'expo-router';
import { PressableProps } from 'react-native';

export type TPlusSettingItem = {
  icon: JSX.Element;
  title: string;
  index?: number;
  navigate?: Href<string> | any;
} & PressableProps;
