import { Button } from '@components/common';
import { signInEmail } from 'pages/api/login/login';

export default function SubmitLoginButton() {
  const handleClickLoginButton = () => {
    const data = signInEmail({ email: 'admin1', password: 'admin1' });

    console.log(data);
  };

  return (
    <Button
      onClick={handleClickLoginButton}
      text="로그인"
      buttonStyles={'mb-[20px] mt-[48px] w-full'}
    />
  );
}
