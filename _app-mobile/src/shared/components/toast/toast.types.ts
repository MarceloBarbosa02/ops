export type TToast = 'success' | 'error' | 'warning' | 'info';

export type TMessageProps = {
  id?: string;
  type?: TToast;
  message?: string;
  delay?: number;
  isSettings?: boolean;
};

export type TOneToastProps = {
  message: TMessageProps;
};

export type TToasContainerProps = {
  messages: TMessageProps[];
};
