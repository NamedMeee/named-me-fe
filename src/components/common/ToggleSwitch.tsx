import React from 'react';

import * as Switch from '@radix-ui/react-switch';

interface ToggleSwitchProps {
  checked: boolean;
  defaultChecked?: boolean;
  onCheckedChange: () => void;
}

export default function ToggleSwitch({
  checked = false,
  defaultChecked = false,
  onCheckedChange,
}: ToggleSwitchProps) {
  return (
    <form className="mt-[4px]">
      <Switch.Root
        checked={checked}
        className={`h-[27px] w-[52px] ${
          checked ? 'bg-[#4DBFFF]' : 'bg-[#808080]'
        } rounded-full`}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
      >
        <Switch.Thumb
          className={`relative block h-[23px] w-[26px] translate-x-[12px]
          rounded-full bg-white duration-100 will-change-transform`}
          style={{
            transform: checked ? 'translateX(23.5px)' : 'translateX(2px)',
          }}
        />
      </Switch.Root>
    </form>
  );
}
