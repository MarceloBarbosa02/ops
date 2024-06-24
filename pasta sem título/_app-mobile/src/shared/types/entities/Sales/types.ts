export type TSalesStatusInfo = "success" | "info" | "danger" | "warning";
export type TChargeFrequencyProps =
  | "WEEKLY"
  | "MONTHLY"
  | "QUARTERLY"
  | "SEMIANNUALLY"
  | "ANNUALLY";
export type TPaymentMethodProps = "CREDIT_CARD" | "BANK_SLIP" | "PIX" | "FREE";
export type TStatusSales =
  | "APPROVED"
  | "PENDING"
  | "REFUSED"
  | "CHARGEBACK"
  | "CANCELED"
  | "REFUNDED"
  | "SYSTEM_ERROR";
