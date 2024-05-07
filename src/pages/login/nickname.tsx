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

export default function NickName() {
  const { email, firstPassword, name, password } = useUserLoginStore();
  const { nameError, passwordError } = useUserLoginErrorStore();

  const { handleChangeName } = useHandleLoginUser();

  useInitLoginUser();
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
          error={nameError.error}
          errorMessage={nameError.errorMessage}
          labelText="아이디 (닉네임)"
          onChange={handleChangeName}
          placeholder="@my_nickname"
          value={name}
        />
      </div>
      <SubmitSignUpButton />
    </LoginMainLayout>
  );
}
