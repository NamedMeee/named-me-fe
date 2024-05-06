import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/userLoginStore';
import { loginInputValidation } from 'validation/loginValidation';

export default function useHandleLoginUser() {
  const {
    setEmail,
    firstPassword,
    setFirstPassword,
    setPassword,
    setName,
    email,
    name,
    password,
  } = useUserLoginStore();

  const { setError } = useUserLoginErrorStore();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e);
    setError('emailError', loginInputValidation('email', email));
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e);
    setError('nameError', loginInputValidation('name', name));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e);
    setError('passwordError', loginInputValidation('password', password));
  };

  const handleChangeFirstPassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFirstPassword(e);
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
