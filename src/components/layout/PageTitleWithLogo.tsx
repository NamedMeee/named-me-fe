import SmallLogoColor from '@assets/svgs/SmallLogoColor.svg';

export default function PageTitleWithLogo({
  title,
}: {
  title: string | JSX.Element;
}) {
  return (
    <>
      <div className="mt-[50px] flex justify-center">
        <SmallLogoColor />
      </div>
      <div className="font_display_bold_sm mt-[8px] text-center">{title}</div>
    </>
  );
}
