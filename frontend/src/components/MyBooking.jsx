// src/pages/MyBookings.jsx
import { useEffect, useState } from "react";
import { getBookingsByUserId } from "../services/BookingService";
import { getUserId } from "../services/RoleService"; // ✅ Correct source for user_id

export function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userId = getUserId();

        if (!userId) {
          console.error("⚠️ User not logged in. Please login first.");
          return;
        }

        const response = await getBookingsByUserId(userId);
        setBookings(response.data);
      } catch (error) {
        console.error("❌ Failed to fetch user bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="page-wrapper" style={{ padding: "100px 0" }}>
      <div
        className="card shadow-lg border-0"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#ffb703",
            fontWeight: "bold",
          }}
        >
          🎟️ My Bookings
        </h2>

        {bookings.length === 0 ? (
          <p style={{ textAlign: "center", color: "#777" }}>
            No bookings found yet.
          </p>
        ) : (
          <div>
            {bookings.map((b) => (
              <div
                key={b.booking_id}
                className="mb-3 p-3 rounded shadow-sm"
                style={{
                  backgroundColor: "#fafafa",
                  borderLeft: "5px solid #ffb703",
                }}
              >
                <h4 style={{ marginBottom: "8px", color: "#222" }}>
                  {b.movie_title}
                </h4>
                <p style={{ marginBottom: "5px" }}>
                  <b>Show Time:</b> {new Date(b.show_time).toLocaleString()}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  <b>Seats:</b> {b.seats}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  <b>Status:</b>{" "}
                  <span
                    style={{
                      color: b.status === "cancelled" ? "red" : "green",
                      fontWeight: "bold",
                    }}
                  >
                    {b.status?.toUpperCase() || "CONFIRMED"}
                  </span>
                </p>
                <p style={{ fontSize: "0.9em", color: "#555" }}>
                  <b>Booked On:</b>{" "}
                  {new Date(b.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
