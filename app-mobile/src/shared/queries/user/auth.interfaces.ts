import {
  TBiometryStatus,
  TContactTypes,
  TTypeUser,
  TVerificationStatus,
} from './auth.types';

export interface IUserDataRequest {
  email: string;
  password: string;
  source: string;
}

export interface IUserDataResponse {
  uuid: string;
  name: string;
  email: string;
  permissions: string[];
  type: string;
  token: string;
  refreshToken: string;
  message?: string;
}

export interface IUserMeDataResponse {
  additionalDocument?: string;
  additionalDocumentIssueDate?: string;
  additionalDocumentType?: string;
  address: IAddress;
  allowAppNotification: boolean;
  biometryStatus: TBiometryStatus;
  birthDate: string;
  blockCheckout: string;
  canInvite: boolean;
  companyUuid: string;
  document: string;
  documentType?: string;
  email: string;
  inviteComission: number;
  isDocumentUpdated: boolean;
  isUpdated: boolean;
  name: string;
  permissions: [];
  phoneNumber: string;
  photo: string;
  type: TTypeUser;
  uuid: string;
  requestUpdateContact: Array<{ type: TContactTypes; expireDate: string }>;
  error?: boolean;
  message?: string;
  verificationStatus: TVerificationStatus;
}

export interface IAddress {
  city: string;
  complement: string;
  country: string;
  district: string;
  number: string;
  state: string;
  street: string;
  zip_code: string;
  zipCode: string;
}

export interface ICreateUserDataRequest {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  userTermsReadAt: Date | string;
  source: string;
}

export interface IVerifyCodeRequest {
  uuid: string;
  contactType: 'EMAIL' | 'PHONE' | 'WHATSAPP';
  contact: string;
}
