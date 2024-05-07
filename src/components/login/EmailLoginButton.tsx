import { useRouter } from 'next/router';

import { Button } from '@components/common';

export default function EmailLoginButton() {
  const router = useRouter();

  return (
    <Button
      border={true}
      buttonColor="bg-white"
      onClick={() => router.push('/login/email-register')}
      text={<div>📧 이메일로 시작하기</div>}
      textColor="content_primary"
    />
  );
}
