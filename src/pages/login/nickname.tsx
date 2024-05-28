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
import { socialSignUp } from 'pages/api/login/socialAuth';

export default function NickName() {
  const router = useRouter();
  const { email, name, socialId, provider } = useUserLoginStore();
  const { nameError } = useUserLoginErrorStore();

  const { handleChangeName } = useHandleLoginUser();

  const handleClickSignUpButton = async () => {
    try {
      const { token } = await socialSignUp({
        email,
        userName: name,
        provider,
        socialId,
        serviceRequiredAgreement: true,
      });

      if (token) {
        sessionStorage.setItem('namedme_token', token);
        router.push('/profile');
      }
    } catch (e: any) {
      alert(`가입 과정에서 문제가 발생하였습니다. ${e}`);
    }
  };

  useInitLoginUser();
  useGetSessionUserInfo();

  return (
    <LoginMainLayout>
      <PageTitleWithLogo
        title={
          <div>
            사용할 닉네임을
            <br />
            입력해주세요
          </div>
        }
      />
      <div className="mt-[36px]">
        <Input
          labelText="아이디 (닉네임)"
          placeholder="@my_nickname"
          onChange={handleChangeName}
          value={name}
          error={nameError.error}
          errorMessage={nameError.errorMessage}
        />
      </div>
      <SubmitSignUpButton onClick={handleClickSignUpButton} />
    </LoginMainLayout>
  );
}
