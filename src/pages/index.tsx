import Input from '@components/common/Input';
import SubmitLoginButton from '@components/login/SubmitLoginButton';
import KakaoLoginButton from '@components/login/KakaoLoginButton';
import TwitterLoginButton from '@components/login/TwitterLoginButton';
import EmailLoginButton from '@components/login/EmailLoginButton';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import { useEffect, useState } from 'react';
import { useUserLoginErrorStore } from '@zustand/userLoginStore';
import {
  defaultErrorState,
  loginInputValidation,
} from 'validation/loginValidation';

export default function EmailLogin() {
  //페이지를 들어올 경우 email, name, password state 초기화하기

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { emailError, passwordError, setError } = useUserLoginErrorStore();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('emailError', loginInputValidation('email', email));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError('passwordError', loginInputValidation('password', password));
  };

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
          errorMessage={emailError.errorMessage}
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
          errorMessage={passwordError.errorMessage}
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
