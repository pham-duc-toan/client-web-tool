import type { Metadata } from "next";
import GetTokenContent from "./GetTokenContent";

export const metadata: Metadata = {
  title: "Lấy Token Miễn Phí - FC Online Tool",
  description:
    "Lấy token miễn phí 30 phút bằng cách xem quảng cáo. Dùng ngay không cần đăng ký.",
  keywords: ["FC Online Tool", "token miễn phí", "xem quảng cáo", "30 phút"],
  openGraph: {
    title: "Lấy Token Miễn Phí 30 Phút - FC Online Tool",
    description:
      "Xem quảng cáo và nhận token miễn phí 30 phút để sử dụng FC Online Tool",
  },
};

export default function GetTokenPage() {
  return <GetTokenContent />;
}
