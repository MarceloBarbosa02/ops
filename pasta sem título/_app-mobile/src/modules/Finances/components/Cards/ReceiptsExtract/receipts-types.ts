import { IShowTransfer } from "@shared/types/entities/Finance/interface";
import { ReactNode } from "react";

export type TReceiptExtractProps = {
  data: IShowTransfer;
};

export type TReceiptItemProps = {
  label: string;
  title: ReactNode | string;
};
