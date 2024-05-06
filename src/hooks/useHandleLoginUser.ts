import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/userLoginStore';
import { loginInputValidation } from 'validation/loginValidation';

export default function useHandleLoginUser() {
  const {
    setEmail,
    setName,
    setPassword,
    setFirstPassword,
    email,
    name,
    password,
    firstPassword,
  } = useUserLoginStore();

  const { setError } = useUserLoginErrorStore();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('emailError', loginInputValidation('email', email));
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError('nameError', loginInputValidation('name', name));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError('passwordError', loginInputValidation('password', password));
  };

  const handleChangeFirstPassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFirstPassword(e.target.value);
    setError(
      'firstPasswordError',
      loginInputValidation('firstPasswordError', { firstPassword, password }),
    );
  };

  return {
    handleChangeEmail,
    handleChangeName,
    handleChangePassword,
    handleChangeFirstPassword,
  };
}
