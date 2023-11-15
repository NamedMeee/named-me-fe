import Logo from '@assets/svgs/Logo.svg';

export default function MenuBar() {
  return (
    <div className="flex w-full h-[56px] p-4 justify-start items-center flex-shrink-0 bg-white shadow-md">
      <Logo />
    </div>
  );
}
