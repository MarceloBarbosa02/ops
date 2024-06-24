import {
  EnumAdditionalDocumentType,
  EnumDocumentType,
} from "@shared/types/validations/profile";
import {
  TBiometryStatus,
  TContactTypes,
  TTypeUser,
  TVerificationStatus,
} from "./types";

export interface IUser {
  uuid: string;
  name: string;
  email: string;
  permissions: string[];
  registerDate: string;
  roles: string[];
  address: any;
  birthDate: string;
  phoneNumber: string;
  document: string;
  photo: string;
  isUpdated: boolean;
  type: TTypeUser;
  companyUuid?: string;
}

export interface IUserUpdate {
  name: string;
  email: string;
  nationality: string;
  language: string;
  documentType: string;
  document: string;
  birthDate: string;
  phoneNumber: string;
  additionalDocumentType: string;
  additionalDocument: string;
  additionalDocumentIssueDate: string;
}

export interface IUserUpdatePassword {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export interface ISignInResponse {
  email: string;
  name: string;
  permissions: string[];
  refreshToken: string;
  token: string;
  uuid: string;
}

export interface IStorageProps {
  token: string;
  refreshToken: string;
  uuid: string;
}

export interface IUserData {
  email: string;
  password: string;
  source: string;
}

export interface Address {
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

export interface IUserData {
  email: string;
  password: string;
}

export interface IUserMeDataResponse {
  additionalDocument?: string;
  additionalDocumentIssueDate?: string;
  additionalDocumentType?: string;
  address: Address;
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

export interface ICreateUserDataRequest {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  userTermsReadAt: Date;
}

export interface ICreateUserPayload {
  name: string;
  new_email: string;
  phone: string;
  new_password: string;
  password_confirm: string;
}

export interface IVerifyCodeRequest {
  uuid: string;
  contactType: "EMAIL" | "PHONE" | "WHATSAPP";
  contact: string;
}

// profile

export interface IRequestCheckIfValidCode {
  uuid: string;
  code: string;
}

export interface IAllowContactRequest {
  uuid: string;
  allowContact: boolean;
}

export interface IUserUpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

interface responseCheckIfValidCode {
  uuid: string;
  contactType: string;
  message: string;
  error?: string;
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
  address?: JSON;
  isFormCompleted?: boolean;
}

export interface IUserContactUpdateRequestType {
  value: string;
  type: "PHONE" | "EMAIL";
  provider: TContactTypes;
  requester: string;
}
