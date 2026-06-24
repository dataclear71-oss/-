import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntdProvider from "@/components/AntdProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Специалист по кредитному администрированию",
  description: "Всё о профессии кредитного администратора — задачи, навыки, карьера и роль в ЭРТХ",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <AntdRegistry>
          <AntdProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}