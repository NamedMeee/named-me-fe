import { TabType } from 'pages/profile';

interface SelectTabProps {
  currentTab: string;
  setCurrentTab: (tab: TabType) => void;
  userId: string;
}

export default function SelectTab({
  currentTab,
  setCurrentTab,
  userId,
}: SelectTabProps) {
  const handleClickTab = (tabName: string) => {
    setCurrentTab(tabName as TabType);
  };

  return (
    <div className="text-right text-[24px] font-extrabold tracking-tight">
      <div className="content_primary mb-[4px] text-[16px]">@{userId}</div>
      <div
        className={`cursor-pointer ${
          currentTab === 'PROFILE' ? 'content_secondary' : 'content_disabled'
        }`}
        onClick={() => handleClickTab('PROFILE')}
      >
        PROFILE
      </div>
      <div
        className={`mt-[-8px] cursor-pointer ${
          currentTab === 'QUESTION' ? 'content_secondary' : 'content_disabled'
        }`}
        onClick={() => handleClickTab('QUESTION')}
      >
        QUESTION
      </div>
    </div>
  );
}
