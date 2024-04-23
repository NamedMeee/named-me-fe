import PhotoEmoji from '@assets/svgs/PhotoEmoji.svg';
import PlusBlack from '@assets/svgs/PlusBlack.svg';

export default function PhotoBox() {
  return (
    <div className="grid grid-cols-2 flex items-center justify-center border-[1px] border-[#BFBFBF] rounded-[8px] mb-[10px] min-h-[178px]">
      <div className="p-4 bg-[#D9D9D9] text-center h-full pt-[62px]">
        <div className="flex justify-center">
          <PhotoEmoji />
        </div>
        <div className="flex justify-center mt-[20px]">
          <PlusBlack />
        </div>
      </div>
      <div className="p-4 font-normal text-[14px] text-center">
        자신을 <br />
        소개하는 글을
        <br /> 써보세요 📝
        <div className="flex justify-center mt-[10px]">
          <PlusBlack />
        </div>
      </div>
    </div>
  );
}
