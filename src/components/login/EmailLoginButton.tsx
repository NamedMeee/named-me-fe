import { Button } from '@components/common';

export default function EmailLoginButton() {
  return (
    <Button
      border={true}
      buttonColor="bg-white"
      textColor="content_primary"
      text={<div>📧 이메일로 시작하기</div>}
    />
  );
}
