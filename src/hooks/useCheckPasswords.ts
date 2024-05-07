import { useEffect } from 'react';

import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/userLoginStore';

export default function useCheckPasswords() {
  const { firstPassword, password } = useUserLoginStore();

  const { setError } = useUserLoginErrorStore();

  useEffect(() => {
    if (password !== firstPassword) {
      setError('firstPasswordError', {
        error: true,
        errorMessage: '비밀번호가 일치하지 않습니다.',
      });
      setError('password', { error: true, errorMessage: '' });

      return;
    }

    setError('firstPasswordError', { error: false, errorMessage: '' });
    setError('password', { error: false, errorMessage: '' });
  }, [password, firstPassword]);
}
