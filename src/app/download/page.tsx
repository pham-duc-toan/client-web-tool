import type { Metadata } from "next";
import { getAllReleases, ToolReleaseDto } from "@/lib/api";
import { formatDate as formatDateUtil, DateFormat } from "@/lib/formatter";

export const metadata: Metadata = {
  title: "Tải xuống - FC Tool",
  description: "Tải xuống các phiên bản FC Tool.",
};

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export default async function DownloadPage() {
  let releases: ToolReleaseDto[] = [];
  let error: string | null = null;

  try {
    const response = await getAllReleases();
    if (response.success && response.data) {
      releases = response.data;
    } else {
      error = response.message || "Không thể tải danh sách phiên bản.";
    }
  } catch (e) {
    error = "Không thể tải danh sách phiên bản. Vui lòng thử lại sau.";
    console.error("Error fetching releases:", e);
  }

  // Sort by version descending
  releases.sort((a, b) =>
    b.version.localeCompare(a.version, undefined, { numeric: true })
  );

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-gray-950 to-blue-900/10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Tải xuống
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            Chọn phiên bản FC Tool phù hợp với bạn
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center mb-8">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Releases List */}
        <div className="space-y-4">
          {releases.map((release, index) => (
            <div
              key={release.id}
              className={`bg-gray-800/50 border rounded-2xl p-6 transition-all ${
                release.isDefault
                  ? "border-green-500/50 ring-1 ring-green-500/20"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-semibold">
                      Phiên bản {release.version}
                    </h2>
                    {release.isDefault && (
                      <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                        Khuyên dùng
                      </span>
                    )}
                    {index === 0 && !release.isDefault && (
                      <span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">
                        Mới nhất
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>
                      {formatDateUtil(
                        release.createdAt,
                        DateFormat["d MMMM yyyy"]
                      )}
                    </span>
                    <span>• {formatBytes(release.fileSize)}</span>
                  </div>

                  {release.notes && (
                    <p className="mt-3 text-gray-300">{release.notes}</p>
                  )}
                </div>

                <a
                  href={release.downloadUrl}
                  className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all ${
                    release.isDefault
                      ? "bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-lg hover:shadow-green-500/25"
                      : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  }`}
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Tải xuống
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {releases.length === 0 && !error && (
          <div className="text-center py-20 text-gray-500">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
            <p>Chưa có phiên bản nào được phát hành</p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16 bg-gray-800/30 border border-gray-700 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Cần trợ giúp?
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Nếu bạn gặp vấn đề khi tải hoặc cài đặt, hãy xem hướng dẫn chi tiết.
          </p>
          <a
            href="/guide"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            Xem hướng dẫn cài đặt
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
