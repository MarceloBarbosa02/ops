import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from '@/shared/utils/zustand-storage';
import { Appearance } from 'react-native';
import { IThemeHookProps } from './theme.types';
import { EnumStorageSignIn } from '@/shared/enum';

const colorScheme = Appearance.getColorScheme();

export const useThemeStore = create<IThemeHookProps>()(
  persist(
    (set) => ({
      isDarkMode: colorScheme === 'dark',
      userChoseTheme: false,
      setUserChoseTheme: (chose: boolean) =>
        set(() => ({ userChoseTheme: chose })),
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setThemeBasedOnSystem: () =>
        set(() => ({ isDarkMode: Appearance.getColorScheme() === 'dark' })),
    }),
    {
      name: EnumStorageSignIn.THEME,
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
