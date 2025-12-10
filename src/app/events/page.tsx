"use client";

import { useEffect, useState } from "react";
import { getActiveEvents, EventGameDto } from "@/lib/api";
import EventsList from "./EventsList";

export default function EventsPage() {
  const [events, setEvents] = useState<EventGameDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getActiveEvents();
        console.log("Events API Response:", response);
        setEvents(response.data || []);
        if (!response.success) {
          setError(response.message || null);
        }
      } catch (err) {
        console.error("Error loading events:", err);
        setError("Có lỗi xảy ra khi tải sự kiện");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sự Kiện Game Miễn Phí
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Danh sách các sự kiện game đang diễn ra. Nhấn nút "Mở Tất Cả" để mở
            tất cả các sự kiện trong các tab mới.
          </p>
          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500 rounded-lg max-w-2xl mx-auto">
              <p className="text-red-400">{error}</p>
            </div>
          )}
        </div>

        {/* Events List */}
        {loading ? (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            <p className="text-gray-400 mt-4">Đang tải sự kiện...</p>
          </div>
        ) : (
          <EventsList initialEvents={events} />
        )}
      </div>
    </div>
  );
}
