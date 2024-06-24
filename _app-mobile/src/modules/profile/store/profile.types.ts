export type TContactContextProps = {
  type: 'PHONE' | 'EMAIL';
  phone: string;
  email: string;
  uuid: string;
  setToggleType: (type: 'PHONE' | 'EMAIL') => void;
  setTogglePhone: (phone: string) => void;
  setToggleEmail: (email: string) => void;
  setToggleUUID: (uuid: string) => void;
};
