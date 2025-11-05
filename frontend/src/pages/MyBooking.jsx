import axios from "axios";
import { useState, useEffect } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6500/booking/user/1")
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Bookings</h2>

      {bookings.map(b => (
        <div key={b.booking_id} style={{ marginBottom: "20px" }}>
          <h3>{b.title}</h3>
          <p><b>Show Time:</b> {b.show_time}</p>
          <p><b>Seats:</b> {b.seats}</p>
          <p><b>Status:</b> {b.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
