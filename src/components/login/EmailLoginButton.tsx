import { Button } from '@components/common';
import { useRouter } from 'next/router';

export default function EmailLoginButton() {
  const router = useRouter();

  return (
    <Button
      border={true}
      buttonColor="bg-white"
      textColor="content_primary"
      text={<div>📧 이메일로 시작하기</div>}
      onClick={() => router.push('/login/email-register')}
    />
  );
}
