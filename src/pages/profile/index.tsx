import MobileLayout from '@components/layout/MobileLayout';

//Alert Text
import PinEmoji from '@assets/svgs/PinEmoji.svg';
import ProfileEmoji from '@assets/svgs/ProfileEmoji.svg';
import PhotoEmoji from '@assets/svgs/PhotoEmoji.svg';

import ShareIcon from '@assets/svgs/ShareIcon.svg';
import MoreIcon from '@assets/svgs/MoreIcon.svg';

import PlusBlack from '@assets/svgs/PlusBlack.svg';
import PlusWhite from '@assets/svgs/PlusWhite.svg';
import OnwerMenuBar from '@components/common/MenuBar';
import SelectTab from '@components/profile/SelectTab';
import { useState } from 'react';

export type TabType = 'PROFILE' | 'QUESTION';

export default function Main() {
  const [currentTab, setCurrentTab] = useState<TabType>('PROFILE');

  return (
    <MobileLayout header={<OnwerMenuBar />}>
      <div className="px-[24px]">
        <div className="flex justify-center item-center grid grid-cols-2 mt-[28px]">
          <div className="w-[142px] h-[142px] shadow-md rounded-full bg-white flex items-center justify-center border-[1px] border-[#F2F2F2]">
            <div className="text-center">
              <div className="flex items-center justify-center mb-[6px]">
                <ProfileEmoji />
              </div>
              <div className="text-center content_normal text-[12px] leading-4">
                프로필 사진
                <br />
                설정하기
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end item-center mb-[24px] gap-[10px] mr-[-10px]">
              <div className="pt-[4px]">
                <ShareIcon />
              </div>
              <MoreIcon />
            </div>
            <SelectTab
              userId={'test_id_ishere'}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </div>
        </div>
        <div className="w-full bg-[#303030] min-h-[158px] rounded-[8px] mt-[48px] mb-[10px] p-4">
          <div>
            <PinEmoji />
          </div>
          <div className="text-white font-normal text-[14px] text-center">
            중요한 공지 사항을 <br />
            등록해보세요 ✨
          </div>
          <div className="flex justify-center mt-[10px]">
            <PlusWhite />
          </div>
        </div>
        <div className="grid grid-cols-2 flex items-center justify-center border-[1px] border-[#BFBFBF] rounded-[8px] mb-[10px] min-h-[178px]">
          <div className="p-4 bg-[#D9D9D9] text-center h-full pt-[62px]">
            <div className="flex justify-center">
              <PhotoEmoji />
            </div>
            <div className="flex justify-center mt-[20px]">
              <PlusBlack />
            </div>
          </div>
          <div className="p-4 font-normal text-[14px] text-center">
            자신을 <br />
            소개하는 글을
            <br /> 써보세요 📝
            <div className="flex justify-center mt-[10px]">
              <PlusBlack />
            </div>
          </div>
        </div>
        <div className="p-4 font-normal text-[14px] text-center border-[1px] border-[#BFBFBF] rounded-[8px] min-h-[158px] border-dashed">
          <div className="pt-[20px]">
            더 알리고 싶은 <br />
            내용이 있나요? 🔍
            <div className="flex justify-center mt-[10px]">
              <PlusBlack />
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
