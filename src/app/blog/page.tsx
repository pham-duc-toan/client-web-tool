import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bài viết - FC Tool",
  description: "Các bài viết, tin tức và hướng dẫn về FC Tool và FC Online.",
};

// Mock blog posts - sau này có thể lấy từ API hoặc CMS
const posts = [
  {
    id: 1,
    slug: "huong-dan-chen-cau-thu",
    title: "Hướng dẫn chèn cầu thủ hiệu quả",
    excerpt:
      "Tìm hiểu cách sử dụng tính năng chèn cầu thủ tự động để có được đội hình mơ ước.",
    date: "2025-12-01",
    category: "Hướng dẫn",
    image: null,
  },
  {
    id: 2,
    slug: "mua-ban-gia-toi-uu",
    title: "Mua bán giá tối ưu - Kiếm BP hiệu quả",
    excerpt:
      "Cách thiết lập chức năng mua bán tự động để tối đa hóa lợi nhuận BP.",
    date: "2025-11-28",
    category: "Tips",
    image: null,
  },
  {
    id: 3,
    slug: "cap-nhat-phien-ban-moi",
    title: "Cập nhật phiên bản 1.0.0",
    excerpt:
      "Phiên bản mới với nhiều cải tiến về hiệu suất và bổ sung tính năng bảo mật Token.",
    date: "2025-11-25",
    category: "Tin tức",
    image: null,
  },
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-gray-950 to-purple-900/10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Bài viết
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            Tin tức, hướng dẫn và tips sử dụng FC Tool
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString("vi-VN")}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Đọc thêm
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
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state placeholder */}
        {posts.length === 0 && (
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <p>Chưa có bài viết nào</p>
          </div>
        )}
      </div>
    </div>
  );
}
