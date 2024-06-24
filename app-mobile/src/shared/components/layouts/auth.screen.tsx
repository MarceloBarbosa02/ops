import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import { TabsLayoutProps } from './base.screen.types';
import LayoutBaseScreen from './base.screen';
import { Header } from './header';

const LayoutAuthScreen = ({
  children,
  handleNavigateLeft,
}: TabsLayoutProps) => {
  return (
    <LayoutBaseScreen>
      <KeyboardAvoidingView
        className="flex-1"
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Header variant="auth" handleNavigateLeft={handleNavigateLeft} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none"
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View className="flex-1 p-4">{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LayoutBaseScreen>
  );
};

export default LayoutAuthScreen;
