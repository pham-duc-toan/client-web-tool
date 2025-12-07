import type { Metadata } from "next";
import TokenResultContent from "./TokenResultContent";

export const metadata: Metadata = {
  title: "Token Của Bạn - FC Online Tool",
  description:
    "Token miễn phí 30 phút đã được tạo thành công. Sao chép và sử dụng ngay.",
  keywords: ["FC Online Tool", "token", "miễn phí", "kết quả"],
};

export default function TokenResultPage() {
  return <TokenResultContent />;
}
