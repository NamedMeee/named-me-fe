import { Button } from '@components/common';
import {
  SESSION_KEY,
  removeSessionStorage,
} from 'libraries/sessionStorageUtils';
import { useRouter } from 'next/router';
import { logout } from 'pages/api/login/auth';

export default function LogoutButton() {
  const router = useRouter();

  const handleClickLogout = async () => {
    const result = await logout();

    removeSessionStorage(SESSION_KEY.LOGIN_TOKEN);

    if (result) {
      router.push('/');
    }
  };

  return <Button text={'로그아웃'} onClick={handleClickLogout} />;
}
