import { Button } from '@components/common';

interface SubmitSignUpButtonProps {
  onClick: () => void;
}

export default function SubmitSignUpButton({
  onClick,
}: SubmitSignUpButtonProps) {
  return (
    <Button
      onClick={onClick}
      text="입력 완료"
      buttonStyles={'mb-[20px] mt-[42px] w-full'}
    />
  );
}
