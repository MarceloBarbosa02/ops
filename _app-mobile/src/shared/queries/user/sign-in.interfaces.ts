import {
  EnumAdditionalDocumentType,
  EnumBlockCheckout,
  EnumDocumentType,
} from '@/shared/enum';
import {
  TBiometryStatus,
  TContactTypes,
  TTypeUser,
  TVerificationStatus,
} from './sign-in.types';

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
  additionalDocument?: string | null;
  additionalDocumentIssueDate?: string | null;
  additionalDocumentType?: EnumAdditionalDocumentType | null;
  address: IAddress | null;
  allowAppNotification: boolean;
  biometryStatus: TBiometryStatus;
  birthDate: string | null;
  canInvite: boolean;
  companyUuid: string;
  document: string | null;
  documentType?: EnumDocumentType | null;
  email: string;
  emailVerifiedAt: string | null;
  inviteComission: number | null;
  isDocumentUpdated: boolean;
  isUpdated: boolean;
  name: string;
  permissions: string[];
  phoneNumber: string | null;
  phoneNumberVerifiedAt: string | null;
  photo: string | null;
  type: TTypeUser;
  uuid: string;
  requestUpdateContact: Array<{ type: TContactTypes; expireDate: string }>;
  error?: boolean;
  message?: string;
  verificationStatus: TVerificationStatus;
  blockCheckout: EnumBlockCheckout;
  biometryLeadId?: string | null;
  roles?: string[];
  isFormCompleted?: boolean;
  offerValueLimit: number;
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

export interface IFormDataProfileRequest {
  uuid?: string;
  name?: string | null;
  nationality?: string | null;
  language?: string | null;
  documentType?: EnumDocumentType | null;
  document?: string | null;
  additionalDocumentType?: EnumAdditionalDocumentType | null;
  additionalDocument?: string | null;
  additionalDocumentIssueDate?: string | null;
  birthDate?: string | null;
  address?: any;
  acceptTerms?: boolean;
}

export interface ICreateUserDataRequest {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  userTermsReadAt: Date;
  source: string;
}

export interface IRecoverPasswordRequest {
  email: string;
}

export interface IResetPasswordRequest {
  token: string | string[];
  password: string;
  confirmPassword: string;
}

export interface IVerifyCodeRequest {
  uuid: string;
  contactType: 'EMAIL' | 'PHONE' | 'WHATSAPP';
  contact: string;
}

export interface ICreateAccessRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface IUserContactUpdateRequest {
  value: string;
  type: TContactTypes;
  provider: TContactTypes;
  requester: string;
}

export interface IUserContactResponse {
  uuid: string;
  type: TContactTypes;
  provider: TContactTypes;
  message: string;
}
export interface IUserContactUpdateResponse {
  data: IUserContactResponse;
}

export interface IRequestPasswordConfirmCode {
  uuid: string;
  code: string;
}

export interface IRequestPasswordUpdateCode {
  type: string;
  provider: string;
}
