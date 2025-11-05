import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/card.css";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [show_time, setShowTime] = useState("");
  const [seats, setSeats] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    axios.post("http://localhost:6500/booking", {
      user_id: 1,   
      movie_id: id,
      show_time,
      seats
    })
    .then(() => navigate("/my-bookings"))
    .catch(err => alert("Booking failed"));
  };

  return (
    <div className="page-wrapper">
      <div className="card">
        <h2>Book Your Movie 🎫</h2>

        <form onSubmit={handleBooking}>
          <input 
            type="datetime-local"
            className="form-control"
            onChange={e => setShowTime(e.target.value)}
            required 
          />

          <input 
            type="number"
            className="form-control"
            placeholder="Number of Seats"
            onChange={e => setSeats(e.target.value)}
            required 
          />

          <button className="btn-primary">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}
