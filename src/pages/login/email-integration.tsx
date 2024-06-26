import Input from '@components/common/Input';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import SubmitSignUpButton from '@components/login/SubmitSignUpButton';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import useCheckPasswords from 'hooks/login/useCheckPasswords';
import useHandleLoginUser from 'hooks/login/useHandleLoginUser';
import useInitLoginUser from 'hooks/login/useInitLoginUser';

export default function EmailLogin() {
  const { firstPassword, email, name, password } = useUserLoginStore();
  const {
    email: emailError,
    firstPassword: firstPasswordError,
    name: nameError,
    password: passwordError,
  } = useUserLoginErrorStore();

  const {
    handleChangeEmail,
    handleChangeFirstPassword,
    handleChangeName,
    handleChangePassword,
  } = useHandleLoginUser();

  useInitLoginUser();
  useCheckPasswords();

  const handleClickIntegreatButton = async () => {};

  return (
    <LoginMainLayout>
      <PageTitleWithLogo title="가입하기" />
      <div className="mt-[36px]">
        <Input
          labelText="이메일"
          placeholder="sample@email.com"
          onChange={handleChangeEmail}
          value={email}
          error={emailError.error}
          errorMessage={emailError.message}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          labelText="아이디 (닉네임)"
          placeholder="@my_nickname"
          onChange={handleChangeName}
          value={name}
          error={nameError.error}
          errorMessage={nameError.message}
        />
      </div>
      <div className="mt-[36px]">
        <Input
          labelText="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleChangePassword}
          value={password}
          error={passwordError.error || firstPasswordError.error}
          errorMessage={passwordError.message}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          labelText="비밀번호"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          onChange={handleChangeFirstPassword}
          value={firstPassword}
          error={firstPasswordError.error}
          errorMessage={firstPasswordError.message}
        />
      </div>
      <SubmitSignUpButton onClick={handleClickIntegreatButton} />
    </LoginMainLayout>
  );
}
