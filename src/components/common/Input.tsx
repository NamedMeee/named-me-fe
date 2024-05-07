import { InputHTMLAttributes } from 'react';

interface InputProps {
  error?: boolean;
  errorMessage?: string;
  labelText: string;
  width?: number;
}

export default function Input({
  error,
  errorMessage,
  labelText,
  width,
  ...inputProps
}: InputHTMLAttributes<HTMLInputElement> & InputProps) {
  return (
    <div className={`items-center ${width ? `w-[${width}px]` : 'w-full'}`}>
      <label className="font_label_bold_lg">{labelText}</label>
      <input
        className={`mt-[6px] border ${
          error ? 'border_negative_active border-[2px]' : 'border_oridinary'
        } font_label_regular_lg w-full rounded-[6px] px-[14px] py-[14px]`}
        onChange={inputProps.onChange}
        placeholder={inputProps.placeholder}
        type={inputProps.type || 'text'}
        value={inputProps.value}
      />
      {errorMessage && (
        <div className="content_negative font_label_medium_sm pl-[4px] pt-[8px]">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
