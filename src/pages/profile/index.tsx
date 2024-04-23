import MobileLayout from '@components/layout/MobileLayout';

//Alert Text

import ProfileEmoji from '@assets/svgs/ProfileEmoji.svg';

import ShareIcon from '@assets/svgs/ShareIcon.svg';
import MoreIcon from '@assets/svgs/MoreIcon.svg';

import OnwerMenuBar from '@components/common/MenuBar';
import SelectTab from '@components/profile/SelectTab';
import { useState } from 'react';
import AlertBox from '@components/profile/inputBox/AlertBox';
import PhotoBox from '@components/profile/inputBox/PhotoBox';

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
                <ShareIcon className="content_primary" />
              </div>
              <MoreIcon className="content_primary" />
            </div>
            <SelectTab
              userId={'test_id_ishere'}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </div>
        </div>
        <AlertBox />
        <PhotoBox />
        <TextBox />
      </div>
    </MobileLayout>
  );
}
