import Logo from '@assets/svgs/SmallLogo.svg';
import ToggleSwitch from './ToggleSwitch';
import { useState } from 'react';

export default function MenuBar() {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <div className="w-full bg-white shadow-md justify-center flex">
      <div className="max-w-[700px] flex w-full h-[56px] p-4 justify-between items-center flex-shrink-0">
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
