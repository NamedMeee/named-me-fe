import Input from '@components/common/Input';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import SubmitSignUpButton from '@components/login/SubmitSignUpButton';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/userLoginStore';
import useCheckPasswords from 'hooks/useCheckPasswords';
import useHandleLoginUser from 'hooks/useHandleLoginUser';
import useInitLoginUser from 'hooks/useInitLoginUser';

export default function EmailLogin() {
  const { email, firstPassword, name, password } = useUserLoginStore();
  const { emailError, firstPasswordError, nameError, passwordError } =
    useUserLoginErrorStore();

  const {
    handleChangeEmail,
    handleChangeFirstPassword,
    handleChangeName,
    handleChangePassword,
  } = useHandleLoginUser();

  useInitLoginUser();
  useCheckPasswords();

  return (
    <LoginMainLayout>
      <PageTitleWithLogo title="가입하기" />
      <div className="mt-[36px]">
        <Input
          error={emailError.error}
          errorMessage={emailError.errorMessage}
          labelText="이메일"
          onChange={handleChangeEmail}
          placeholder="sample@email.com"
          value={email}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          error={nameError.error}
          errorMessage={nameError.errorMessage}
          labelText="아이디 (닉네임)"
          onChange={handleChangeName}
          placeholder="@my_nickname"
          value={name}
        />
      </div>
      <div className="mt-[36px]">
        <Input
          error={passwordError.error || firstPasswordError.error}
          errorMessage={passwordError.errorMessage}
          labelText="비밀번호 확인"
          onChange={handleChangePassword}
          placeholder="비밀번호를 입력해주세요."
          type="password"
          value={password}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          error={firstPasswordError.error}
          errorMessage={firstPasswordError.errorMessage}
          labelText="비밀번호"
          onChange={handleChangeFirstPassword}
          placeholder="비밀번호를 한 번 더 입력해주세요."
          type="password"
          value={firstPassword}
        />
      </div>
      <SubmitSignUpButton />
    </LoginMainLayout>
  );
}
