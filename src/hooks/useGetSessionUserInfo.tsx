import { useUserLoginStore } from '@zustand/usersLoginStore';
import { useEffect } from 'react';

export default function useGetSessionUserInfo() {
  const { setLoginState } = useUserLoginStore();

  const getSetSessionUserInfo = () => {
    const userData: any = sessionStorage.getItem('socialUserData') ?? '';

    if (userData) {
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
