import axios from "axios";
import { useEffect, useState } from "react";
// import "../assets/css/card.css";
import { getBookingsByUserId } from "../services/BookingService";
import { getCurrentUserId } from "../services/UserServices";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
   getBookingsByUserId(getCurrentUserId())
      .then((res) => setBookings(res.data))
      .catch(() => console.error("Failed to fetch bookings"));
  }, []);

  return (
    <div className="page-wrapper">
      <div className="card" style={{ maxWidth: "700px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          My Bookings
        </h2>

        {bookings.length === 0 && (
          <p style={{ textAlign: "center", color: "#555" }}>
            No bookings found.
          </p>
        )}

        <div>
          {bookings.map((b) => (
            <div key={b.booking_id} className="movie-card" style={{ marginBottom: "20px" }}>
              
              <div className="movie-info">
                <h3>{b.movie_title}</h3>

                <p>
                  <b>Show Time:</b> {b.show_time}
                </p>

                <p>
                  <b>Seats:</b> {b.seats}
                </p>

                <p>
                  <b>Status:</b>
                  <span
                    style={{
                      color: b.status === "cancelled" ? "red" : "green",
                      marginLeft: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {b.status.toUpperCase()}
                  </span>
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
