import { Button } from '@components/common';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import { SESSION_KEY, setSessionStorage } from 'libraries/sessionStorageUtils';
import { useRouter } from 'next/router';
import { signUpEmail } from 'pages/api/login/auth';
import { loginInputValidation } from 'validation/loginValidation';

export default function SubmitSocialSignUpButton() {
  const router = useRouter();
  const { email, name, password, firstPassword } = useUserLoginStore();
  const { setLoginError } = useUserLoginErrorStore();

  const checkEmailValidation = () => {
    const emailError = loginInputValidation('email', email);
    const passwordError = loginInputValidation('password', password);
    const nameError = loginInputValidation('name', name);
    const firstPasswordError = loginInputValidation(
      'firstPassword',
      firstPassword,
    );

    setLoginError({
      email: emailError,
      firstPassword: firstPasswordError,
      password: passwordError,
      name: nameError,
    });

    return (
      emailError.error ||
      passwordError.error ||
      nameError.error ||
      firstPasswordError.error
    );
  };

  const handleClickSignUpButton = async () => {
    const validationError = checkEmailValidation();

    if (validationError) {
      return;
    }

    try {
      const { token } = await signUpEmail({ email, name, password });

      if (token) {
        setSessionStorage(SESSION_KEY.LOGIN_TOKEN, token);
        router.push('/profile');
      }
    } catch (e: any) {
      alert(`가입 과정에서 문제가 발생하였습니다. ${e}`);
    }
  };

  return (
    <Button
      onClick={handleClickSignUpButton}
      text="입력 완료"
      buttonStyles={'mb-[20px] mt-[42px] w-full'}
    />
  );
}
