interface ButtonProps {
  buttonStyles?: string;
  buttonColor?: string;
  textColor?: string;
  text: string | React.ReactNode;
}

export default function Button({
  buttonStyles,
  buttonColor,
  textColor,
  text,
}: ButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        className={`${buttonStyles} items-center w-full ${
          buttonColor ? buttonColor : 'surface_primary_inverse_active'
        } ${
          textColor ? textColor : 'content_primary_inverse'
        } rounded-[6px] py-[16px]`}
      >
        {text}
      </button>
    </div>
  );
}
