import { Button } from '@components/common';

import KakaoLogo from '@assets/svgs/KakaoLogo.svg';
import { useRouter } from 'next/router';

export default function kakaoLoginButton() {
  const router = useRouter();

  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `${location.origin}/login/kakao-login`,
    });
  };

  return (
    <Button
      onClick={kakaoLogin}
      buttonColor="bg-[#FEEA2A]"
      text={
        <div className="flex justify-center items-center gap-x-[6px]">
          <KakaoLogo className="w-[14px] h-[14px]" />
          카카오로 시작하기
        </div>
      }
      buttonStyles="mb-[12px]"
      textColor="text-[#333334]"
    />
  );
}
