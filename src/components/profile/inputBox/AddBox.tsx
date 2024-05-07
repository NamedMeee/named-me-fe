import Image from 'next/image';

import AddButton from '../AddButton';

import PhotoEmoji from '@assets/svgs/PhotoEmoji.svg';
import PinEmoji from '@assets/svgs/PinEmoji.svg';
import TextEmoji from '@assets/svgs/TextEmoji.svg';

export default function AddBox() {
  const LinkEmoji = () => (
    <Image alt="LinkEmoji" height={18} src="/images/LinkEmoji.png" width={18} />
  );

  return (
    <div className="rounded-[8px] border-[1px] border-dashed border-[#BFBFBF] p-[28px] text-center text-[16px] font-normal">
      <div className="font-light">
        나만의 프로필을 작성해보세요 ✨
        <div className="font-bold">추가하기↓</div>
        <div className="mt-[14px] flex justify-center gap-x-[12px]">
          <AddButton icon={<TextEmoji />} />
          <AddButton icon={<PinEmoji />} />
          <AddButton icon={<PhotoEmoji />} />
          <AddButton icon={<LinkEmoji />} />
        </div>
      </div>
    </div>
  );
}
