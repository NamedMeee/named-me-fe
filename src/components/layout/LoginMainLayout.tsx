type MobileLayoutProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
};

export default function LoginMainLayout({
  children,
  footer,
  header,
}: MobileLayoutProps) {
  return (
    <div className="surface_primary">
      <div className="surface_primary relative mx-auto min-h-screen w-full">
        {header && header}
        <main className="relative mx-auto min-h-screen max-w-[320px]">
          {children}
        </main>
        {footer && footer}
      </div>
    </div>
  );
}
