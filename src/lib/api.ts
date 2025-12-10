// API client for server communication

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5282/api";

export interface ToolReleaseDto {
  id: number;
  version: string;
  fileName: string;
  fileSize: number;
  notes?: string;
  isDefault: boolean;
  status: string; // "Active" | "Inactive"
  createdAt: string;
  createdBy?: string;
  downloadUrl?: string;
}

export interface EventGameDto {
  id: number;
  name: string;
  link: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

// Lấy phiên bản active (có download URL) - Public API
export async function getActiveRelease(): Promise<ApiResponse<ToolReleaseDto>> {
  try {
    const res = await fetch(`${API_URL}/toolreleases/active`, {
      next: { revalidate: 60 }, // Cache 60 giây
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching active release:", error);
    return { success: false, message: "Không thể kết nối server" };
  }
}

// Lấy tất cả phiên bản đã hoàn thành - Public API
export async function getAllReleases(): Promise<ApiResponse<ToolReleaseDto[]>> {
  try {
    const res = await fetch(`${API_URL}/toolreleases/public`, {
      next: { revalidate: 60 }, // Cache 60 giây
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching releases:", error);
    return { success: false, message: "Không thể kết nối server", data: [] };
  }
}

// Lấy download URL cho phiên bản cụ thể - Public API (không cần auth)
export async function getDownloadUrl(
  id: number
): Promise<ApiResponse<ToolReleaseDto>> {
  try {
    const res = await fetch(`${API_URL}/toolreleases/public/${id}/download`, {
      cache: "no-store", // Không cache để luôn lấy URL mới
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching download URL:", error);
    return { success: false, message: "Không thể lấy link tải" };
  }
}

// Lấy danh sách sự kiện đang diễn ra - Public API
export async function getActiveEvents(): Promise<ApiResponse<EventGameDto[]>> {
  try {
    const res = await fetch(`${API_URL}/eventgames/active`, {
      cache: "no-store", // Không cache
    });

    if (!res.ok) {
      console.error("Error fetching active events: HTTP", res.status);
      return { success: false, message: "Không thể kết nối server", data: [] };
    }

    const text = await res.text();
    if (!text) {
      return { success: true, data: [] };
    }

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("Error fetching active events:", error);
    return { success: false, message: "Không thể kết nối server", data: [] };
  }
}
