import MobileLayout from '@components/layout/MobileLayout';

import Input from '@components/common/Input';
import SubmitLoginButton from '@components/login/SubmitLoginButton';
import KakaoLoginButton from '@components/login/KakaoLoginButton';
import TwitterLoginButton from '@components/login/TwitterLoginButton';
import EmailLoginButton from '@components/login/EmailLoginButton';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';

export default function EmailLogin() {
  return (
    <MobileLayout>
      <PageTitleWithLogo title="로그인" />
      <div className="flex justify-center mt-[36px]">
        <Input
          width={320}
          labelText="이메일"
          placeholder="가입하신 이메일을 입력해 주세요."
        />
      </div>
      <div className="flex justify-center mt-[24px]">
        <Input
          width={320}
          labelText="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div className="flex justify-center">
        <div className="w-[320px]">
          <div className="relative border-b-[1px] border_disabled mb-[24px] pb-[24px]">
            <SubmitLoginButton />
            <div className="flex justify-center">
              <div className="content_tertiary w-full absolute p-4 bg-white w-[118px] font_label_regular_sm text-center">
                계정이 없다면 🥹
              </div>
            </div>
          </div>
          <KakaoLoginButton />
          <TwitterLoginButton />
          <EmailLoginButton />
        </div>
      </div>
    </MobileLayout>
  );
}
