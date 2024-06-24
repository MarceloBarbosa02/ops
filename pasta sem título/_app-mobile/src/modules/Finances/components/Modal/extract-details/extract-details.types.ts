import { ReactNode, RefObject } from "react";
import { Modalize } from "react-native-modalize";

export type TExtractDetailsProps = {
  refActionSheet: RefObject<Modalize>;
};

export type TItemLineProps = {
  label: string;
  title: ReactNode | string;
  out?: "IN" | "OUT" | "";
  canceled?: boolean;
};
