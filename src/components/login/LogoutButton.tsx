import { Button } from '@components/common';
import { useRouter } from 'next/router';
import { deleteUserAccount } from 'pages/api/login/auth';

export default function LogoutButton() {
  const router = useRouter();

  const handleClickLeave = async () => {
    const result = await deleteUserAccount();

    if (result) {
      // TODO: 회원 탈퇴 완료 페이지로 추후 이동
      router.push('/');
    }
  };

  return <Button text={'탈퇴'} onClick={handleClickLeave} />;
}
