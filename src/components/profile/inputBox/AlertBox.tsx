import PinEmoji from '@assets/svgs/PinEmoji.svg';
import PlusWhite from '@assets/svgs/PlusWhite.svg';

export default function AlertBox() {
  return (
    <div className="mb-[10px] mt-[32px] min-h-[158px] w-full rounded-[8px] bg-[#303030] p-4">
      <div>
        <PinEmoji />
      </div>
      <div className="text-center text-[14px] font-normal text-white">
        중요한 공지 사항을 <br />
        등록해보세요 ✨
      </div>
      <div className="mt-[10px] flex justify-center">
        <PlusWhite />
      </div>
    </div>
  );
}
