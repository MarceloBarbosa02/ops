import { ReactNode, createContext, useEffect, useRef, useState } from "react";

import { ToasContainer } from "@shared/components/Toasts/ToasContainer";
import { handleSignOut, useAuthStore, useToastStore } from "@shared/store";
import { AppState, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OneSignal } from "react-native-onesignal";
import { useSignInData } from "@shared/hooks";

export interface IStateContext {
  appStateVisible:
    | "active"
    | "background"
    | "inactive"
    | "unknown"
    | "extension";
}

export const StateContext = createContext<IStateContext>({} as IStateContext);

interface IProps {
  children: ReactNode;
}

const appId = "2644607d-a870-4bec-8f2f-cb6558048243";

const StateProvider = ({ children }: IProps) => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const { navigate } = useNavigation();
  const { loadDataOff } = useSignInData();
  const { messages } = useToastStore((store) => {
    return {
      messages: store.messages,
    };
  });
  const { handleSetIsSplashShow } = useAuthStore((store) => {
    return {
      handleSetIsSplashShow: store.handleSetIsSplashShow,
    };
  });

  OneSignal.initialize(appId);

  useEffect(() => {
    console.log("loadDataOff");
    loadDataOff();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const doWait = async (ev: any) => {
      if (ev.url.includes("m/email-confirmation")) {
        const hash = ev.url.split("confirmation/")[1];

        handleSetIsSplashShow(true);
        handleSignOut();
        navigate("EmailConfirmation", { token: hash });
        return;
      }
    };
    Linking.addEventListener("url", doWait);
    return () => Linking.removeAllListeners("url");
  }, []);

  return (
    <StateContext.Provider value={{ appStateVisible }}>
      {children}
      {messages && <ToasContainer messages={messages} />}
    </StateContext.Provider>
  );
};

export { StateProvider };
