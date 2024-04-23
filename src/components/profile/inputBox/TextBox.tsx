import PlusBlack from '@assets/svgs/PlusBlack.svg';

export default function TextBox() {
  return (
    <div className="p-4 font-normal text-[14px] text-center border-[1px] border-[#BFBFBF] rounded-[8px] min-h-[158px] border-dashed">
      <div className="pt-[20px]">
        더 알리고 싶은 <br />
        내용이 있나요? 🔍
        <div className="flex justify-center mt-[10px]">
          <PlusBlack />
        </div>
      </div>
    </div>
  );
}
