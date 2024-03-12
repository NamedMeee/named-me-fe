import { Button } from '@components/common';
import TwitterLogo from '@assets/svgs/TwitterLogo.svg';

export default function TwitterLoginButton() {
  return (
    <Button
      buttonColor="bg-[#5A9BE7]"
      text={
        <div className="flex justify-center items-center gap-x-[2px]">
          <TwitterLogo className="w-[24px] h-[24px]" />
          트위터로 시작하기
        </div>
      }
      buttonStyles="mb-[12px]"
    />
  );
}
