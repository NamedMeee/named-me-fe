import {
  SESSION_KEY,
  removeSessionStorage,
} from './../libraries/sessionStorageUtils';
import { setSessionStorage } from 'libraries/sessionStorageUtils';
import { useRouter } from 'next/router';
import { socialCheck, socialSignIn } from 'pages/api/login/socialAuth';
import {
  GetSocialUserInfoType,
  SocialProviderType,
} from 'pages/api/login/type';

export const useSocialLogin = (provider: SocialProviderType) => {
  const router = useRouter();

  const setSessionUserData = (userData: GetSocialUserInfoType) => {
    setSessionStorage(SESSION_KEY.SOCIAL_USER_DATA, userData);
  };

  const moveToNicknameRegister = (userData: GetSocialUserInfoType) => {
    setSessionUserData(userData);

    return router.replace(`/login/nickname`);
  };

  const moveToEmailIntegration = (userData: GetSocialUserInfoType) => {
    setSessionUserData(userData);

    return router.replace(`/login/email-integration`);
  };

  const moveToProfile = (token: string) => {
    setSessionStorage(SESSION_KEY.LOGIN_TOKEN, token);

    return router.replace(`/profile`);
  };

  const socialLogin = async (userData: GetSocialUserInfoType) => {
    const payload = {
      email: userData.email || '',
      provider,
      socialId: userData.id,
    };

    const state = await socialCheck(payload);

    if (state === 'SOCIAL_USER') {
      const token = await socialSignIn({
        provider,
        socialId: userData.id,
      });

      if (token) {
        removeSessionStorage(SESSION_KEY.SOCIAL_USER_DATA);
        moveToProfile(token);
      }
    }

    if (state === 'USER') {
      moveToEmailIntegration(userData);
    }

    if (state === 'INVALID') {
      if (provider === 'TWITTER') {
        return router.replace('/login/social-email-register');
      }

      moveToNicknameRegister(userData);
    }
  };

  return { socialLogin };
};
