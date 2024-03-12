import SmallLogo from '@assets/svgs/SmallLogo.svg';

export default function PageTitleWithLogo({ title }: { title: string }) {
  return (
    <>
      <div className="flex justify-center mt-[50px]">
        <SmallLogo />
      </div>
      <div className="text-center font_display_bold_sm mt-[8px]">{title}</div>
    </>
  );
}
