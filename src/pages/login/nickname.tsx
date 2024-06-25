import Input from '@components/common/Input';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import SubmitSignUpButton from '@components/login/SubmitSignUpButton';
import {
  getLoginProvider,
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import useGetSessionUserInfo from 'hooks/login/useGetSessionUserInfo';
import useHandleLoginUser from 'hooks/login/useHandleLoginUser';
import useSaveLoginToken from 'hooks/login/useSaveLoginToken';
import { socialSignUp } from 'pages/api/login/socialAuth';

export default function NickName() {
  const provider = getLoginProvider();
  const { email, name, socialId } = useUserLoginStore();
  const { name: nameError } = useUserLoginErrorStore();
  const { handleChangeName } = useHandleLoginUser();

  const saveLoginTokenMoveToHome = useSaveLoginToken();

  const handleClickSignUpButton = async () => {
    try {
      const token = await socialSignUp({
        email,
        name,
        provider,
        socialId,
        serviceRequiredAgreement: true,
      });

      saveLoginTokenMoveToHome(token);
    } catch (e: any) {
      alert(`가입 과정에서 문제가 발생하였습니다. ${e}`);
    }
  };

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
          placeholder="@my_nickname"
          onChange={handleChangeName}
          value={name}
          error={nameError.error}
          errorMessage={nameError.message}
        />
      </div>
      <SubmitSignUpButton onClick={handleClickSignUpButton} />
    </LoginMainLayout>
  );
}
