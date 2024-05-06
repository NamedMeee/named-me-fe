import { Button } from '@components/common';
import { signInEmail, signUpEmail } from 'pages/api/login/login';
import { useUserLoginStore } from '@zustand/userLoginStore';
import { stat } from 'fs';
import { useRouter } from 'next/router';

export default function SubmitSignUpButton() {
  const router = useRouter();
  const { email, name, password } = useUserLoginStore();

  const handleClickSignUpButton = async () => {
    try {
      const { token, status } = await signUpEmail({ email, name, password });

      if (status === 201) {
        sessionStorage.setItem('namedme_token', token);
        router.push('/profile');
      }
    } catch (e: any) {
      console.log(e);
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
