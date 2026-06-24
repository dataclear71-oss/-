"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined, BankOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const navItems: MenuProps["items"] = [
  { key: "/", icon: <BankOutlined />, label: <Link href="/">Главная</Link> },
  { key: "/skills", label: <Link href="/skills">Навыки</Link> },
  { key: "/career", label: <Link href="/career">Карьера</Link> },
  { key: "/day", label: <Link href="/day">День из жизни</Link> },
  { key: "/ertx", label: <Link href="/ertx">ЭРТХ</Link> },
  { key: "/quiz", label: <Link href="/quiz">Тест</Link> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-bold text-blue-400 whitespace-nowrap">
          Кредитный администратор
        </Link>
        <div className="hidden md:block">
          <Menu mode="horizontal" selectedKeys={[pathname]} items={navItems} style={{ border: "none", background: "transparent" }} />
        </div>
        <Button className="md:hidden" type="text" icon={<MenuOutlined className="!text-white" />} onClick={() => setOpen(true)} />
        <Drawer title={<span className="text-white">Меню</span>} placement="right" onClose={() => setOpen(false)} open={open} width={260}>
          <Menu mode="vertical" selectedKeys={[pathname]} items={navItems} onClick={() => setOpen(false)} style={{ background: "transparent", border: "none" }} />
        </Drawer>
      </div>
    </nav>
  );
}