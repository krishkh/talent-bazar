"use client";
import Navbar from "@/components/Navbar";
import { useCandidate } from "@/lib/hooks/useCandidate";

import { BackgroundBeams } from "@/components/ui/background-beams";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useCandidate();
  return (
    <div className={`flex flex-col antialiased`}>
      <BackgroundBeams />
      <Navbar />

      <div className="p-12">{children}</div>
    </div>
  );
}
