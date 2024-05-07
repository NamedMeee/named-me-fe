interface ButtonProps {
  border?: boolean;
  buttonColor?: string;
  buttonStyles?: string;
  onClick?: () => void;
  text: string | React.ReactNode;
  textColor?: string;
}

export default function Button({
  border = false,
  buttonColor,
  buttonStyles,
  onClick,
  text,
  textColor,
}: ButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        className={`${
          border && 'border'
        } ${buttonStyles} font_label_medium_lg w-full items-center ${
          buttonColor ? buttonColor : 'surface_primary_inverse_active'
        } ${
          textColor ? textColor : 'content_primary_inverse'
        } rounded-[8px] py-[16px]`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
