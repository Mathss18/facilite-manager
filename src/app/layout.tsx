export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
