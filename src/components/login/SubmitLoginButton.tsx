import { Button } from '@components/common';
import { useUserLoginErrorStore } from '@zustand/usersLoginStore';
import { useRouter } from 'next/router';
import { signInEmail } from 'pages/api/login/auth';
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
  const { emailError, passwordError, setError } = useUserLoginErrorStore();

  const checkEmailValidation = () => {
    const emailError = loginInputValidation('email', email);
    const passwordError = loginInputValidation('password', password);

    setError('emailError', emailError);
    setError('passwordError', passwordError);

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

      if (token) {
        sessionStorage.setItem('namedme_token', token);
        router.push('/profile');
      }
    } catch (e) {
      alert('로그인 과정에서 문제가 발생하였습니다.');
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
