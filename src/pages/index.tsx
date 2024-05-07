import Input from '@components/common/Input';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import EmailLoginButton from '@components/login/EmailLoginButton';
import KakaoLoginButton from '@components/login/KakaoLoginButton';
import SubmitLoginButton from '@components/login/SubmitLoginButton';
import TwitterLoginButton from '@components/login/TwitterLoginButton';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/userLoginStore';
import useHandleLoginUser from 'hooks/useHandleLoginUser';
import useInitLoginUser from 'hooks/useInitLoginUser';

export default function EmailLogin() {
  const { email, password } = useUserLoginStore();
  const { emailError, passwordError } = useUserLoginErrorStore();
  const { handleChangeEmail, handleChangePassword } = useHandleLoginUser();

  useInitLoginUser();

  return (
    <LoginMainLayout>
      <PageTitleWithLogo title="로그인" />
      <div className="mt-[36px]">
        <Input
          error={emailError.error}
          errorMessage={emailError.errorMessage}
          labelText="이메일"
          onChange={handleChangeEmail}
          placeholder="가입하신 이메일을 입력해 주세요."
          value={email}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          error={passwordError.error}
          errorMessage={passwordError.errorMessage}
          labelText="비밀번호"
          onChange={handleChangePassword}
          placeholder="비밀번호를 입력해주세요."
          type="password"
          value={password}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-[320px]">
          <SubmitLoginButton email={email} password={password} />
          <div className="relative mb-[24px] pb-[24px]">
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
