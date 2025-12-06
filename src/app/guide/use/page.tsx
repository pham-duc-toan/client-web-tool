import type { Metadata } from "next";
import UseGuideContent from "./UseGuideContent";

export const metadata: Metadata = {
  title: "Hướng dẫn sử dụng Tool chèn - FC Tool",
  description:
    "Hướng dẫn chi tiết cách sử dụng các chức năng chèn mua max giá, bán min giá và reregister trong FC Tool.",
};

export default function UseGuidePage() {
  return <UseGuideContent />;
}
