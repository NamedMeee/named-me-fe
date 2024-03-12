import MobileLayout from '@components/layout/MobileLayout';

import SmallLogo from '@assets/svgs/SmallLogo.svg';
import KakaoLogo from '@assets/svgs/KakaoLogo.svg';
import TwitterLogo from '@assets/svgs/TwitterLogo.svg';

import { Button } from '@components/common';
import Input from '@components/common/Input';

export default function EmailLogin() {
  return (
    <MobileLayout>
      <div className="flex justify-center mt-[50px]">
        <SmallLogo />
      </div>
      <div className="text-center font_display_bold_sm mt-[8px]">로그인</div>
      <div className="flex justify-center mt-[36px]">
        <Input
          width={320}
          labelText="이메일"
          placeholder="가입하신 이메일을 입력해 주세요."
        />
      </div>
      <div className="flex justify-center mt-[24px]">
        <Input
          width={320}
          labelText="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
      <div className="flex justify-center">
        <div className="w-[320px]">
          <div className="relative border-b-[1px] border_disabled mb-[24px] pb-[24px]">
            <Button
              text="로그인"
              buttonStyles={'mb-[20px] mt-[48px] w-[320px]'}
            />
            <div className="flex justify-center">
              <div className="content_tertiary w-full absolute p-4 bg-white w-[118px] font_label_regular_sm text-center">
                계정이 없다면 🥹
              </div>
            </div>
          </div>
          <Button
            buttonColor="bg-[#FEEA2A]"
            text={
              <div className="flex justify-center items-center gap-x-[6px]">
                <KakaoLogo className="w-[14px] h-[14px]" />
                카카오로 시작하기
              </div>
            }
            buttonStyles="mb-[12px]"
            textColor="text-[#333334]"
          />
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
          <Button
            border={true}
            buttonColor="bg-white"
            textColor="content_primary"
            text={<div>📧 이메일로 시작하기</div>}
          />
        </div>
      </div>
    </MobileLayout>
  );
}
