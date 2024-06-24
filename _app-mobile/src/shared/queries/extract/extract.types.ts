export type TCategoryExtract =
  | 'AD_HOC'
  | 'CHARGEBACK'
  | 'COMISSION'
  | 'REFUND'
  | 'TAX'
  | 'WITHDRAWAL';

export type TTypeTransaction = 'IN' | 'OUT';

export type TStatusWithdrawal =
  | 'PENDING'
  | 'IN_REVIEW'
  | 'LIQUIDATING'
  | 'TRANSFERRED'
  | 'REFUSED'
  | 'RETURNED';
