import { Button } from '@components/common';
import { useUserLoginErrorStore } from '@zustand/usersLoginStore';
import useSaveLoginToken from 'hooks/login/useSaveLoginToken';
import { SESSION_KEY, setSessionStorage } from 'libraries/sessionStorageUtils';
import { useRouter } from 'next/router';
import { signInEmail } from 'pages/api/login/auth';
import { use } from 'react';
import { loginInputValidation } from 'validation/loginValidation';

interface SubmitLoginButtonProps {
  email: string;
  password: string;
}

export default function SubmitLoginButton({
  email,
  password,
}: SubmitLoginButtonProps) {
  const router = useRouter();
  const {
    email: emailError,
    password: passwordError,
    setLoginError,
  } = useUserLoginErrorStore();
  const saveLoginTokenMoveToHome = useSaveLoginToken();

  const checkEmailValidation = () => {
    const emailError = loginInputValidation('email', email);
    const passwordError = loginInputValidation('password', password);

    setLoginError({
      email: emailError,
      password: passwordError,
    });

    return emailError.error || passwordError.error;
  };

  const handleClickLoginButton = async () => {
    const validationError = checkEmailValidation();

    if (validationError) {
      return;
    }

    try {
      const { token } = await signInEmail({
        email,
        password,
      });

      saveLoginTokenMoveToHome(token);
    } catch (e: any) {
      const { message, errorCode } = e.response.data;

      if (errorCode) {
        return alert(message);
      }

      alert('로그인 과정 중에 문제가 생겼습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Button
      onClick={handleClickLoginButton}
      text="로그인"
      buttonStyles={'mb-[20px] mt-[48px] w-full'}
    />
  );
}
