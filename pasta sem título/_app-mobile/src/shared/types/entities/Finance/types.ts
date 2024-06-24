export type TCategoryExtract =
  | "AD_HOC"
  | "CHARGEBACK"
  | "COMISSION"
  | "REFUND"
  | "TAX"
  | "WITHDRAWAL";

export type TTypeTransaction = "IN" | "OUT";

export type TCategoryParams =
  | "adjust"
  | "chargeback"
  | "comission"
  | "refunded"
  | "taxas"
  | "withdrawal";

export type TStatusWithdrawal =
  | "PENDING"
  | "IN_REVIEW"
  | "LIQUIDATING"
  | "TRANSFERRED"
  | "REFUSED"
  | "RETURNED";
