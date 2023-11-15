type MobileLayoutProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
};

export default function MobileLayout({
  children,
  footer,
  header,
}: MobileLayoutProps) {
  return (
    <div className="surface_primary">
      <div className="relative max-w-mobile mx-auto mb-[24px] min-h-screen surface_primary">
        {header && header}
        <main className="py-[20px] px-[16px]">{children}</main>
        {footer && footer}
      </div>
    </div>
  );
}
