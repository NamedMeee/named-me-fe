import Input from '@components/common/Input';
import SubmitLoginButton from '@components/login/SubmitSignUpButton';
import KakaoLoginButton from '@components/login/KakaoLoginButton';
import TwitterLoginButton from '@components/login/TwitterLoginButton';
import EmailLoginButton from '@components/login/EmailLoginButton';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import SubmitSignUpButton from '@components/login/SubmitSignUpButton';

export default function EmailLogin() {
  return (
    <LoginMainLayout>
      <PageTitleWithLogo title="가입하기" />
      <div className="mt-[36px]">
        <Input labelText="이메일" placeholder="sample@email.com" />
      </div>
      <div className="mt-[24px]">
        <Input labelText="아이디 (닉네임)" placeholder="@my_nickname" />
      </div>
      <div className="mt-[36px]">
        <Input
          labelText="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div className="mt-[24px]">
        <Input
          labelText="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
        />
      </div>
      <SubmitSignUpButton />
    </LoginMainLayout>
  );
}
