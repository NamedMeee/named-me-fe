import { useRouter } from 'next/router';

import { Button } from '@components/common';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/userLoginStore';
import { signUpEmail } from 'pages/api/login/login';
import { loginInputValidation } from 'validation/loginValidation';

export default function SubmitSignUpButton() {
  const router = useRouter();
  const { email, firstPassword, name, password } = useUserLoginStore();
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

  const handleClickSignUpButton = async () => {
    const validationError = checkEmailValidation();

    if (validationError) {
      return;
    }

    try {
      const { token } = await signUpEmail({ email, name, password });

      if (token) {
        sessionStorage.setItem('namedme_token', token);
        router.push('/profile');
      }
    } catch (e: any) {
      alert(`가입 과정에서 문제가 발생하였습니다. ${e}`);
    }
  };

  return (
    <Button
      buttonStyles={'mb-[20px] mt-[42px] w-full'}
      onClick={handleClickSignUpButton}
      text="입력 완료"
    />
  );
}
