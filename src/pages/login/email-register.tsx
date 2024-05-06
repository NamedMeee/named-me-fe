import Input from '@components/common/Input';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import SubmitSignUpButton from '@components/login/SubmitSignUpButton';
import { useUserLoginStore } from '@zustand/userLoginStore';
import { useState } from 'react';

export default function EmailLogin() {
  const { setEmail, setPassword, setName, email, name, password } =
    useUserLoginStore();
  const [firstPassword, setFirstPassword] = useState('');

  const handleChangeFirstPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstPassword(e.target.value);

  return (
    <LoginMainLayout>
      <PageTitleWithLogo title="가입하기" />
      <div className="mt-[36px]">
        <Input
          labelText="이메일"
          placeholder="sample@email.com"
          onChange={setEmail}
          value={email}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          labelText="아이디 (닉네임)"
          placeholder="@my_nickname"
          onChange={setName}
          value={name}
        />
      </div>
      <div className="mt-[36px]">
        <Input
          labelText="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleChangeFirstPassword}
          value={firstPassword}
        />
      </div>
      <div className="mt-[24px]">
        <Input
          labelText="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          onChange={setPassword}
          value={password}
        />
      </div>
      <SubmitSignUpButton />
    </LoginMainLayout>
  );
}
