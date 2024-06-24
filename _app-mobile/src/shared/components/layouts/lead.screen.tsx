import { forwardRef, memo } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Typography } from '../typography';
import { IconLogo } from '@/shared/assets/components';
import { TBaseScreenLayout } from './base-types';
import LayoutBaseScreen from './base.screen';

const LeadsScreen = ({ children, title }: TBaseScreenLayout, ref: any) => {
  return (
    <LayoutBaseScreen>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* <View className="pt-12 flex-1 justify-between">
          <View className="px-6">
            <View className="w-full rounded-lg border border-gray-300 p-6">
              <View className="items-center py-6">
                <IconLogo />
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="none"
                contentContainerStyle={{
                  flexGrow: 1,
                }}
              >
                {children}
              </ScrollView>
            </View>
          </View>
          <View style={{ paddingHorizontal: 24 }}>
            <FooterCard
              titleLeft="Voltar"
              titleRight="Próximo"
              handleOnPressLeft={() => {}}
              handleOnPressRight={() => {}}
            />
          </View>
        </View> */}
      </KeyboardAvoidingView>
    </LayoutBaseScreen>
  );
};

export default memo(forwardRef(LeadsScreen));
