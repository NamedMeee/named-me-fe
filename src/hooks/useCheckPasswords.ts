import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import { useEffect } from 'react';
import { defaultErrorState } from 'validation/loginValidation';

export default function useCheckPasswords() {
  const { firstPassword, password } = useUserLoginStore();

  const { setLoginError } = useUserLoginErrorStore();

  useEffect(() => {
    if (password !== firstPassword) {
      setLoginError({
        firstPassword: {
          error: true,
          message: '비밀번호가 일치하지 않습니다.',
        },
        password: defaultErrorState,
      });

      return;
    }

    setLoginError({
      firstPassword: defaultErrorState,
      password: defaultErrorState,
    });
  }, [password, firstPassword]);
}
