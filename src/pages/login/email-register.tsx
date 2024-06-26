import Input from '@components/common/Input';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import SubmitSignUpButton from '@components/login/SubmitSignUpButton';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import useCheckPasswords from 'hooks/login/useCheckPasswords';
import useEmailSignUpValidation from 'hooks/login/useEmailSignUpValidation';
import useHandleLoginUser from 'hooks/login/useHandleLoginUser';
import useInitLoginUser from 'hooks/login/useInitLoginUser';
import useSaveLoginToken from 'hooks/login/useSaveLoginToken';

import { SESSION_KEY, setSessionStorage } from 'libraries/sessionStorageUtils';
import { useRouter } from 'next/router';
import { signUpEmail } from 'pages/api/login/auth';

export default function EmailLogin() {
  const router = useRouter();
  const { firstPassword, email, name, password } = useUserLoginStore();
  const {
    email: emailError,
    firstPassword: firstPasswordError,
    name: nameError,
    password: passwordError,
  } = useUserLoginErrorStore();

  const saveLoginTokenMoveToHome = useSaveLoginToken();
  const checkEmailValidation = useEmailSignUpValidation();

  const {
    handleChangeEmail,
    handleChangeFirstPassword,
    handleChangeName,
    handleChangePassword,
  } = useHandleLoginUser();

  useInitLoginUser();
  useCheckPasswords();

  const handleClickSignUpButton = async () => {
    const validationError = checkEmailValidation();

    if (validationError) {
      return;
    }

    try {
      const { token } = await signUpEmail({ email, name, password });

      saveLoginTokenMoveToHome(token);
    } catch (e: any) {
      const { message, errorCode } = e.response.data;

      if (errorCode) {
        return alert(message);
      }

      alert(`가입 과정에서 문제가 발생하였습니다. 다시 시도해주세요.`);
    }
  };

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
      <SubmitSignUpButton onClick={handleClickSignUpButton} />
    </LoginMainLayout>
  );
}
