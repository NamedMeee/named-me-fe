import { Button } from '@components/common';
import { signInEmail } from 'pages/api/login/login';

interface SubmitLoginButtonProps {
  email: string;
  password: string;
}

export default function SubmitLoginButton({}) {
  const handleClickLoginButton = () => {
    try {
      const data = signInEmail({ email: 'admin1', password: 'admin1' });
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
