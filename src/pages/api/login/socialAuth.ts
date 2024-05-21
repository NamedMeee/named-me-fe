import axios from 'axios';
import { SocialCheckType, SocialSignInType, SocialSignUpType } from './type';

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_HOST}/api/v1`;

export const socialSignIn = async (payload: SocialSignInType) => {
  const result = await axios.post(`/social/auth/signin`, { payload });

  return result.data.token;
};

export const socialSignUp = async (payload: SocialSignUpType) => {
  const result = await axios.post(`/social/auth/signup`, { payload });

  return result.data.token;
};

export const socialLink = async (payload: SocialCheckType) => {
  const result = await axios.post(`/social/auth/link`, { payload });

  return result.data.token;
};

export const socialCheck = async (payload: SocialCheckType) => {
  const { email, provider, socialId } = payload;

  const result = await axios.get(
    `/social/auth/check?email=${email}&provider=${provider}&socialId=${socialId}}`,
  );

  return result.data.state;
};
