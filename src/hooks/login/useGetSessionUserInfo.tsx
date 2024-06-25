import { useUserLoginStore } from '@zustand/usersLoginStore';
import { SESSION_KEY, getSessionStorage } from 'libraries/sessionStorageUtils';
import { use, useEffect } from 'react';

export default function useGetSessionUserInfo() {
  const { setLoginState } = useUserLoginStore();
  const { email } = useUserLoginStore();

  const getSetSessionUserInfo = () => {
    const userDataString = getSessionStorage(SESSION_KEY.SOCIAL_USER_DATA);

    if (userDataString) {
      const userData = userDataString;

      // twitter login : 이메일 없는 경우 대응
      setLoginState({
        email: userData.email ?? email,
        name: userData.name.replaceAll(' ', '_'),
        socialId: userData.id,
        profileImage: userData.image,
      });
    }
  };

  useEffect(() => {
    getSetSessionUserInfo();
  }, []);
}
