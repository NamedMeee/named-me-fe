import Input from '@components/common/Input';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import SubmitSignUpButton from '@components/login/SubmitSignUpButton';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/userLoginStore';
import { useEffect, useState } from 'react';
import { loginInputValidation } from 'validation/loginValidation';

export default function EmailLogin() {
  //페이지를 들어올 경우 email, name, password state 초기화하기

  const {
    setEmail,
    firstPassword,
    setFirstPassword,
    setPassword,
    setName,
    email,
    name,
    password,
  } = useUserLoginStore();

  const { emailError, firstPasswordError, nameError, passwordError, setError } =
    useUserLoginErrorStore();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e);
    setError('emailError', loginInputValidation('email', email));
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e);
    setError('nameError', loginInputValidation('name', name));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e);
    setError('passwordError', loginInputValidation('password', password));
  };

  const handleChangeFirstPassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFirstPassword(e);
    setError(
      'firstPasswordError',
      loginInputValidation('firstPasswordError', { firstPassword, password }),
    );
  };

  useEffect(() => {
    if (password !== firstPassword) {
      setError('firstPasswordError', {
        error: true,
        errorMessage: '비밀번호가 일치하지 않습니다.',
      });
      setError('password', { error: true, errorMessage: '' });

      return;
    }

    setError('firstPasswordError', { error: false, errorMessage: '' });
    setError('password', { error: false, errorMessage: '' });
  }, [password, firstPassword]);

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
          errorMessage={emailError.errorMessage}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          labelText="아이디 (닉네임)"
          placeholder="@my_nickname"
          onChange={handleChangeName}
          value={name}
          error={nameError.error}
          errorMessage={nameError.errorMessage}
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
          errorMessage={passwordError.errorMessage}
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
          errorMessage={firstPasswordError.errorMessage}
        />
      </div>
      <SubmitSignUpButton />
    </LoginMainLayout>
  );
}
