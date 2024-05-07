import PlusBlack from '@assets/svgs/PlusBlack.svg';

export default function TextBox() {
  return (
    <div className="min-h-[158px] rounded-[8px] border-[1px] border-dashed border-[#BFBFBF] p-4 text-center text-[14px] font-normal">
      <div className="pt-[20px]">
        더 알리고 싶은 <br />
        내용이 있나요? 🔍
        <div className="mt-[10px] flex justify-center">
          <PlusBlack />
        </div>
      </div>
    </div>
  );
}
