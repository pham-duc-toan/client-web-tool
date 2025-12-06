"use client";

import Link from "next/link";
import { ClickableImage } from "@/components/ClickableImage";

export default function GuideContent() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-gray-950 to-purple-900/10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hướng dẫn cài đặt
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            Làm theo các bước dưới đây để bắt đầu sử dụng FC Tool
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">
              1
            </div>
            <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">Tải FC Tool</h2>
              <p className="text-gray-400 mb-4">
                Click vào nút <strong>&quot;Download for Windows&quot;</strong>{" "}
                ở trang chủ để tải file cài đặt về máy.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-300">
                <p>
                  📁 File tải về có tên:{" "}
                  <code className="text-blue-400">FC_Tool.zip</code>
                </p>
                <p>📦 Kích thước: ~450 MB</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">
              2
            </div>
            <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">Giải nén file</h2>
              <p className="text-gray-400 mb-4">
                Click chuột phải vào file <code>FC_Tool.zip</code> và chọn{" "}
                <strong>&quot;Extract All...&quot;</strong> hoặc sử dụng
                WinRAR/7-Zip.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
                <ClickableImage
                  src="/guide/after_extract.png"
                  alt="Giải nén file FC_Tool.zip"
                />
              </div>
              <div className="mt-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-sm text-yellow-200">
                ⚠️ Khuyến nghị giải nén vào thư mục riêng, tránh để trên Desktop
                hoặc thư mục hệ thống.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">
              3
            </div>
            <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">
                Mở thư mục đã giải nén
              </h2>
              <p className="text-gray-400 mb-4">
                Mở thư mục vừa giải nén để xem các file của FC Tool.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
                <ClickableImage
                  src="/guide/open_folder_extracted.png"
                  alt="Mở thư mục đã giải nén"
                />
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">
              4
            </div>
            <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">Chạy ứng dụng</h2>
              <p className="text-gray-400 mb-4">
                Double click vào file{" "}
                <code className="text-blue-400">FC_Tool.exe</code> để chạy ứng
                dụng.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
                <ClickableImage
                  src="/guide/open_exe.png"
                  alt="Chạy file FC_Tool.exe"
                />
              </div>
              <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-blue-200">
                💡 <strong>Lưu ý:</strong> Nếu Windows SmartScreen xuất hiện,
                làm theo bước tiếp theo.
              </div>
            </div>
          </div>

          {/* Step 5 - SmartScreen */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-xl font-bold">
              5
            </div>
            <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">
                Xử lý Windows SmartScreen
              </h2>
              <p className="text-gray-400 mb-4">
                Nếu Windows SmartScreen xuất hiện, click vào{" "}
                <strong>&quot;More info&quot;</strong>:
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
                <ClickableImage
                  src="/guide/guide_click_more_info.png"
                  alt="Click More info"
                />
              </div>
              <p className="text-gray-400 mt-6 mb-4">
                Sau đó click <strong>&quot;Run anyway&quot;</strong> để chạy ứng
                dụng:
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
                <ClickableImage
                  src="/guide/guide_click_run_anyway.png"
                  alt="Click Run anyway"
                />
              </div>
              <div className="mt-4 bg-gray-900 rounded-lg p-4 text-sm text-gray-300">
                <p>
                  🔒 Đây là cảnh báo bình thường cho các ứng dụng chưa được
                  Microsoft xác thực.
                </p>
                <p>✅ FC Tool hoàn toàn an toàn và không chứa mã độc.</p>
              </div>
            </div>
          </div>

          {/* Step 6 - Init UI */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">
              6
            </div>
            <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">Màn hình khởi động</h2>
              <p className="text-gray-400 mb-4">
                Khi chạy lần đầu, ứng dụng sẽ hiển thị màn hình khởi động:
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
                <ClickableImage
                  src="/guide/ui_init_tool.png"
                  alt="Màn hình khởi động FC Tool"
                />
              </div>
            </div>
          </div>

          {/* Step 7 - Token */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">
              7
            </div>
            <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">Nhập Token</h2>
              <p className="text-gray-400 mb-4">
                Ứng dụng sẽ yêu cầu bạn nhập Token. Liên hệ Admin để nhận Token
                của bạn.
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
                <ClickableImage
                  src="/guide/ui_input_token.png"
                  alt="Nhập Token"
                />
              </div>
              <div className="mt-4 bg-gray-900 rounded-lg p-4 text-sm text-gray-300">
                <p>🔑 Token chỉ được sử dụng trên 1 thiết bị duy nhất</p>
                <p>🔒 Token được lưu trữ mã hóa an toàn</p>
              </div>
            </div>
          </div>

          {/* Step 8 - Complete */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-xl font-bold">
              ✓
            </div>
            <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-3 text-green-400">
                Hoàn tất!
              </h2>
              <p className="text-gray-400 mb-4">
                Sau khi nhập Token thành công, bạn sẽ thấy giao diện chính của
                FC Tool:
              </p>
              <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
                <ClickableImage
                  src="/guide/ui_tool.png"
                  alt="Giao diện chính FC Tool"
                />
              </div>
              <p className="text-gray-400 mt-4">
                Bây giờ bạn có thể sử dụng FC Tool. Chọn chức năng bạn muốn và
                để tool tự động làm việc.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Câu hỏi thường gặp
          </h2>

          <div className="space-y-4">
            <details className="group bg-gray-800/50 border border-gray-700 rounded-xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium">Token hết hạn thì sao?</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Liên hệ Admin để gia hạn Token. Token mới sẽ được gửi qua Zalo
                hoặc Facebook.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium">
                  Có thể dùng trên nhiều máy không?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Mỗi Token chỉ được bind với 1 thiết bị. Nếu muốn đổi máy, liên
                hệ Admin để reset Token.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium">Tool có an toàn không?</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Tool được mã hóa bằng Cython và không thu thập bất kỳ thông tin
                cá nhân nào. Mọi dữ liệu đều được lưu local trên máy bạn.
              </div>
            </details>

            <details className="group bg-gray-800/50 border border-gray-700 rounded-xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <span className="font-medium">Windows báo virus thì sao?</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Đây là false positive (cảnh báo nhầm) do tool sử dụng các kỹ
                thuật automation. Bạn có thể thêm thư mục FC Tool vào danh sách
                loại trừ của Windows Defender.
              </div>
            </details>
          </div>
        </div>

        {/* Link to Use Guide */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-green-400">
              🎮 Đã cài đặt xong?
            </h3>
            <p className="text-gray-400 mb-6">
              Xem hướng dẫn sử dụng các chức năng chèn giá tự động
            </p>
            <Link
              href="/guide/use"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-xl transition-all font-medium"
            >
              Hướng dẫn sử dụng Tool
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
