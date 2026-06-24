"use client";

import React from "react";
import { ConfigProvider } from "antd";

const theme = {
  token: {
    colorPrimary: "#2563eb",
    colorBgContainer: "#1e293b",
    colorBgElevated: "#1e293b",
    colorBgLayout: "#0f172a",
    colorText: "#f1f5f9",
    colorTextSecondary: "#94a3b8",
    colorBorder: "#334155",
    borderRadius: 8,
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  components: {
    Menu: {
      colorBgContainer: "transparent",
      colorText: "#cbd5e1",
      colorTextSelected: "#ffffff",
      itemSelectedColor: "#2563eb",
      itemHoverColor: "#1e40af",
    },
    Card: { colorBgContainer: "#1e293b", colorBorderSecondary: "#334155" },
    Button: { colorPrimary: "#2563eb" },
    Input: { colorBgContainer: "#0f172a", colorBorder: "#334155", activeBorderColor: "#2563eb" },
    Drawer: { colorBgElevated: "#0f172a" },
    Tag: { colorBgContainer: "#1e293b" },
    Form: { labelColor: "#94a3b8" },
    Progress: { colorText: "#94a3b8" },
    Radio: { colorText: "#cbd5e1" },
  },
};

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}