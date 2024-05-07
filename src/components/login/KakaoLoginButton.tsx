import { useRouter } from 'next/router';

import { Button } from '@components/common';

import KakaoLogo from '@assets/svgs/KakaoLogo.svg';

export default function KakaoLoginButton() {
  const router = useRouter();

  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `${location.origin}/login/kakao-login`,
    });
  };

  return (
    <Button
      buttonColor="bg-[#FEEA2A]"
      buttonStyles="mb-[12px]"
      onClick={kakaoLogin}
      text={
        <div className="flex items-center justify-center gap-x-[6px]">
          <KakaoLogo className="h-[14px] w-[14px]" />
          카카오로 시작하기
        </div>
      }
      textColor="text-[#333334]"
    />
  );
}
