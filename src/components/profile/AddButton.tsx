interface AddButtonProps {
  icon: React.ReactNode;
}

export default function AddButton({ icon }: AddButtonProps) {
  return (
    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[4px] bg-[#1E1E1E]">
      {icon}
    </div>
  );
}
