import PixIcon from "@shared/assets/icons/svg/payment-methods/badge-pix.svg";
import BilletBankIcon from "@shared/assets/icons/svg/payment-methods/badge-bank-slip.svg";
import CreditCardIcon from "@shared/assets/icons/svg/payment-methods/badge-generic.svg";
import Diamond from "@shared/assets/icons/svg/payment-methods/diamond.svg";

export const methodsBadges = {
  pix: <PixIcon />,
  free: <Diamond width={24} height={24} />,
  bank_slip: <BilletBankIcon width={18} height={18} />,
  generic: <Diamond width={24} height={24} />,
  amex: <CreditCardIcon width={24} height={24} />,
  apple: <CreditCardIcon width={24} height={24} />,
  bitcoin: <CreditCardIcon width={24} height={24} />,
  diners: <CreditCardIcon width={24} height={24} />,
  elo: <CreditCardIcon width={24} height={24} />,
  gpay: <CreditCardIcon width={24} height={24} />,
  maestro: <CreditCardIcon width={24} height={24} />,
  mastercard: <CreditCardIcon width={24} height={24} />,
  paypal: <CreditCardIcon width={24} height={24} />,
  visa: <CreditCardIcon width={24} height={24} />,
  credit_card: <CreditCardIcon width={24} height={24} />,
};
