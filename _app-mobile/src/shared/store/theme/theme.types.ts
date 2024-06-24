export type IThemeHookProps = {
  isDarkMode: boolean;
  userChoseTheme: boolean;
  toggleTheme: () => void;
  setThemeBasedOnSystem: () => void;
  setUserChoseTheme: (chose: boolean) => void;
};
