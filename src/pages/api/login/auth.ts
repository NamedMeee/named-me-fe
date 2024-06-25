import axios from 'axios';
import {
  PreCheckParamType,
  SignInPayloadType,
  SignUpPayloadType,
} from './type';
import { SESSION_KEY, getSessionStorage } from 'libraries/sessionStorageUtils';

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_HOST}/api/v1`;

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

export const signOut = async () => {
  const result = await axios.post(`/auth/signout`);

  return result;
};

export const deleteUserAccount = async () => {
  try {
    const token = getSessionStorage(SESSION_KEY.USER_TOKEN) ?? '';

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(`/user/leave`, null, config);

    // TODO: 탈퇴 메세지 모달로 별도 처리
    alert('회원 탈퇴가 완료되었습니다.' + data.message);

    return true;
  } catch (error) {
    alert('회원 탈퇴 실패. 다시 시도해주세요.');

    return false;
  }
};
