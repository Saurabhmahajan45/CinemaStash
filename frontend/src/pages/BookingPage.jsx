import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [show_time, setShowTime] = useState("");
  const [seats, setSeats] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    axios.post("http://localhost:6500/booking", {
      user_id: 1,     // replace with actual user ID after login
      movie_id: id,
      show_time,
      seats
    })
    .then(() => navigate("/my-bookings"))
    .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Movie</h2>

      <form onSubmit={handleBooking} style={{ maxWidth: "400px", margin: "auto" }}>
        <label>Show Time:</label><br />
        <input 
          type="datetime-local" 
          required
          onChange={e => setShowTime(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
        /><br /><br />

        <label>Seats:</label><br />
        <input 
          type="number" 
          required
          onChange={e => setSeats(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
        /><br /><br />

        <button type="submit" style={{ padding: "10px", width: "100%" }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
