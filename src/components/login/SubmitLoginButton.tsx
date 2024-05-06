import { Button } from '@components/common';
import { useRouter } from 'next/router';
import { signInEmail } from 'pages/api/login/login';

interface SubmitLoginButtonProps {
  email: string;
  password: string;
}

export default function SubmitLoginButton({
  email,
  password,
}: SubmitLoginButtonProps) {
  const router = useRouter();

  const handleClickLoginButton = async () => {
    if (!email || !password) {
      return alert('이메일과 비밀번호를 입력해주세요.');
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
