import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/userLoginStore';
import { useEffect } from 'react';
import {
  defaultErrorState,
  loginInputValidation,
} from 'validation/loginValidation';

export default function useInitLoginUser() {
  const { setEmail, setName, setPassword, setFirstPassword } =
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
