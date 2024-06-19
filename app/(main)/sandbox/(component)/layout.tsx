export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
