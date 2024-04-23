import Image from 'next/image';

import TextEmoji from '@assets/svgs/TextEmoji.svg';
import PhotoEmoji from '@assets/svgs/PhotoEmoji.svg';
import PinEmoji from '@assets/svgs/PinEmoji.svg';

import AddButton from '../AddButton';

export default function AddBox() {
  const LinkEmoji = () => (
    <Image src="/images/LinkEmoji.png" alt="LinkEmoji" width={18} height={18} />
  );

  return (
    <div className="p-[28px] font-normal text-[16px] text-center border-[1px] border-[#BFBFBF] rounded-[8px] border-dashed">
      <div className="font-light">
        나만의 프로필을 작성해보세요 ✨
        <div className="font-bold">추가하기↓</div>
        <div className="flex justify-center mt-[14px] gap-x-[12px]">
          <AddButton icon={<TextEmoji />} />
          <AddButton icon={<PinEmoji />} />
          <AddButton icon={<PhotoEmoji />} />
          <AddButton icon={<LinkEmoji />} />
        </div>
      </div>
    </div>
  );
}
