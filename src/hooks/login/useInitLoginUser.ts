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

  const initLoginInput = () => {
    setLoginState(LoginStateDefault);
    setLoginError(LoginErrorStateDefault);
  };

  useEffect(() => {
    initLoginInput();
  }, []);

  return { initLoginInput };
}
