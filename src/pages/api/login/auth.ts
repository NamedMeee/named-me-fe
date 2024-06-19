import axios from 'axios';
import {
  PreCheckParamType,
  SignInPayloadType,
  SignUpPayloadType,
} from './type';

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