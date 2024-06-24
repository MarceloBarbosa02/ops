import { forwardRef, memo, useCallback, useMemo } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useTheme } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { TActionSheetProps } from './action-sheet.types';

import { Typography } from '../typography';

import * as S from './action-sheet.styles';
import { mergeRefs } from '@/shared/utils';

const ActionSheet = (
  { title = '', children, indexOpen = 0, bottomSheetRef }: TActionSheetProps,
  ref: any
) => {
  const colors = useTheme();
  const snapPoints = useMemo(
    () => ['30%', '40%', '50%', '60%', '70%', '80%', '90%', '95%'],
    []
  );

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    []
  );

  return (
    <BottomSheetModal
      ref={mergeRefs([ref, bottomSheetRef])}
      index={indexOpen || 2}
      snapPoints={snapPoints}
      keyboardBehavior="interactive"
      enablePanDownToClose
      enableOverDrag
      enableHandlePanningGesture
      animateOnMount
      handleIndicatorStyle={{ backgroundColor: colors.gray[400] }}
      backgroundStyle={{ backgroundColor: colors.gray[50] }}
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={{ flex: 1 }}>
        <S.WrapperHeader>
          <Typography title={title} weight={'bold'} size="large" />
          <TouchableOpacity onPress={handleClosePress}>
            <AntDesign name="close" size={18} color={colors.gray[900]} />
          </TouchableOpacity>
        </S.WrapperHeader>
        <BottomSheetView style={{ flex: 1 }}>{children}</BottomSheetView>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default ActionSheet;
