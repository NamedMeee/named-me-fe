import MobileLayout from '@components/layout/MobileLayout';

import KakaoLoginButton from '@components/login/KakaoLoginButton';
import TwitterLoginButton from '@components/login/TwitterLoginButton';
import EmailLoginButton from '@components/login/EmailLoginButton';
import OriginLogo from '@assets/svgs/OriginLogo.svg';
import LoginMainLayout from '@components/layout/LoginMainLayout';

export default function EmailLogin() {
  return (
    <LoginMainLayout>
      <div className="font_headline_thin_md mt-[50px] mb-[16px]">
        자유롭게 꾸미는
        <br />
        나만의 프로필 😎
      </div>
      <div className="mb-[55px]">
        <OriginLogo />
      </div>
      <div className="flex justify-center">
        <div className="w-[320px]">
          <KakaoLoginButton />
          <TwitterLoginButton />
          <EmailLoginButton />
        </div>
      </div>
    </LoginMainLayout>
  );
}
