import Logo from '@assets/svgs/SmallLogo.svg';
import ToggleSwitch from './ToggleSwitch';
import { useState } from 'react';

export default function OnwerMenuBar() {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  return (
    <div className="w-full bg-white shadow-md justify-center flex">
      <div className="max-w-[500px] flex w-full h-[56px] p-4 justify-between items-center flex-shrink-0">
        <Logo />
        <ToggleSwitch
          checked={isToggle}
          onCheckedChange={() => setIsToggle(!isToggle)}
          defaultChecked={true}
        />
      </div>
    </div>
  );
}
