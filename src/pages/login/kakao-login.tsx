import { fetchKakaoAcessToken, getKakaoUserData } from 'apis/kakaoLogin';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
