import PinEmoji from '@assets/svgs/PinEmoji.svg';
import PlusWhite from '@assets/svgs/PlusWhite.svg';

export default function AlertBox() {
  return (
    <div className="w-full bg-[#303030] min-h-[158px] rounded-[8px] mt-[32px] mb-[10px] p-4">
      <div>
        <PinEmoji />
      </div>
      <div className="text-white font-normal text-[14px] text-center">
        중요한 공지 사항을 <br />
        등록해보세요 ✨
      </div>
      <div className="flex justify-center mt-[10px]">
        <PlusWhite />
      </div>
    </div>
  );
}
