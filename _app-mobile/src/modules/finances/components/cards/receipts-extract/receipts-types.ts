import { IShowTransfer } from '@/shared/queries/extract/extract.interfaces';
import { ReactNode } from 'react';

export type TReceiptExtractProps = {
  data: IShowTransfer;
};

export type TReceiptItemProps = {
  label: string;
  title: ReactNode | string;
};

export type TItemLineProps = {
  label: string;
  description?: string;
  title: ReactNode | string;
  out?: 'IN' | 'OUT' | '';
  canceled?: boolean;
  isCopy?: boolean;
};
