import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME = "@theme";

type IThemeHookProps = {
  selectedTheme: "dark" | "light" | "";
  toggleTheme: () => void;
  toggleDefaultTheme: (theme: "dark" | "light") => void;
};

const useThemeStore = create<IThemeHookProps>()(
  persist(
    (set, get) => ({
      selectedTheme: "",
      toggleTheme: () =>
        set(({ selectedTheme }) => ({
          selectedTheme: selectedTheme === "light" ? "dark" : "light",
        })),
      toggleDefaultTheme: (theme) =>
        set({
          selectedTheme: theme,
        }),
    }),
    {
      name: THEME,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useThemeStore;
