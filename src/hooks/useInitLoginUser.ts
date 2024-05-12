import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import { useEffect } from 'react';
import {
  defaultErrorState
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
