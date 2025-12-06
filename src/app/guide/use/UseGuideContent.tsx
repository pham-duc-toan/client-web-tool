"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-[95vw] max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="max-w-full max-h-[95vh] object-contain"
          quality={100}
        />
      </div>

      {/* Caption */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
        {alt} - Click bên ngoài hoặc nút X để đóng
      </div>

      {/* ESC hint */}
      <div className="absolute top-4 left-4 text-white/50 text-sm flex items-center gap-2">
        <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>
        để đóng
      </div>
    </div>
  );
}

interface ClickableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function ClickableImage({
  src,
  alt,
  width = 800,
  height = 450,
}: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative cursor-zoom-in group"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto group-hover:opacity-90 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <div className="bg-black/70 px-3 py-1.5 rounded-lg text-sm text-white flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            Click để phóng to
          </div>
        </div>
      </div>
      <ImageModal
        src={src}
        alt={alt}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default function UseGuideContent() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-gray-950 to-purple-900/10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Hướng dẫn sử dụng Tool
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            Các chức năng chèn giá tự động trong FC Online
          </p>
          <div className="mt-4">
            <Link
              href="/guide"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              ← Quay lại hướng dẫn cài đặt
            </Link>
          </div>
        </div>

        {/* Phím tắt */}
        <div className="mb-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            ⌨️ Phím tắt
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <kbd className="px-3 py-2 bg-gray-800 rounded-lg border border-gray-600 font-mono text-lg">
                F5
              </kbd>
              <span className="text-gray-300">Bắt đầu chạy tool</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-3 py-2 bg-gray-800 rounded-lg border border-gray-600 font-mono text-lg">
                F6
              </kbd>
              <span className="text-gray-300">Dừng tool thủ công</span>
            </div>
          </div>
        </div>

        {/* Case 1: Mua Max Giá */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-xl font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold text-green-400">
              Chèn Mua Max Giá
            </h2>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 space-y-6">
            <p className="text-gray-300">
              Chức năng này giúp bạn tự động mua cầu thủ với giá cao nhất khi
              giá thay đổi.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Các bước thực hiện:
              </h3>

              <div className="space-y-3 text-gray-400">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                  <span>Mở modal mua cầu thủ trong game trước</span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  <span>
                    Trong tool, chọn Action:{" "}
                    <strong className="text-white">Buy Max Price</strong>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  <span>
                    Điền số tỷ giá hiện tại vào input{" "}
                    <strong className="text-white">&quot;Giá&quot;</strong>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">
                    4
                  </span>
                  <span>
                    Click nút{" "}
                    <strong className="text-white">&quot;Bắt đầu&quot;</strong>{" "}
                    hoặc bấm{" "}
                    <kbd className="px-2 py-0.5 bg-gray-700 rounded text-sm">
                      F5
                    </kbd>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300">
              <p className="text-blue-400 font-medium mb-2">
                🤖 AI sẽ tự động:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Nhận diện modal mua từ màn hình</li>
                <li>Spam đóng/mở modal để canh giá</li>
                <li>Phát hiện khi giá nhảy lên max</li>
                <li>Click mua ngay khi phát hiện giá max</li>
              </ul>
            </div>

            {/* Hình minh họa */}
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">
                  📸 Mở modal mua trước khi chạy tool:
                </p>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <ClickableImage
                    src="/use/modal_open_buy_max_price.png"
                    alt="Modal mua max giá"
                  />
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-2">✅ Khi mua thành công:</p>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <ClickableImage
                    src="/use/result_buy_max_price.png"
                    alt="Kết quả mua thành công"
                  />
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-sm text-green-200">
              ✅ Khi mua thành công, tool sẽ hiển thị thông báo và tự động dừng
              vòng lặp.
            </div>
          </div>
        </div>

        {/* Case 2: Bán Min Giá */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center text-xl font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold text-red-400">
              Chèn Bán Min Giá
            </h2>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 space-y-6">
            <p className="text-gray-300">
              Chức năng này giúp bạn tự động bán cầu thủ với giá thấp nhất khi
              giá thay đổi.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Các bước thực hiện:
              </h3>

              <div className="space-y-3 text-gray-400">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                  <span>Mở modal bán cầu thủ trong game trước</span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  <span>
                    Trong tool, chọn Action:{" "}
                    <strong className="text-white">Sell Min Price</strong>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  <span>
                    Điền số tỷ giá hiện tại vào input{" "}
                    <strong className="text-white">&quot;Giá&quot;</strong>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center text-sm">
                    4
                  </span>
                  <span>
                    Click nút{" "}
                    <strong className="text-white">&quot;Bắt đầu&quot;</strong>{" "}
                    hoặc bấm{" "}
                    <kbd className="px-2 py-0.5 bg-gray-700 rounded text-sm">
                      F5
                    </kbd>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300">
              <p className="text-red-400 font-medium mb-2">🤖 AI sẽ tự động:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Nhận diện modal bán từ màn hình</li>
                <li>Spam đóng/mở modal để canh giá</li>
                <li>Phát hiện khi giá rớt xuống min</li>
                <li>Click bán ngay khi phát hiện giá min</li>
              </ul>
            </div>

            {/* Hình minh họa */}
            <div>
              <p className="text-gray-400 mb-2">
                📸 Mở modal bán trước khi chạy tool:
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <ClickableImage
                  src="/use/modal_sell_min_price.png"
                  alt="Modal bán min giá"
                />
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-sm text-green-200">
              ✅ Khi bán thành công, tool sẽ hiển thị thông báo và tự động dừng
              vòng lặp.
            </div>
          </div>
        </div>

        {/* Case 3: Reregister */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-xl font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold text-purple-400">
              Chèn Reregister (DS của bạn)
            </h2>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 space-y-6">
            <p className="text-gray-300">
              Chức năng này giúp bạn tự động đăng ký lại cầu thủ trong danh sách
              giao dịch của bạn.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Các bước thực hiện:
              </h3>

              <div className="space-y-3 text-gray-400">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                  <span>
                    Mở màn hình{" "}
                    <strong className="text-white">
                      &quot;DS của bạn&quot;
                    </strong>{" "}
                    (Danh sách giao dịch)
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  <span>
                    Trong tool, chọn Action:{" "}
                    <strong className="text-white">Reregister</strong>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  <span>
                    Chọn loại: <strong className="text-green-400">Buy</strong>{" "}
                    (mua max giá) hoặc{" "}
                    <strong className="text-red-400">Sell</strong> (bán min giá)
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm">
                    4
                  </span>
                  <span>
                    Để con trỏ chuột ở vị trí nút{" "}
                    <strong className="text-white">
                      &quot;Đăng ký lại&quot;
                    </strong>{" "}
                    của hàng cần theo dõi
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm">
                    5
                  </span>
                  <span>
                    Bấm{" "}
                    <kbd className="px-2 py-0.5 bg-gray-700 rounded text-sm">
                      F5
                    </kbd>{" "}
                    để chạy
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4 text-sm text-gray-300">
              <p className="text-purple-400 font-medium mb-2">
                🤖 AI sẽ tự động:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Theo dõi vị trí con trỏ chuột</li>
                <li>Click nút đăng ký lại khi phát hiện hàng về</li>
                <li>Mở modal và chèn giá theo loại đã chọn (Buy/Sell)</li>
                <li>Thông báo khi hoàn tất và dừng vòng lặp</li>
              </ul>
            </div>

            {/* Hình minh họa */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 mb-2">
                  📸 Reregister - Buy (mua max giá):
                </p>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <ClickableImage
                    src="/use/reregister_buy.png"
                    alt="Reregister Buy"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-400 mb-2">
                  📸 Reregister - Sell (bán min giá):
                </p>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <ClickableImage
                    src="/use/reregister_sell.png"
                    alt="Reregister Sell"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-sm text-yellow-200">
              <p className="font-medium mb-2">⚠️ Lưu ý quan trọng:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Nên <strong>sắp xếp theo tên cầu thủ</strong> trước khi chạy
                </li>
                <li>
                  Tránh trường hợp khi hàng về thì thay đổi thứ tự trong DS giao
                  dịch
                </li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-sm text-green-200">
              ✅ Khi chèn thành công, tool sẽ hiển thị thông báo và tự động dừng
              vòng lặp.
            </div>
          </div>
        </div>

        {/* Xử lý ngoại lệ */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-xl font-bold">
              ⚡
            </div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Xử lý ngoại lệ tự động
            </h2>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <p className="text-gray-300 mb-4">
              AI đã được tích hợp tính năng tự động xử lý các trường hợp ngoại
              lệ:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <p className="text-yellow-400 font-medium mb-2">🔧 Popup lỗi</p>
                <p className="text-gray-400 text-sm">
                  AI sẽ tự động đóng các popup lỗi và tiếp tục thử lại
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <p className="text-yellow-400 font-medium mb-2">
                  🔧 Modal error
                </p>
                <p className="text-gray-400 text-sm">
                  AI sẽ nhận diện và đóng modal lỗi tự động
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <p className="text-yellow-400 font-medium mb-2">
                  🔧 Kết nối lỗi
                </p>
                <p className="text-gray-400 text-sm">
                  AI sẽ retry khi phát hiện lỗi kết nối
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <p className="text-yellow-400 font-medium mb-2">🔧 Timeout</p>
                <p className="text-gray-400 text-sm">
                  Tự động xử lý khi thao tác bị timeout
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dừng thủ công */}
        <div className="mb-16">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <kbd className="px-4 py-2 bg-red-600/30 rounded-lg border border-red-500 font-mono text-2xl text-red-400">
                F6
              </kbd>
              <div>
                <h3 className="text-xl font-bold text-red-400">
                  Dừng thủ công
                </h3>
                <p className="text-gray-400">
                  Bấm F6 bất kỳ lúc nào để dừng tool ngay lập tức
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Áp dụng cho tất cả các case. Khi bấm F6, tool sẽ dừng vòng lặp
              kiểm tra và chờ lệnh mới.
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors text-gray-300"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Quay lại hướng dẫn cài đặt
          </Link>
        </div>
      </div>
    </div>
  );
}
