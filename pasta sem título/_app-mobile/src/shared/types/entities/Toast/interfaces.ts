import { TToast } from "./types";

export type IMessageProps = {
  id: string;
  type: TToast;
  message?: string;
  delay?: number;
  isSettings?: boolean;
};
