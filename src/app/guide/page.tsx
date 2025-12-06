import type { Metadata } from "next";
import GuideContent from "./GuideContent";

export const metadata: Metadata = {
  title: "Hướng dẫn cài đặt - FC Online Tool",
  description:
    "Hướng dẫn chi tiết cách tải và cài đặt FC Online Tool để tự động mua/bán cầu thủ trên sàn chuyển nhượng",
  keywords: [
    "FC Online Tool",
    "hướng dẫn cài đặt",
    "auto mua bán",
    "sàn chuyển nhượng",
  ],
  openGraph: {
    title: "Hướng dẫn cài đặt FC Online Tool",
    description:
      "Hướng dẫn chi tiết cách tải và cài đặt FC Online Tool để tự động mua/bán cầu thủ trên sàn chuyển nhượng",
  },
};

export default function GuidePage() {
  return <GuideContent />;
}
