import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getKakaoUserData } from 'apis/kakaoLogin';

export default function KakaoLogin() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      doKakaoLogin();
    }
  }, [code]);

  const socialLogin = async (userData: any) => {
    alert('카카오 로그인 성공!');

    router.replace('/');
  };

  const doKakaoLogin = async () => {
    const userData = await getKakaoUserData(router.query);

    !!userData && socialLogin(userData);
  };

  return <></>;
}
