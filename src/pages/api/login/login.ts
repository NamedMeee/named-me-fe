import axios from 'axios';
import {
  PreCheckParamType,
  SignInPayloadType,
  SignUpPayloadType,
} from './type';

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_HOST}/api/v1`;

export const signInEmail = async ({ email, password }: SignInPayloadType) => {
  const result = await axios.post(`/auth/signin`, { email, password });

  return result.data;
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
  //email, name 각각 or 같이 가능한지 (오류 메세지 처리 되어 있는지 궁금함)
  const result = await axios.get(
    `/auth/pre-check?email=${email}&name=${name}}`,
  );

  return result;
};
