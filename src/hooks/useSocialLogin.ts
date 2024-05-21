import { useRouter } from 'next/router';
import { socialCheck, socialLink } from 'pages/api/login/socialAuth';
import {
  GetSocialUserInfoType,
  SocialProviderType,
} from 'pages/api/login/type';

export const useSocialLogin = (provider: SocialProviderType) => {
  const router = useRouter();

  const setSessionUserData = (userData: GetSocialUserInfoType) => {
    sessionStorage.setItem('socialUserData', JSON.stringify(userData));
  };

  const moveToNicknameRegister = (userData: GetSocialUserInfoType) => {
    setSessionUserData(userData);
    router.replace(`/login/nickname`);
  };

  const moveToEmailIntegration = (userData: GetSocialUserInfoType) => {
    setSessionUserData(userData);
    router.replace(`/login/email-register`);
  };

  const socialLogin = async (userData: GetSocialUserInfoType) => {
    const payload = {
      email: userData.email,
      provider,
      socialId: userData.id,
    };

    const state = await socialCheck(payload);

    if (state === 'SOCIAL_USER') {
      return socialLink(payload);
    }

    if (state === 'USER') {
      moveToEmailIntegration(userData);
    }

    if (state === 'INVALID') {
      moveToNicknameRegister(userData);
    }
  };

  return { socialLogin };
};
