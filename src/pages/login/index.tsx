import Input from '@components/common/Input';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import EmailLoginButton from '@components/login/EmailLoginButton';
import KakaoLoginButton from '@components/login/KakaoLoginButton';
import SubmitLoginButton from '@components/login/SubmitSignUpButton';
import TwitterLoginButton from '@components/login/TwitterLoginButton';

export default function EmailLogin() {
  return (
    <LoginMainLayout>
      <PageTitleWithLogo title="로그인" />
      <div className="mt-[36px]">
        <Input
          labelText="이메일"
          placeholder="가입하신 이메일을 입력해 주세요."
        />
      </div>
      <div className="mt-[24px]">
        <Input
          labelText="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          type="password"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-[320px]">
          <SubmitLoginButton />
          <div className="border_disabled relative mb-[24px] border-b-[1px] pb-[24px]">
            <div className="flex justify-center">
              <div className="content_tertiary font_label_regular_sm absolute w-[118px] w-full bg-white p-4 text-center">
                계정이 없다면 🥹
              </div>
            </div>
          </div>
          <KakaoLoginButton />
          <TwitterLoginButton />
          <EmailLoginButton />
        </div>
      </div>
    </LoginMainLayout>
  );
}
