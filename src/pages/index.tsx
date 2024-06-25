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
} from '@zustand/usersLoginStore';
import useHandleLoginUser from 'hooks/login/useHandleLoginUser';
import useInitLoginUser from 'hooks/login/useInitLoginUser';

export default function EmailLogin() {
  const { email, password } = useUserLoginStore();
  const { email: emailError, password: passwordError } =
    useUserLoginErrorStore();
  const { handleChangeEmail, handleChangePassword } = useHandleLoginUser();

  useInitLoginUser();

  return (
    <LoginMainLayout>
      <PageTitleWithLogo title="로그인" />
      <div className="mt-[36px]">
        <Input
          value={email}
          onChange={handleChangeEmail}
          labelText="이메일"
          placeholder="가입하신 이메일을 입력해 주세요."
          error={emailError.error}
          errorMessage={emailError.message}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          value={password}
          onChange={handleChangePassword}
          labelText="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          error={passwordError.error}
          errorMessage={passwordError.message}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-[320px]">
          <SubmitLoginButton email={email} password={password} />
          <div className="relative mb-[24px] pb-[24px]">
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
    </LoginMainLayout>
  );
}
