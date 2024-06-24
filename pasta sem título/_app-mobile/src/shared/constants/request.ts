export const BALANCES = "/companies/balances";
export const COMPANIES = "/companies?pageSize=99&page=1";
export const COMPANIES_ONE = "/companies";

export const CONVERSION = "/sales/conversion";
export const LIST_SALES = (param: string) => `/sales${param}`;
export const SALES_CHARTS = (quantity_days: number) =>
  `/sales/chart?days=${quantity_days}`;
export const TOTALS = (param: string) => `/sales/totals${param}`;
export const COMPANIES_CHECK = (cnpj: string) => `/companies/check/${cnpj}`;
export const COMPANIES_REGISTER = "/companies";

export const USERS = "/users";
export const USER_LOGIN = "/users/login";
export const USER_ME = "/users/me";
export const USER_REGISTER = "/users/register";
export const USER_PHOTO = "/users/update-photo";
export const CHANGE_PASSWORD = "/users/change-password";
export const TOGGLE_COMPANIES = "/users/company-default";
export const NOTIFICATION = "/users/allow-app-notification";
export const RESET_PASSWORD = "/users/reset-password";
export const RECOVERY_PASSWORD = "/users/recover-password";
export const RESEND_EMAIL = "/users/resend-email-validation";
export const SEND_CODE = (uuid: string) =>
  `/users/register/${uuid}/contact-validation`;
export const VALID_CODE = (uuid: string) =>
  `/users/register/tokens/${uuid}/validate`;
export const VALID_EMAIL = (uuid: string) =>
  `/users/register/tokens/${uuid}/validate-email`;
export const ALLOW_CONTACT = (uuid: string) =>
  `/users/register/${uuid}/allow-contact`;
export const USER_RECEIVED_SMS = "/user/contact-update/send-code";
export const USER_VALIDATE_CODE = "/user/contact-update/confirm";
export const USER_VALIDATE_EMAIL = (uuid: string) =>
  `/user/contact-update/email-validation/${uuid}`;
export const USER_VALIDATE_LINK = (uuid: string) =>
  `/user/contact-update/email-validation/${uuid}`;
export const USER_INVITE_CODE = (inviteCode: string) =>
  `/invitation/verify/${inviteCode}`;

export const PRODUCTSS = "/products?pageSize=100&size=1";
export const PRODUCTS = "/products/sold";

export const TRANSFER = (params: string) => `/transfers${params}`;
export const TRANSFER_DETAIL = (uuid: string) => `/transfers/${uuid}`;
export const TRANSFER_EXPORT = (params: string) => `/transfers/export${params}`;

export const WITHDRAWAL = "/withdrawals";
export const WITHDRAWALS = (page: number, pageSize: number) =>
  `/withdrawals?page=${page}&pageSize=${pageSize}`;

export const BIOMETRY = "/biometry/save-document";
