import { calculateYearDate } from '@/shared/utils';

export function validYearDate(
  valueField: string,
  quantityYearToCompare: number
) {
  if (!valueField) {
    return;
  }

  if (valueField) {
    const formatValueField = valueField.replace(
      /(\d{2})(\d{2})(\d{4})/,
      '$1-$2-$3'
    );
    const [day, month, year] = formatValueField.split('-');

    const quantityDays = calculateYearDate(new Date(`${year}-${month}-${day}`));

    return quantityDays > quantityYearToCompare;
  }
}
