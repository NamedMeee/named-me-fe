import { signIn, useSession } from 'next-auth/react';

import { Button } from '@components/common';

import TwitterLogo from '@assets/svgs/TwitterLogo.svg';

export default function TwitterLoginButton() {
  const { data: session } = useSession();

  return (
    <Button
      buttonColor="bg-[#5A9BE7]"
      buttonStyles="mb-[12px]"
      onClick={() => {
        !session && signIn();
      }}
      text={
        <div className="flex items-center justify-center gap-x-[2px]">
          <TwitterLogo className="h-[24px] w-[24px]" />
          트위터로 시작하기
        </div>
      }
    />
  );
}
