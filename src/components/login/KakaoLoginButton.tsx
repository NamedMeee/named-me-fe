import { Button } from '@components/common';

import KakaoLogo from '@assets/svgs/KakaoLogo.svg';
import { useUserLoginStore } from '@zustand/usersLoginStore';
import { signIn } from 'next-auth/react';

export default function KakaoLoginButton() {
  const { setProvider } = useUserLoginStore();

  const doKakaoLogin = () => {
    setProvider('KAKAO');
    signIn('kakao');
  };

  return (
    <Button
      onClick={doKakaoLogin}
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
