import { Button } from '@components/common';
import Input from '@components/common/Input';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import useCheckPasswords from 'hooks/useCheckPasswords';
import useHandleLoginUser from 'hooks/useHandleLoginUser';
import useInitLoginUser from 'hooks/useInitLoginUser';
import { extractEmailPart } from 'libraries/stringUtils';

import { useRouter } from 'next/router';

export default function TwitterEmailRegister() {
  const router = useRouter();
  const { email, setLoginState } = useUserLoginStore();
  const { email: emailError } = useUserLoginErrorStore();

  const { handleChangeEmail } = useHandleLoginUser();

  const handleClickNext = () => {
    //if(provider === 'twitter') {
    setLoginState({ name: extractEmailPart(email) });
    router.push('/login/nickname');
  };

  useInitLoginUser();
  useCheckPasswords();

  return (
    <LoginMainLayout>
      <PageTitleWithLogo
        title={
          <div>
            사용할 이메일을
            <br />
            입력해주세요
          </div>
        }
      />
      <div className="mt-[36px]">
        <Input
          placeholder="example@gmail.com"
          onChange={handleChangeEmail}
          value={email}
          error={emailError.error}
          errorMessage={emailError.message}
        />
      </div>
      <Button
        onClick={handleClickNext}
        text="다음 단계로"
        buttonStyles={'mb-[20px] mt-[42px] w-full'}
      />
    </LoginMainLayout>
  );
}
