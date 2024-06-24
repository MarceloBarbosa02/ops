export type TBiometryStatus =
  | 'PENDING'
  | 'CAPTURE'
  | 'STORED_DOCUMENTS'
  | 'SENT_DOCUMENTS'
  | 'MEDIATION'
  | 'APPROVED'
  | 'REFUSED'
  | 'ERROR';
export type TTypeUser = 'SELLER' | 'BUYER';
export type TContactTypes = 'EMAIL' | 'PHONE' | 'WHATSAPP' | 'SMS';
export type TVerificationStatus =
  | 'PENDING_DATA'
  | 'VERIFIED_DATA'
  | 'BIOMETRY_PENDING'
  | 'BIOMETRY_UNDER_ANALYSIS'
  | 'BIOMETRY_REFUSED'
  | 'BIOMETRY_APPROVED';
