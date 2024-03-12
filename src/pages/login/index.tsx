import MobileLayout from '@components/layout/MobileLayout';

import SmallLogo from '@assets/svgs/SmallLogo.svg';
import KakaoLogo from '@assets/svgs/KakaoLogo.svg';
import TwitterLogo from '@assets/svgs/TwitterLogo.svg';

import { Button } from '@components/common';

export default function Main() {
  return (
    <MobileLayout>
      <div className="flex justify-center mt-[50px]">
        <SmallLogo />
      </div>
      <div className="text-center font_display_bold_sm mt-[8px]">로그인</div>
      <div className="flex justify-center">
        <div>
          <div className="mt-[36px] w-[320px] items-center w-full">
            <div className="font_label_bold_lg mb-[6px]">이메일</div>
            <input
              className="border border-[#D5D5D5] font_label_regular_lg rounded-[6px] px-[18px] py-[18px] w-full"
              type="text"
              placeholder="가입한 이메일을 입력해주세요."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <div className="mt-[24px] w-[320px] items-center w-full">
            <div className="font_label_bold_lg mb-[6px]">비밀번호</div>
            <input
              className="border border-[#D5D5D5] font_label_regular_lg rounded-[6px] px-[18px] py-[18px] w-full"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </div>
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
                <KakaoLogo className="w-[16px] h-[16px]" />
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
