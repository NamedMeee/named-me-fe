import { getLoginProvider, useUserLoginStore } from '@zustand/usersLoginStore';
import { useSocialLogin } from 'hooks/login/useSocialLogin';
import { get } from 'http';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { GetSocialUserInfoType } from 'pages/api/login/type';
import { useEffect } from 'react';

export default function SocialLogin() {
  const { data } = useSession();
  const provider = getLoginProvider();

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
