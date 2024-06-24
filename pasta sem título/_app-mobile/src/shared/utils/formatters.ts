import {
  parse,
  format as formatDate,
  endOfDay,
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  parseISO,
  addDays,
  isToday,
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const removeSpecialCharacters = (value: string): string => {
  return value.replace(/[^\w\s]/gi, "");
};

export const formatSeal = (value: string): string => {
  return value
    .replace(/[^\d]/g, "")
    .replace(/(\d{1})(\d{9})(\d{1})(\d{6})/, "$1 $2 $3 $4");
};

export const formatPhone = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2");
};

export const formatPhoneDDI = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4")
    .replace(/(\d)(\d{4})$/, "$1-$2");
};

export const formatPhoneDDD = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 $2 $3 $4");
};

export const formatCurrencyPtBr = (value: number): string => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatCurrencyMoneyPtBr = (value: number): string => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100);
};

export const valueDateCharts = (
  optionSelect: number,
  label: string,
  value: number
): string => {
  if (optionSelect !== 30) {
    return `${formatDate(parseISO(label), "eeee, d MMM, yyyy", {
      locale: ptBR,
    })}\n ${formatCurrencyPtBr(value)}`;
  } else {
    if (isToday(parseISO(label))) {
      return `${formatDate(parseISO(label), "eeee, d MMM, yyyy", {
        locale: ptBR,
      })}\n ${formatCurrencyPtBr(value)}`;
    } else {
      return `${formatDate(parseISO(label), "d MMM yyyy", {
        locale: ptBR,
      })} + ${formatDate(addDays(parseISO(label), 1), "d MMM yyyy", {
        locale: ptBR,
      })}\n ${formatCurrencyPtBr(value)}`;
    }
  }
};

export const format = {
  money: (rawValue: number) =>
    Number.isInteger(rawValue)
      ? Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(rawValue / 100)
      : "...",

  moneyUnsigned: (rawValue: number) =>
    (rawValue / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),

  cpf: (rawValue: string) =>
    rawValue?.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),

  cnpj: (rawValue: string) =>
    rawValue?.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"),

  onlyNumbers: (rawValue: string) => rawValue?.replace(/[^0-9]+/g, ""),

  initials: (rawValue: string) => {
    const name = rawValue.trim();

    const words = name.split(" ").map((w) => w.trim()) || [];

    const initials = (
      words.length > 1
        ? words[0].substring(0, 1) + words[words.length - 1].substring(0, 1)
        : name.substring(0, 2)
    ).toUpperCase();

    return initials;
  },

  limitarTamanhoString: (string: string, larguraMaxima: number) => {
    const tamanhoMaximo = Math.abs(larguraMaxima / 16);

    if (string?.length > tamanhoMaximo) {
      return `${string?.substring(0, tamanhoMaximo)}...`;
    } else {
      return string;
    }
  },

  obscureEmail: (rawValue: string) => {
    const [name, domain] = rawValue.split("@");
    return `${name[0]}${new Array(name.length - 1).join("*")}${
      name[name.length - 1]
    }@${domain}`;
  },

  formatDateToString: (rawValue: string) =>
    rawValue?.replace(/^(\d{2})(\d{2})(\d{4})/, "$1-$2-$3"),

  capitalize: (rawValue: string) =>
    rawValue.charAt(0).toUpperCase() + rawValue.slice(1),

  zipCode: (rawValue: string) => rawValue?.replace(/^(\d{5})(\d{3})/, "$1-$2"),

  phoneNumber: (rawValue: string) =>
    rawValue?.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4"),

  dateToString: (date: Date, format: string): string => {
    return formatDate(date, format, { locale: ptBR });
  },

  stringToDate: (date: string, format: string): Date => {
    return parse(date, format, new Date());
  },

  timeAgo: (rawValue: Date): string => {
    const today = endOfDay(new Date());

    const years = differenceInYears(today, rawValue);
    const months = differenceInMonths(today, rawValue);
    const weeks = differenceInWeeks(today, rawValue);
    const days = differenceInDays(today, rawValue);

    if (years > 0) {
      return `Há ${years} ${years > 1 ? "anos" : "ano"}`;
    } else if (months > 0) {
      return `Há ${months} ${months > 1 ? "meses" : "mês"}`;
    } else if (weeks > 0) {
      return `Há ${weeks} ${weeks > 1 ? "semanas" : "semana"}`;
    } else if (days > 1) {
      return `Há ${days} dias`;
    } else {
      return days === 1 ? "Ontem" : "Hoje";
    }
  },

  dateFilter: (rawValue: [Date, Date]): string => {
    const startDate = formatDate(rawValue[0], "yyyy-MM-dd");
    const endDate = formatDate(rawValue[1], "yyyy-MM-dd");
    return startDate + "," + endDate;
  },

  valueFilter: (rawValue: string): number | undefined => {
    const value = parseInt(rawValue.replace(/\D/g, ""));
    return value > 0 ? value : undefined;
  },
};
