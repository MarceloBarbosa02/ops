export type TTypeUser = "SELLER" | "BUYER";
export type TVerificationStatus =
  | "PENDING_DATA"
  | "VERIFIED_DATA"
  | "BIOMETRY_PENDING"
  | "BIOMETRY_UNDER_ANALYSIS"
  | "BIOMETRY_REFUSED"
  | "BIOMETRY_APPROVED";
export type TBiometryStatus =
  | "PENDING"
  | "CAPTURE"
  | "STORED_DOCUMENTS"
  | "SENT_DOCUMENTS"
  | "MEDIATION"
  | "APPROVED"
  | "REFUSED"
  | "ERROR";
export type TContactTypes = "EMAIL" | "PHONE" | "WHATSAPP" | "SMS";
export type TOptionSelectMain = "Login" | "Nova conta";
