import MenuBar from '@components/common/MenuBar';
import MobileLayout from '@components/layout/MobileLayout';

//Alert Text
import PinEmoji from '@assets/svgs/PinEmoji.svg';
import ProfileEmoji from '@assets/svgs/ProfileEmoji.svg';
import PhotoEmoji from '@assets/svgs/PhotoEmoji.svg';
import TextEmoji from '@assets/svgs/TextEmoji.svg';
import StarEmoji from '@assets/svgs/StarEmoji.svg';
import SearchEmoji from '@assets/svgs/SearchEmoji.svg';

import ShareIcon from '@assets/svgs/ShareIcon.svg';
import MoreIcon from '@assets/svgs/MoreIcon.svg';

import PlusBlack from '@assets/svgs/PlusBlack.svg';
import PlusWhite from '@assets/svgs/PlusWhite.svg';

export default function Main() {
  return (
    <MobileLayout header={<MenuBar />}>
      <div className="px-[24px]">
        <div className="flex justify-center item-center grid grid-cols-2 mt-[28px]">
          <div className="w-[142px] h-[142px] rounded-full bg-[#D9D9D9] flex items-center justify-center border-[1px] border-[#BFBFBF]">
            <div className="text-center">
              <div className="flex items-center justify-center mb-[4px]">
                <ProfileEmoji />
              </div>
              <div className="text-center text-[#545454] text-[14px] leading-4">
                프로필 <br />
                사진 넣기
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end item-center mb-[24px] gap-[10px] mr-[-10px]">
              <div className="pt-[4px]">
                <ShareIcon />
              </div>
              <MoreIcon />
            </div>
            <div className="text-right text-[#545454] font-extrabold tracking-tight text-[20px]">
              <div className="text-[14px]">@emtpy0040_56</div>
              <div>ALERT</div>
              <div className="text-[#BCBCBC]">MOMENT</div>
              <div className="text-[#BCBCBC]">COMMENT</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full bg-[#303030] min-h-[158px] rounded-[8px] mt-[48px] mb-[10px]">
          <PinEmoji />
          <div className="text-white font-normal	font-[12px]">
            중요한 공지 사항을 등록해보세요 <StarEmoji />
            <PlusWhite />
          </div>
        </div>
        <div className="grid grid-cols-2 flex items-center justify-center border-[1px] border-[#BFBFBF] rounded-[8px] mb-[10px] min-h-[178px]">
          <div className="bg-[#D9D9D9] w-full h-full">
            <PhotoEmoji />
            <PlusBlack />
          </div>
          <div className="text-[#545454] font-normal font-[12px]">
            자신을 소개하는 글을 써보세요 <TextEmoji />
            <PlusBlack />
          </div>
        </div>
        <div className="text-[#545454] font-normal font-[12px] flex items-center justify-center border-[1px] border-[#BFBFBF] rounded-[8px] min-h-[158px] border-dashed">
          더 알리고 싶은 내용이 있나요? <SearchEmoji />
          <PlusBlack />
        </div>
      </div>
    </MobileLayout>
  );
}
