import { useUserLoginStore } from '@zustand/usersLoginStore';
import { useSocialLogin } from 'hooks/useSocialLogin';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function SocialLogin() {
  const { data } = useSession();
  const { provider } = useUserLoginStore();

  const { socialLogin } = useSocialLogin(provider);

  const doSocialLogin = async () => {
    const socialData = data?.user;

    if (!socialData) return;

    const userData = {
      id: socialData.id || '',
      email: socialData.email || '',
      name: socialData.name || '',
      image: socialData.image || '',
    };

    await socialLogin(userData);
  };

  useEffect(() => {
    doSocialLogin();
  }, [data]);

  return <></>;
}
