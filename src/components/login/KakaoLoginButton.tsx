import { Button } from '@components/common';

import KakaoLogo from '@assets/svgs/KakaoLogo.svg';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function KakaoLoginButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => signIn('kakao')}
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
