import MobileLayout from '@components/layout/MobileLayout';

import SmallLogo from '@assets/svgs/SmallLogo.svg';

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
              type="text"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="mt-[48px] w-[320px] items-center w-full bg-[#000000] text-white rounded-[6px] py-[16px]">
          {' '}
          로그인
        </button>
      </div>
    </MobileLayout>
  );
}
