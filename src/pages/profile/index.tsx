import MobileLayout from '@components/layout/MobileLayout';

import AlertBox from '@components/profile/inputBox/AlertBox';
import PhotoBox from '@components/profile/inputBox/PhotoBox';
import TextBox from '@components/profile/inputBox/TextBox';

import OnwerMenuBar from '@components/common/MenuBar';
import SelectTab from '@components/profile/SelectTab';
import { useState } from 'react';

import ProfileImageBox from '@components/profile/inputBox/ProfileImageBox';
import ShareButton from '@components/profile/ShareButton';
import SettingButton from '@components/profile/SettingButton';
import AddBox from '@components/profile/inputBox/AddBox';

export type TabType = 'PROFILE' | 'QUESTION';

export default function Profile() {
  const [currentTab, setCurrentTab] = useState<TabType>('PROFILE');

  return (
    <MobileLayout header={<OnwerMenuBar />}>
      <div className="px-[24px]">
        <div className="flex justify-center item-center grid grid-cols-2 mt-[28px] mb-[32px]">
          <ProfileImageBox />
          <div>
            <div className="flex justify-end item-center mb-[24px] gap-[10px] mr-[-10px]">
              <ShareButton />
              <SettingButton />
            </div>
            <SelectTab
              userId={'test_id_ishere'}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
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
