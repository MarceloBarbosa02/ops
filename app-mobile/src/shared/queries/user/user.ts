import { USER_ME } from '@/shared/constants';
import { api } from '@/shared/services/api';
import { IUserMeDataResponse } from './auth.interfaces';
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/shared/store';

export async function fetchUserData(): Promise<IUserMeDataResponse> {
  const { data } = await api.get(USER_ME);
  return data;
}

export function useFetchMe() {
  const token = useAuthStore((store) => store.token);

  return useQuery({
    queryKey: ['/users', '/me'],
    queryFn: fetchUserData,
    enabled: !!token,
    staleTime: Infinity,
  });
}
