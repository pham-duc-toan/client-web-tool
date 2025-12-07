"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { formatDate, DateFormat } from "@/lib/formatter";

export default function TokenResultContent() {
  const searchParams = useSearchParams();
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [expiresAt, setExpiresAt] = useState<Date | null>(null);

  useEffect(() => {
    const tokenParam = searchParams.get("token");
    const errorParam = searchParams.get("error");

    if (errorParam) {
      switch (errorParam) {
        case "create_failed":
          setError("Không thể tạo token. Vui lòng thử lại.");
          break;
        case "server_error":
          setError("Có lỗi xảy ra trên server. Vui lòng thử lại sau.");
          break;
        case "invalid_request":
          setError("Yêu cầu không hợp lệ. Vui lòng xem quảng cáo đầy đủ.");
          break;
        default:
          setError("Có lỗi không xác định. Vui lòng thử lại.");
      }
    } else if (tokenParam) {
      setToken(tokenParam);
      // Token có thời hạn 30 phút
      setExpiresAt(new Date(Date.now() + 30 * 60 * 1000));
    } else {
      setError("Không tìm thấy token. Vui lòng thử lại.");
    }
  }, [searchParams]);

  const copyToClipboard = async () => {
    if (!token) return;

    try {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const formatExpiryTime = () => {
    if (!expiresAt) return "";
    return formatDate(expiresAt, DateFormat["dd/MM/yyyy HH:mm"]);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-red-600 dark:text-red-400"
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
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Có lỗi xảy ra
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{error}</p>
            <Link
              href="/get-token"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Thử lại
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Đang tải...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg
              className="w-10 h-10 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🎉 Token Đã Sẵn Sàng!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Cảm ơn bạn đã xem quảng cáo. Token của bạn đã được tạo thành công!
          </p>
        </div>

        {/* Token Display Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Token của bạn:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={token}
                readOnly
                className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={copyToClipboard}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                {copied ? (
                  <>
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Đã sao chép
                  </>
                ) : (
                  <>
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
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Sao chép
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Expiry Info */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">
                  Thời hạn sử dụng
                </h3>
                <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                  Token này có hiệu lực trong <strong>30 phút</strong> và sẽ hết
                  hạn lúc <strong>{formatExpiryTime()}</strong>. Sau thời gian
                  này, bạn có thể lấy token mới.
                </p>
              </div>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <span className="mr-2">📝</span>
              Cách sử dụng token
            </h2>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  1
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Tải và cài đặt tool</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Nếu chưa có, tải tool tại{" "}
                    <Link
                      href="/download"
                      className="text-blue-600 hover:underline"
                    >
                      trang tải xuống
                    </Link>{" "}
                    và xem{" "}
                    <Link
                      href="/guide"
                      className="text-blue-600 hover:underline"
                    >
                      hướng dẫn cài đặt
                    </Link>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  2
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Mở tool và nhập token</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Chạy tool, sao chép token ở trên và dán vào ô nhập token
                    trong tool
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  3
                </span>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Bắt đầu sử dụng</strong>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Làm theo{" "}
                    <Link
                      href="/guide/use"
                      className="text-blue-600 hover:underline"
                    >
                      hướng dẫn sử dụng
                    </Link>{" "}
                    để tự động mua/bán cầu thủ
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Link
            href="/download"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              Tải Tool
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tải về và cài đặt
            </p>
          </Link>

          <Link
            href="/guide"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              Hướng dẫn
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cách cài đặt & sử dụng
            </p>
          </Link>

          <Link
            href="/get-token"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              Lấy Token Mới
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Khi hết hạn
            </p>
          </Link>
        </div>

        {/* Back to home */}
        <div className="text-center">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
