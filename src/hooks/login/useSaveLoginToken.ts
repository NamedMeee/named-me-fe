import {
  SESSION_KEY,
  getSessionStorage,
  removeSessionStorage,
  setSessionStorage,
} from 'libraries/sessionStorageUtils';
import { useRouter } from 'next/router';
import useInitLoginUser from './useInitLoginUser';

export default function useSaveLoginToken() {
  const router = useRouter();
  const { initLoginInput } = useInitLoginUser();

  const saveLoginTokenMoveToHome = (token: string) => {
    if (token) {
      const provider = getSessionStorage(SESSION_KEY.LOGIN_PROVIDER);

      if (provider) {
        removeSessionStorage(SESSION_KEY.SOCIAL_USER_DATA);
        removeSessionStorage(SESSION_KEY.LOGIN_PROVIDER);
      }

      setSessionStorage(SESSION_KEY.LOGIN_TOKEN, token);
      initLoginInput();

      return router.push('/profile');
    }
  };

  return saveLoginTokenMoveToHome;
}
