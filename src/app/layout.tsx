import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "FC Tool - Công cụ hỗ trợ FC Online",
  description:
    "Công cụ tự động hóa cho FC Online. Hỗ trợ chèn cầu thủ, mua bán giá tối ưu, tự động đăng ký lại.",
  keywords: ["FC Online", "FC Tool", "automation", "chèn cầu thủ", "mua bán"],
  authors: [{ name: "FC Tool Team" }],
  openGraph: {
    title: "FC Tool - Công cụ hỗ trợ FC Online",
    description: "Công cụ tự động hóa cho FC Online",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} antialiased bg-gray-950 text-white`}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
