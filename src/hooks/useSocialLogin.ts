import { useRouter } from 'next/router';
import { socialCheck, socialSignIn } from 'pages/api/login/socialAuth';
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
    router.replace(`/login/email-integration`);
  };

  const moveToProfile = (token: string) => {
    sessionStorage.setItem('namedme_token', token);
    router.replace(`/profile`);
  };

  const socialLogin = async (userData: GetSocialUserInfoType) => {
    const payload = {
      email: userData.email || '',
      provider,
      socialId: userData.id,
    };

    const state = await socialCheck(payload);

    if (state === 'SOCIAL_USER') {
      if (provider === 'TWITTER') {
        router.replace('/login/social-email-register');
      }

      const token = await socialSignIn({
        provider,
        socialId: userData.id,
      });

      if (token) {
        //TODO: 세션 키 관리 따로 빼기
        sessionStorage.removeItem('socialUserData');
        moveToProfile(token);
      }
    }

    if (state === 'USER') {
      //TODO: 계정 연동 우선 보류
      moveToEmailIntegration(userData);
    }

    if (state === 'INVALID') {
      moveToNicknameRegister(userData);
    }
  };

  return { socialLogin };
};
