import Input from '@components/common/Input';
import LoginMainLayout from '@components/layout/LoginMainLayout';
import PageTitleWithLogo from '@components/layout/PageTitleWithLogo';
import SubmitSignUpButton from '@components/login/SubmitSignUpButton';
import {
  useUserLoginErrorStore,
  useUserLoginStore,
} from '@zustand/usersLoginStore';
import useCheckPasswords from 'hooks/useCheckPasswords';
import useHandleLoginUser from 'hooks/useHandleLoginUser';
import useInitLoginUser from 'hooks/useInitLoginUser';

export default function NickName() {
  const { name } = useUserLoginStore();
  const { nameError } = useUserLoginErrorStore();

  const { handleChangeName } = useHandleLoginUser();

  useCheckPasswords();

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
          errorMessage={nameError.errorMessage}
        />
      </div>
      <SubmitSignUpButton />
    </LoginMainLayout>
  );
}
