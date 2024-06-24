import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ReactNode, RefObject } from 'react';

export type TActionSheetProps = {
  title?: string;
  indexOpen?: number;
  children?: ReactNode;
  bottomSheetRef: RefObject<BottomSheetModal>;
};
