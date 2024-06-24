import { useFetchMe } from '@/shared/queries/user';
import { useToggleStore } from '@/shared/store';
import { format } from '@/shared/utils';
import { useMemo } from 'react';

export function useHeaders() {
  const { data: userData } = useFetchMe();
  const { toggle, handleChangeVisible } = useToggleStore((store) => {
    return {
      toggle: store.toggle,
      handleChangeVisible: store.handleChangeVisible,
    };
  });

  const initialName = useMemo(() => {
    return format.initialsName(userData?.name ?? '').split(' ')[0];
  }, [userData?.name]);

  const formattedName = useMemo(() => {
    return format.initialsNameLatter(userData?.name ?? '');
  }, [userData?.name]);

  return {
    toggle,
    initialName,
    formattedName,
    handleChangeVisible,
  };
}
