import { Button } from '@components/common';

interface SubmitSignUpButtonProps {
  onClick: () => void;
  buttonText?: string;
}

export default function SubmitSignUpButton({
  onClick,
  buttonText = '입력 완료',
}: SubmitSignUpButtonProps) {
  return (
    <Button
      onClick={onClick}
      text={buttonText}
      buttonStyles={'mb-[20px] mt-[42px] w-full'}
    />
  );
}
