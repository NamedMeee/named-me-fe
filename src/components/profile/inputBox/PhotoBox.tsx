import PhotoEmoji from '@assets/svgs/PhotoEmoji.svg';
import PlusBlack from '@assets/svgs/PlusBlack.svg';

export default function PhotoBox() {
  return (
    <div className="mb-[10px] flex grid min-h-[178px] grid-cols-2 items-center justify-center rounded-[8px] border-[1px] border-[#BFBFBF]">
      <div className="h-full bg-[#D9D9D9] p-4 pt-[62px] text-center">
        <div className="flex justify-center">
          <PhotoEmoji />
        </div>
        <div className="mt-[20px] flex justify-center">
          <PlusBlack />
        </div>
      </div>
      <div className="p-4 text-center text-[14px] font-normal">
        자신을 <br />
        소개하는 글을
        <br /> 써보세요 📝
        <div className="mt-[10px] flex justify-center">
          <PlusBlack />
        </div>
      </div>
    </div>
  );
}
