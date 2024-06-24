export const payment_method = [
  {
    id: 0,
    label: "Cartão de crédito",
    reference: "creditCard",
    isActive: false,
  },
  {
    id: 1,
    label: "Boleto",
    reference: "bankSlip",
    isActive: false,
  },
  {
    id: 2,
    label: "Pix",
    reference: "pix",
    isActive: false,
  },
  {
    id: 3,
    label: "Gratuito",
    reference: "free",
    isActive: false,
  },
];

export const status_filter = [
  {
    id: 0,
    label: "Aprovado",
    reference: "approved",
    isActive: false,
  },
  {
    id: 1,
    label: "Pendente",
    reference: "pending",
    isActive: false,
  },
  {
    id: 2,
    label: "Cancelado",
    reference: "expired",
    isActive: false,
  },
  {
    id: 3,
    label: "Recusado",
    reference: "refused",
    isActive: false,
  },
  {
    id: 4,
    label: "Estornado",
    reference: "refunded",
    isActive: false,
  },
  {
    id: 5,
    label: "Chargeback",
    reference: "chargeback",
    isActive: false,
  },
];

export const sale_Status_title = {
  APPROVED: "Aprovada",
  PENDING: "Pendente",
  REFUSED: "Recusada",
  CHARGEBACK: "Chargeback",
  CANCELED: "Cancelada",
  REFUNDED: "Estornada",
  SYSTEM_ERROR: "Erro",

  IN_REVIEW: "Revisão",
  LIQUIDATING: "Liquidando",
  TRANSFERRED: "Aprovado",
  RETURNED: "Devolvido",
};

export const sales = [
  {
    code: "I4B982",
    product: "Masterchef Do Dropshipping Especial 2022 Curso",
    customer: "Maria Luisa",
    createdAt: new Date("24/07/2022"),
    status: "APPROVED",
    brand: "apple",
    value: 200.5,
  },
  {
    code: "I4B983",
    product: "Curso de Inglês",
    customer: "Maria Luisa",
    createdAt: new Date("25/07/2022"),
    status: "REFUSED",
    brand: "amex",
    value: 210.0,
  },
  {
    code: "I4B984",
    product: "Curso de Programação",
    customer: "Maria Luisa",
    createdAt: new Date("26/07/2022"),
    status: "PENDING",
    brand: "apple",
    value: 300.0,
  },
  {
    code: "I4B985",
    product: "Curso de Espanhol",
    customer: "Maria Luisa",
    createdAt: new Date("26/07/2022"),
    status: "CHARGEBACK",
    brand: "apple",
    value: 150.0,
  },
  {
    code: "I4B986",
    product: "Masterchef Do Dropshipping Especial 2022 Curso",
    customer: "Maria Luisa",
    createdAt: new Date("27/07/2022"),
    status: "CANCELED",
    brand: "apple",
    value: 500.0,
  },
  {
    code: "I4B987",
    product: "Masterchef Do Dropshipping Especial 2022 Curso",
    customer: "Maria Luisa",
    createdAt: new Date("27/07/2022"),
    status: "REFUNDED",
    brand: "apple",
    value: 500.0,
  },
  {
    code: "I4B988",
    product: "Masterchef Do Dropshipping Especial 2022 Curso",
    customer: "Maria Luisa",
    createdAt: new Date("27/07/2022"),
    status: "SYSTEM_ERROR",
    brand: "apple",
    value: 500.0,
  },
];

export const origin_filter = [
  {
    id: 1,
    label: "Autoral",
    reference: "PRODUCER",
  },
  {
    id: 2,
    label: "Afiliação",
    reference: "AFFILIATE",
  },
];
