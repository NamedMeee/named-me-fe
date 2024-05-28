import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import { useRouter } from 'next/router';
import { loginInputValidation } from 'validation/loginValidation';

export default function useEmailSignUpValidation() {
  const router = useRouter();
  const { email, name, password, firstPassword } = useUserLoginStore();
  const { setError } = useUserLoginErrorStore();

  const checkEmailValidation = () => {
    const emailError = loginInputValidation('email', email);
    const passwordError = loginInputValidation('password', password);
    const nameError = loginInputValidation('name', name);
    const firstPasswordError = loginInputValidation(
      'firstPassword',
      firstPassword,
    );

    setError('emailError', emailError);
    setError('firstPasswordError', firstPasswordError);
    setError('passwordError', passwordError);
    setError('nameError', nameError);

    return (
      emailError.error ||
      passwordError.error ||
      nameError.error ||
      firstPasswordError.error
    );
  };

  return checkEmailValidation;
}
