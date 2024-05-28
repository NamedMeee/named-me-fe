import { useUserLoginStore } from '@zustand/usersLoginStore';
import { useEffect } from 'react';

export default function useGetSessionUserInfo() {
  const { setEmail, setSocialId, setName, setProfileImage } =
    useUserLoginStore();

  const getSetSessionUserInfo = () => {
    const userData: any = sessionStorage.getItem('socialUserData') ?? '';

    if (userData) {
      setEmail(userData.email);
      setName(userData.name);
      setSocialId(userData.id);
      setProfileImage(userData.image);
    }
  };

  useEffect(() => {
    getSetSessionUserInfo();
  }, []);
}
