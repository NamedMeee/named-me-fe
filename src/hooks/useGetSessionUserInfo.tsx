import { useUserLoginStore } from '@zustand/usersLoginStore';
import { SESSION_KEY, getSessionStorage } from 'libraries/sessionStorageUtils';
import { useEffect } from 'react';

export default function useGetSessionUserInfo() {
  const { setLoginState } = useUserLoginStore();

  const getSetSessionUserInfo = () => {
    const userDataString = getSessionStorage(SESSION_KEY.SOCIAL_USER_DATA);

    if (userDataString) {
      const userData = JSON.parse(userDataString);

      setLoginState({
        email: userData.email,
        name: userData.name,
        socialId: userData.id,
        profileImage: userData.image,
      });
    }
  };

  useEffect(() => {
    getSetSessionUserInfo();
  }, []);
}
