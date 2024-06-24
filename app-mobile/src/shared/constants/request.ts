export const BALANCES = '/companies/balances';
export const BIOMETRY = '/biometry/save-document';

export const COMPANIES_BALANCES = '/companies/balances';
export const COMPANIES = '/companies';
export const COMPANIES_LIST = '/companies?pageSize=999&page=1';
export const COMPANIES_ONE = '/companies';
export const COMPANIES_CHECK = (cnpj: string) => `/companies/check/${cnpj}`;
export const COMPANIES_STATUS = (uuid: string) => `/companies/${uuid}`;
export const COMPANIES_EDIT = (companyUuid: string) =>
  `/companies/${companyUuid}`;
export const COMPANIES_REGISTER = '/companies';
export const COMPANIES_EVALUATION = '/dashboards/companies/valuation';

export const CONVERSION = '/sales/conversion';

export const SALES_CONVERSION = '/sales/conversion';
export const SALES_LIST_SALES = (param: string) => `/sales${param}`;
export const SALES_CHARTS = (quantity_days: number) =>
  `/sales/chart?days=${quantity_days}`;
export const SALES_TOTALS = (param: string) => `/sales/totals${param}`;

export const USERS = '/users';
export const USER_LOGIN = '/users/login';
export const USER_ME = '/users/me';
export const USER_REGISTER = '/users/register';
export const USER_PHOTO = '/users/update-photo';
export const USER_CHANGE_PASSWORD = '/users/change-password';
export const USER_TOGGLE_COMPANIES = '/users/company-default';
export const USER_NOTIFICATION = '/users/allow-app-notification';
export const USER_RESET_PASSWORD = '/users/reset-password';
export const USER_RECOVERY_PASSWORD = '/users/recover-password';
export const USER_RESEND_EMAIL = '/users/resend-email-validation';
export const USER_SEND_CODE = (uuid: string) =>
  `/users/register/${uuid}/contact-validation`;
export const USER_VALID_CODE = (uuid: string) =>
  `/users/register/tokens/${uuid}/validate`;
export const USER_VALID_EMAIL = (uuid: string) =>
  `/users/register/tokens/${uuid}/validate-email`;
export const USER_ALLOW_CONTACT = (uuid: string) =>
  `/users/register/${uuid}/allow-contact`;
export const USER_RECEIVED_SMS = '/user/contact-update/send-code';
export const USER_VALIDATE_CODE = '/user/contact-update/confirm';
export const USER_VALIDATE_EMAIL = (uuid: string) =>
  `/user/contact-update/email-validation/${uuid}`;
export const USER_VALIDATE_LINK = (uuid: string) =>
  `/user/contact-update/email-validation/${uuid}`;
// GET_PRODUCTS = "/marketplace",
// GET_PRODUCT_BY_UUID = "/marketplace/:uuid",
export const MARKETPLACE = (paramsFilter: string) =>
  `/marketplace${paramsFilter}`;
export const MARKETPLACE_SALES = '/marketplace/sales';
export const MARKETPLACE_DETAIL_PRODUCT = (uuid: string) =>
  `/marketplace/${uuid}`;
export const MARKETPLACE_SALES_EXPORT = '/marketplace/sales/export';

export const PRODUCTS = '/products?pageSize=100&size=1';
export const PRODUCTS_SOLD = '/products/sold';

export const TRANSFER = (params: string) => `/transfers${params}`;
export const TRANSFER_DETAIL = (uuid: string) => `/transfers/${uuid}`;
export const TRANSFER_EXPORT = (params: string) => `/transfers/export${params}`;

export const WITHDRAWAL = '/withdrawals';
export const WITHDRAWALS = (page: number, pageSize: number) =>
  `/withdrawals?page=${page}&pageSize=${pageSize}`;
