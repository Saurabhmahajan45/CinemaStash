import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "../assets/css/card.css";
import { createBooking } from "../services/BookingService";
import { getCurrentUserId } from "../services/UserServices";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showTime, setShowTime] = useState("");
  const [seats, setSeats] = useState("");

  
  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      user_id: getCurrentUserId(),
      movie_id: id,
      seats,
      show_time: showTime,
    };

    try {
      await createBooking(bookingData); // now valid inside async
      alert("Booking successful!");
      navigate("/my-bookings");
    } catch (err) {
      console.log(err);
      alert("Booking failed!");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="card">
        <h2>Book Your Movie 🎫</h2>

        <form onSubmit={handleBooking}>
          <input 
            type="datetime-local"
            className="form-control"
            value={showTime}
            onChange={e => setShowTime(e.target.value)}
            required 
          />

          <input 
            type="number"
            className="form-control"
            placeholder="Number of Seats"
            value={seats}
            onChange={e => setSeats(e.target.value)}
            required 
          />

          <button className="btn-primary">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}
