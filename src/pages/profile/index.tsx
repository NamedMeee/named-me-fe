import { useState } from 'react';

import OnwerMenuBar from '@components/common/MenuBar';
import MobileLayout from '@components/layout/MobileLayout';
import AddBox from '@components/profile/inputBox/AddBox';
import ProfileImageBox from '@components/profile/inputBox/ProfileImageBox';
import SelectTab from '@components/profile/SelectTab';
import SettingButton from '@components/profile/SettingButton';
import ShareButton from '@components/profile/ShareButton';

export type TabType = 'PROFILE' | 'QUESTION';

export default function Profile() {
  const [currentTab, setCurrentTab] = useState<TabType>('PROFILE');

  return (
    <MobileLayout header={<OnwerMenuBar />}>
      <div className="px-[24px]">
        <div className="item-center mb-[32px] mt-[28px] flex grid grid-cols-2 justify-center">
          <ProfileImageBox />
          <div>
            <div className="item-center mb-[24px] mr-[-10px] flex justify-end gap-[10px]">
              <ShareButton />
              <SettingButton />
            </div>
            <SelectTab
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              userId={'test_id_ishere'}
            />
          </div>
        </div>
        <AddBox />
        {/** 
        <AlertBox />
        <PhotoBox />
        <TextBox />
        */}
      </div>
    </MobileLayout>
  );
}
