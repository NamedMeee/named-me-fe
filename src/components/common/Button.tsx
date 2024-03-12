interface ButtonProps {
  buttonStyles?: string;
  buttonColor?: string;
  textColor?: string;
  border?: boolean;
  text: string | React.ReactNode;
}

export default function Button({
  buttonStyles,
  buttonColor,
  textColor,
  text,
  border = false,
}: ButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        className={`${
          border && 'border'
        } ${buttonStyles} font_label_medium_lg items-center w-full ${
          buttonColor ? buttonColor : 'surface_primary_inverse_active'
        } ${
          textColor ? textColor : 'content_primary_inverse'
        } rounded-[8px] py-[16px]`}
      >
        {text}
      </button>
    </div>
  );
}
