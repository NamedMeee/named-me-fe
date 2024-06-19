import Input from '@components/common/Input';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import SubmitSignUpButton from '@components/login/SubmitSignUpButton';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import useGetSessionUserInfo from 'hooks/useGetSessionUserInfo';
import useHandleLoginUser from 'hooks/useHandleLoginUser';
import useInitLoginUser from 'hooks/useInitLoginUser';
import { useRouter } from 'next/router';

export default function SocialEmailRegister() {
  const router = useRouter();
  const { email } = useUserLoginStore();
  const { email: emailError } = useUserLoginErrorStore();

  const { handleChangeEmail } = useHandleLoginUser();

  const handleClickNextButton = () => {
    router.push('/login/nickname');
  };

  useInitLoginUser();
  useGetSessionUserInfo();

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
      <SubmitSignUpButton
        buttonText="다음 단계로"
        onClick={handleClickNextButton}
      />
    </LoginMainLayout>
  );
}
