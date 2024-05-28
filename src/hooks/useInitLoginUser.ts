import {
  LoginErrorStateDefault,
  LoginStateDefault,
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import { useEffect } from 'react';

export default function useInitLoginUser() {
  const { setLoginState } = useUserLoginStore();
  const { setLoginError } = useUserLoginErrorStore();

  useEffect(() => {
    setLoginState(LoginStateDefault);
    setLoginError(LoginErrorStateDefault);
  }, []);
}
