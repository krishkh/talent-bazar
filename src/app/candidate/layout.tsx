import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex flex-col antialiased`}>
      <Navbar />
      <div className="p-12">{children}</div>
    </div>
  );
}
