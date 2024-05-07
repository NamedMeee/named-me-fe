import { useEffect } from 'react';

import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/userLoginStore';
import { defaultErrorState } from 'validation/loginValidation';

export default function useInitLoginUser() {
  const { setEmail, setFirstPassword, setName, setPassword } =
    useUserLoginStore();
  const { setError } = useUserLoginErrorStore();

  useEffect(() => {
    setEmail('');
    setName('');
    setPassword('');
    setFirstPassword('');

    setError('emailError', defaultErrorState);
    setError('nameError', defaultErrorState);
    setError('passwordError', defaultErrorState);
    setError('firstPasswordError', defaultErrorState);
  }, []);
}
