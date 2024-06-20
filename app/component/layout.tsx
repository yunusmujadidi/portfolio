import "../component/layout.css";

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-white">{children}</main>;
}
