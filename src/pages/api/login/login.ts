import axios from 'axios';
import {
  PreCheckParamType,
  SignInPayloadType,
  SignUpPayloadType,
} from './type';

axios.defaults.baseURL = 'http://localhost:3000';

export const signInEmail = async ({ email, password }: SignInPayloadType) => {
  const { data } = await axios.post(`/api/v1/auth/signin`);

  return data;
};

export const signUpEmail = async ({
  email,
  password,
  name,
}: SignUpPayloadType) => {
  const { data } = await axios.post(`/api/v1/auth/signin`);

  return data;
};

export const signUpPreCheck = async ({ email, name }: PreCheckParamType) => {
  const { data } = await axios.get(
    `/api/v1/auth/pre-check?email=${email}&name=${name}}`,
  );

  return data;
};
