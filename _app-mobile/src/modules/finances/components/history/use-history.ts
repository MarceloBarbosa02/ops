import { useExtractFilter } from '@/shared/queries/extract/extract';
import { useMemo } from 'react';

export const useHistory = () => {
  const { useFetchExtract } = useExtractFilter();
  const { data: extract } = useFetchExtract();

  const dataFormatExtracts = useMemo(() => {
    const pending = extract?.data.filter((withdrawal) => withdrawal.isFuture);
    const done = extract?.data.filter((withdrawal) => !withdrawal.isFuture);

    return { pending, done };
  }, [extract?.data]);

  const isValidPending =
    (dataFormatExtracts?.pending?.length as number) !== 0 &&
    (dataFormatExtracts?.pending?.length as number) < 10;

  const isValidDone =
    (dataFormatExtracts?.done?.length as number) !== 0 &&
    (dataFormatExtracts?.done?.length as number) < 10;

  return {
    isValidDone,
    isValidPending,
    dataFormatExtracts,
  };
};
