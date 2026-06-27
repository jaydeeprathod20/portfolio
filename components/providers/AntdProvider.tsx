"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { ConfigProvider, theme } from "antd";
import { useTheme } from "@/components/providers/ThemeProvider";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  const cache = React.useMemo(() => createCache(), []);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  ));

  return (
    <StyleProvider cache={cache}>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: "#6366f1",
            borderRadius: 8,
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}
