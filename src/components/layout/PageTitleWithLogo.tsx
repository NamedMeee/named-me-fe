import SmallLogo from '@assets/svgs/SmallLogo.svg';

export default function PageTitleWithLogo({
  title,
}: {
  title: string | JSX.Element;
}) {
  return (
    <>
      <div className="mt-[50px] flex justify-center">
        <SmallLogo />
      </div>
      <div className="font_display_bold_sm mt-[8px] text-center">{title}</div>
    </>
  );
}
