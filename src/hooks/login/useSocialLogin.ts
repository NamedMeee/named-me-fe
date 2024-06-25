import {
  SESSION_KEY,
  removeSessionStorage,
  setSessionStorage,
} from 'libraries/sessionStorageUtils';
import { useRouter } from 'next/router';
import { socialCheck, socialSignIn } from 'pages/api/login/socialAuth';
import {
  GetSocialUserInfoType,
  SocialProviderType,
} from 'pages/api/login/type';
import useSaveLoginToken from './useSaveLoginToken';

export const useSocialLogin = (provider: SocialProviderType) => {
  const router = useRouter();
  const saveLoginTokenMoveToHome = useSaveLoginToken();

  const setSessionUserData = (userData: GetSocialUserInfoType) => {
    setSessionStorage(SESSION_KEY.SOCIAL_USER_DATA, userData);
  };

  const saveUserInfoMoveTo = (userData: GetSocialUserInfoType, url: string) => {
    setSessionUserData(userData);

    return router.replace(url);
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
        saveLoginTokenMoveToHome(token);
      }
    }

    if (state === 'USER') {
      saveUserInfoMoveTo(userData, '/login/email-integration');
    }

    if (state === 'INVALID') {
      if (provider === 'TWITTER') {
        return saveUserInfoMoveTo(userData, '/login/social-email-register');
      }

      saveUserInfoMoveTo(userData, '/login/nickname');
    }
  };

  return { socialLogin };
};
