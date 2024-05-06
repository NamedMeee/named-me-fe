import { InputHTMLAttributes } from 'react';

interface InputProps {
  labelText: string;
  width?: number;
}

export default function Input({
  labelText,
  width,
  ...inputProps
}: InputHTMLAttributes<HTMLInputElement> & InputProps) {
  return (
    <div className={`items-center ${width ? `w-[${width}px]` : 'w-full'}`}>
      <label className="font_label_bold_lg">{labelText}</label>
      <input
        className="mt-[6px] border border-[#D5D5D5] font_label_regular_lg rounded-[6px] px-[16px] py-[16px] w-full"
        type={inputProps.type || 'text'}
        placeholder={inputProps.placeholder}
        value={inputProps.value}
        onChange={inputProps.onChange}
      />
    </div>
  );
}
