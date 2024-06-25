import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import { loginInputValidation } from 'validation/loginValidation';

export default function useHandleLoginUser() {
  const { setLoginState, email, name, password, firstPassword } =
    useUserLoginStore();

  const { setLoginError } = useUserLoginErrorStore();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ email: e.target.value });
    setLoginError({ email: loginInputValidation('email', email) });
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ name: e.target.value });
    setLoginError({ name: loginInputValidation('name', name) });
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ password: e.target.value });
    setLoginError({
      password: loginInputValidation('password', password),
    });
  };

  const handleChangeFirstPassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLoginState({ firstPassword: e.target.value });
    setLoginError({
      firstPassword: loginInputValidation('firstPasswordError', {
        firstPassword,
        password,
      }),
    });
  };

  return {
    handleChangeEmail,
    handleChangeName,
    handleChangePassword,
    handleChangeFirstPassword,
  };
}
