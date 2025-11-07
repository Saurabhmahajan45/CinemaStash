// src/pages/MyBookings.jsx
import { useEffect, useState } from "react";
import { getBookingsByUserId } from "../services/BookingService";
import { getCurrentUserId } from "../services/UserService";

export  function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userId = getCurrentUserId();
        if (!userId) {
          console.error("User not logged in");
          return;
        }

        const response = await getBookingsByUserId(userId);
        setBookings(response.data);
      } catch (error) {
        console.error("Failed to fetch user bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="page-wrapper" style={{ padding: "80px 0" }}>
      <div className="card" style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#ffb703" }}>
          🎟️ My Bookings
        </h2>

        {bookings.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666" }}>No bookings found.</p>
        ) : (
          <div>
            {bookings.map((b) => (
              <div
                key={b.booking_id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "12px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "#fafafa",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#333" }}>{b.movie_title}</h3>
                <p>
                  <b>Show Time:</b> {b.show_time}
                </p>
                <p>
                  <b>Seats:</b> {b.seats}
                </p>
                <p>
                  <b>Status:</b>{" "}
                  <span
                    style={{
                      color: b.status === "cancelled" ? "red" : "green",
                      fontWeight: "bold",
                    }}
                  >
                    {b.status.toUpperCase()}
                  </span>
                </p>
                <p style={{ color: "#777" }}>
                  <b>Booked On:</b> {new Date(b.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
