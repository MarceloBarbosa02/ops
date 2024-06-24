import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { RefObject } from 'react';
import { Modalize } from 'react-native-modalize';

export type TConfirmWithdrawalProps = {
  refActionSheet: RefObject<Modalize>;
  // refActionSheet: RefObject<BottomSheetModal>;
};

export interface IWithdrawalCreate {
  value: number;
  tax: number;
}
