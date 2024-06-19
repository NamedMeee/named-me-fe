import { useUserLoginStore } from '@zustand/usersLoginStore';
import { useSocialLogin } from 'hooks/useSocialLogin';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { GetSocialUserInfoType } from 'pages/api/login/type';
import { useEffect } from 'react';

export default function SocialLogin() {
  const router = useRouter();
  const { data } = useSession();
  const { provider } = useUserLoginStore();

  const { socialLogin } = useSocialLogin(provider);

  const doSocialLogin = async () => {
    const socialData = data?.user;

    if (!socialData) return;

    const { name, id, image, email } = socialData as GetSocialUserInfoType;

    await socialLogin({
      id,
      email,
      name,
      image,
    });
  };

  useEffect(() => {
    doSocialLogin();
  }, [data]);

  return <></>;
}
