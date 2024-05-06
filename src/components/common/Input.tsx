import { InputHTMLAttributes } from 'react';

interface InputProps {
  labelText: string;
  width?: number;
  error?: boolean;
  errorMessage?: string;
}

export default function Input({
  labelText,
  width,
  errorMessage,
  error,
  ...inputProps
}: InputHTMLAttributes<HTMLInputElement> & InputProps) {
  return (
    <div className={`items-center ${width ? `w-[${width}px]` : 'w-full'}`}>
      <label className="font_label_bold_lg">{labelText}</label>
      <input
        className={`mt-[6px] border ${
          error ? 'border_negative_active border-[2px]' : 'border_oridinary'
        } font_label_regular_lg rounded-[6px] px-[14px] py-[14px] w-full`}
        type={inputProps.type || 'text'}
        placeholder={inputProps.placeholder}
        value={inputProps.value}
        onChange={inputProps.onChange}
      />
      {errorMessage && (
        <div className="pt-[8px] pl-[4px] font_label_medium_sm content_negative">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
