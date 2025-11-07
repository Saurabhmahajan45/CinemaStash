import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/card.css";
import { createBooking } from "../services/BookingService";
import { getCurrentUserId } from "../services/UserService";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export  function BookingPage() {
  const { id } = useParams(); // movie_id from URL
  const navigate = useNavigate();

  const [showTime, setShowTime] = useState("");
  const [seats, setSeats] = useState("");

  // Handle booking
  const handleBooking = async (e) => {
    e.preventDefault();

    const user_id = getCurrentUserId();

    if (!user_id) {
      toast.error("Please login to book tickets!", {
        position: "top-center",
        theme: "colored",
        transition: Bounce,
      });
      navigate("/login");
      return;
    }

    const bookingData = {
      user_id,
      movie_id: id,
      seats,
      show_time: showTime,
    };

    try {
      const response = await createBooking(bookingData);
      if (response.status === 200) {
        toast.success("🎉 Booking successful!", {
          position: "top-center",
          theme: "colored",
          transition: Bounce,
        });
        navigate("/my-bookings");
      } else {
        toast.error("Booking failed. Try again later.", {
          position: "top-center",
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while booking.", {
        position: "top-center",
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-card shadow-lg">
        <h2 className="booking-title">🎬 Book Your Movie</h2>
        <p className="booking-subtitle">Select your show time and seats below</p>

        <form onSubmit={handleBooking} className="booking-form">
          <div className="form-group">
            <label>Show Time</label>
            <input
              type="datetime-local"
              className="form-control"
              value={showTime}
              onChange={(e) => setShowTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Number of Seats</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter number of seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="booking-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
