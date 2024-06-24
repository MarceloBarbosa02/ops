import { createContext, useEffect, useMemo, useRef } from 'react';
import { useAuthStore } from '../store/auth';
import checkVersion from 'react-native-store-version';
import { getVersion } from 'react-native-device-info';
import { AppContextProps } from './context.types';
import { ActionSheet, Button, Typography } from '../components';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Linking, Platform, View } from 'react-native';

export const UpdateContext = createContext({});

const UpdateProvider = ({ children }: AppContextProps) => {
  const refActionSheet = useRef<BottomSheetModal>(null);

  const linkAndroid = useMemo(() => {
    return `https://play.google.com/store/apps/details?id=br.com.app.kirvano`;
  }, []);

  const linkIos = useMemo(() => {
    return `itms-apps://apps.apple.com/jp/app/github/id6450387116`;
  }, []);

  const openGooglePlay = () => {
    Linking.openURL(linkAndroid);
  };

  const openAppStore = async () => {
    Linking.canOpenURL(linkIos)
      .then(
        (supported) => {
          supported && Linking.openURL(linkIos);
        },
        (err) => console.log(err)
      )
      .catch((err) => console.log(err));
  };

  const handleNavigation = () => {
    refActionSheet.current?.dismiss();
    Platform.OS === 'android' ? openGooglePlay() : openAppStore();
  };

  useEffect(() => {
    const init = async () => {
      const version = getVersion();

      try {
        const check = await checkVersion({
          version,
          iosStoreURL: 'https://apps.apple.com/jp/app/github/id6450387116',
          androidStoreURL:
            'https://play.google.com/store/apps/details?id=br.com.app.kirvano',
        });

        if (check.result === 'new') {
          refActionSheet.current?.present();
        }
        console.log(check);
      } catch (e: any) {
        console.log(e.message);
      }
    };

    init();
  }, []);

  return (
    <UpdateContext.Provider value={{}}>
      {children}
      <ActionSheet
        bottomSheetRef={refActionSheet}
        indexOpen={1}
        title="Atualize seu app">
        <View style={{ padding: 24, gap: 24 }}>
          <Typography
            title="Existe uma nova versão do app. Ela pode incluir novas
            funcionalidades e melhorias para sua experiência e segurança."
            weight="medium"
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
              title="Me lembre depois"
              size="small"
              variant="outlined"
              sizeWidth={48}
              onPress={() => refActionSheet.current?.dismiss()}
            />
            <Button
              title="Atualizar agora"
              size="small"
              sizeWidth={48}
              onPress={handleNavigation}
            />
          </View>
        </View>
      </ActionSheet>
    </UpdateContext.Provider>
  );
};

export { UpdateProvider };
