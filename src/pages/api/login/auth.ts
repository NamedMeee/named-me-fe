import axios from 'axios';
import {
  PreCheckParamType,
  SignInPayloadType,
  SignUpPayloadType,
} from './type';
import {
  SESSION_KEY,
  getSessionStorage,
  removeSessionStorage,
} from 'libraries/sessionStorageUtils';
import { authAxios } from '../axios';

export const signInEmail = async ({ email, password }: SignInPayloadType) => {
  const result = await axios.post(`/auth/signin`, { email, password });

  const token = result.data.token;
  const status = result.status;

  return { token, status };
};

export const signUpEmail = async ({
  email,
  password,
  name,
}: SignUpPayloadType) => {
  const result = await axios.post(`/auth/signup`, { email, password, name });

  const token = result.data.token;
  const status = result.status;

  return { token, status };
};

export const signUpPreCheck = async ({ email, name }: PreCheckParamType) => {
  const result = await axios.get(
    `/auth/pre-check?email=${email}&name=${name}}`,
  );

  return result;
};

export const logout = async () => {
  const result = await authAxios.post(`/auth/signout`);

  return result;
};

export const deleteUserAccount = async () => {
  try {
    const { data } = await authAxios.post(`/user/leave`);

    // TODO: 탈퇴 메세지 모달로 별도 처리
    alert('회원 탈퇴가 완료되었습니다.' + data.message);

    removeSessionStorage(SESSION_KEY.USER_TOKEN);

    return true;
  } catch (error) {
    alert('회원 탈퇴 실패. 다시 시도해주세요.');

    return false;
  }
};
