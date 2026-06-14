"use client";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AntdProvider } from "@/components/providers/AntdProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AntdProvider>{children}</AntdProvider>
    </ThemeProvider>
  );
}
