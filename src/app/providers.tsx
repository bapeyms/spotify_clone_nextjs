"use client";

import { AudioProvider } from "@/context/AudioContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AudioProvider>{children}</AudioProvider>;
}