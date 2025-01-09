"use client";
import Navbar from "@/components/Navbar";
import { useCandidate } from "@/lib/hooks/useCandidate";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useCandidate();
  return (
    <div className={`flex flex-col antialiased`}>
      <Navbar />
      <div className="p-12">{children}</div>
    </div>
  );
}
