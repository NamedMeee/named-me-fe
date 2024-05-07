import { useState } from 'react';

import ToggleSwitch from './ToggleSwitch';

import Logo from '@assets/svgs/SmallLogo.svg';

export default function OnwerMenuBar() {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  return (
    <div className="flex w-full justify-center bg-white shadow-md">
      <div className="flex h-[56px] w-full max-w-[500px] flex-shrink-0 items-center justify-between p-4">
        <Logo />
        <ToggleSwitch
          checked={isToggle}
          defaultChecked={true}
          onCheckedChange={() => setIsToggle(!isToggle)}
        />
      </div>
    </div>
  );
}
