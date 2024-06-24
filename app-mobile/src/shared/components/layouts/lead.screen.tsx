import { forwardRef, memo } from 'react';
import LayoutBaseScreen from './base.screen';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { TabsLayoutProps } from './base.screen.types';
import { Typography } from '../typography';
// import { IconLogo } from '@/shared/assets/components';
// import { FooterCard } from '../footer';

const LayoutLeadsScreen = ({ children, title }: TabsLayoutProps, ref: any) => {
  return (
    <LayoutBaseScreen ref={ref}>
      <KeyboardAvoidingView
        className="flex-1"
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View className="pt-12 flex-1 justify-between">
          <View className="px-6">
            <View className="w-full rounded-lg border border-gray-300 p-6">
              <View className="items-center py-6">{/* <IconLogo /> */}</View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="none"
                contentContainerStyle={{
                  flexGrow: 1,
                }}>
                {children}
              </ScrollView>
            </View>
          </View>
          {/* <View className="py-6">
            <FooterCard
              titleLeft="Voltar"
              titleRight="Próximo"
              handleOnPressLeft={() => {}}
              handleOnPressRight={() => {}}
            />
          </View> */}
        </View>
      </KeyboardAvoidingView>
    </LayoutBaseScreen>
  );
};

export default memo(forwardRef(LayoutLeadsScreen));
