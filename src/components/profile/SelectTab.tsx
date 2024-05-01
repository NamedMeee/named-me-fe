import { TabType } from 'pages/profile';

interface SelectTabProps {
  userId: string;
  currentTab: string;
  setCurrentTab: (tab: TabType) => void;
}

export default function SelectTab({
  userId,
  currentTab,
  setCurrentTab,
}: SelectTabProps) {
  const handleClickTab = (tabName: string) => {
    setCurrentTab(tabName as TabType);
  };

  return (
    <div className="text-right font-extrabold text-[24px] tracking-tight">
      <div className="text-[16px] content_primary mb-[4px]">@{userId}</div>
      <div
        className={`cursor-pointer ${
          currentTab === 'PROFILE' ? 'content_secondary' : 'content_disabled'
        }`}
        onClick={() => handleClickTab('PROFILE')}
      >
        PROFILE
      </div>
      <div
        className={`cursor-pointer mt-[-8px] ${
          currentTab === 'QUESTION' ? 'content_secondary' : 'content_disabled'
        }`}
        onClick={() => handleClickTab('QUESTION')}
      >
        QUESTION
      </div>
    </div>
  );
}
