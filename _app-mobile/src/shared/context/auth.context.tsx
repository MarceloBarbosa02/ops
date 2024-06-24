import { ReactNode, createContext, useEffect } from 'react';
import { Linking } from 'react-native';

import { useDeepLink } from '../hooks/use-deep-link';
import { useSignInData } from '../hooks/use-sign-in-data';
import { useFocusEffect } from 'expo-router';
import { useAuthStore, useCompanyStore } from '../store';
import { useFetchCompanies } from '../queries';
import { ICompany } from '../store/company/company.interfaces';

export const AuthContext = createContext({});

interface IProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: IProps) => {
  const { data: companiesData } = useFetchCompanies();
  const { handleRedirectDeepLink } = useDeepLink();
  const { loadDataOff } = useSignInData();
  const { setCurrentCompany } = useCompanyStore((store) => {
    return {
      setCurrentCompany: store.setCurrentCompany,
    };
  });
  const { token } = useAuthStore((store) => {
    return {
      token: store.token,
    };
  });

  useFocusEffect(() => {
    const onReceiveURL = ({ url }: { url: string }) => {
      setTimeout(() => {
        handleRedirectDeepLink(url);
      }, 100);
    };

    const subscription = Linking.addEventListener('url', onReceiveURL);

    return () => {
      subscription.remove();
    };
  });

  useEffect(() => {
    if (token && companiesData?.data) {
      setCurrentCompany(
        companiesData.data.filter((company: ICompany) => company?.isDefault)[0]
      );
      return;
    }
    setCurrentCompany({} as ICompany);
  }, [token, companiesData]);

  useEffect(() => {
    loadDataOff();
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
