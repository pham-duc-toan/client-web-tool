import type { Metadata } from "next";
import { Suspense } from "react";
import TokenResultContent from "./TokenResultContent";

export const metadata: Metadata = {
  title: "Token Của Bạn - FC Online Tool",
  description:
    "Token miễn phí 30 phút đã được tạo thành công. Sao chép và sử dụng ngay.",
  keywords: ["FC Online Tool", "token", "miễn phí", "kết quả"],
};

export default function TokenResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Đang tải...</p>
            </div>
          </div>
        </div>
      }
    >
      <TokenResultContent />
    </Suspense>
  );
}
