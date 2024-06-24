import { router } from 'expo-router';

import {
  AccessIcon,
  BusinessTabsIcon,
  ExitIcon,
  NotificationIcon,
  ProfileIcon,
  SecurityIcon,
  ThemeIcon,
} from '@/shared/assets/components/plus';
import { EnumMenuRows } from '@/shared/enum';
import { handleSignOut, useThemeStore } from '@/shared/store';

export const usePlusSettings = () => {
  const { toggleTheme, setUserChoseTheme } = useThemeStore();

  const onToggleTheme = () => {
    toggleTheme();
    setUserChoseTheme(true);
  };

  const rows_menu = [
    {
      label: EnumMenuRows.PROFILE,
      icon: <ProfileIcon />,
      navigation: () => router.push('/profile'),
    },
    {
      label: EnumMenuRows.SECURITY,
      icon: <SecurityIcon />,
      navigation: () => router.push('/security'),
    },
    {
      label: EnumMenuRows.BUSINESS,
      icon: <BusinessTabsIcon />,
      navigation: () => router.push('/business'),
    },
    // {
    //   label: 'Lead Capture',
    //   icon: <AccessIcon />,
    //   navigation: () =>
    //     router.push('/(private)/(stack)/(lead-capture)/online-sales'),
    // },
    {
      label: EnumMenuRows.NOTIFICATION,
      icon: <NotificationIcon />,
      navigation: () => router.push('/notification'),
    },
    {
      label: EnumMenuRows.LIGHT,
      icon: <ThemeIcon />,
      navigation: () => onToggleTheme(),
    },
    {
      label: EnumMenuRows.OUT,
      icon: <ExitIcon />,
      navigation: () => handleSignOut(),
    },
  ];

  return {
    rows_menu,
  };
};
