import { router } from 'expo-router';
import { handleSignOut } from '../store';

export const useDeepLink = () => {
  const handleRedirectDeepLink = (url: string) => {
    if (url.includes('email-confirmation')) {
      handleSignOut();
      const hash = url.split('confirmation/')[1];

      router.replace(`/(auth)/email-confirmation/${hash}`);
      return;
    }
    if (url.includes('/contact-update/email-validation/')) {
      const hash = url.split('validation/')[1];

      router.replace(`/(private)/(stack)/email-validation/${hash}`);
      return;
    }
    if (url.includes('/reset-password/')) {
      handleSignOut();
      const hash = url.split('password/')[1];

      router.replace(`/(auth)/reset-password/${hash}`);
      return;
    }
  };

  return {
    handleRedirectDeepLink,
  };
};
