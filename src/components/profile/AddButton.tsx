interface AddButtonProps {
  icon: React.ReactNode;
}

export default function AddButton({ icon }: AddButtonProps) {
  return (
    <div className="bg-[#1E1E1E] w-[40px] h-[40px] rounded-[4px] flex justify-center items-center">
      {icon}
    </div>
  );
}
