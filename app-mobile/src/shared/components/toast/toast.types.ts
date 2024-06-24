export type TToast = 'success' | 'error' | 'warning' | 'info';

export type TMessageProps = {
  id?: string;
  type?: TToast;
  message?: string;
  delay?: number;
  isSettings?: boolean;
};

export type OneToastProps = {
  message: TMessageProps;
};

export type ToasContainerProps = {
  messages: TMessageProps[];
};
