import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { getAllBookings } from "../services/BookingService";


export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await getAllBookings();
      if (response.status === 200) {
        setBookings(response.data);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="mt-3" style={{ padding: "80px 0" }}>
      <Container>
        <h3 className="text-center text-warning fw-bold mt-4">🎟️ All Bookings</h3>
        <Table striped bordered hover responsive className="mt-4">
          <thead className="table-dark text-center">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Phone</th>
              <th>Movie</th>
              <th>Show Time</th>
              <th>Seats</th>
              <th>Status</th>
              <th>Booked On</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {bookings.length > 0 ? (
              bookings.map((b, index) => (
                <tr key={b.booking_id}>
                  <td>{index + 1}</td>
                  <td>{b.user_name}</td>
                  <td>{b.user_phone}</td>
                  <td>{b.movie_title}</td>
                  <td>{b.show_time}</td>
                  <td>{b.seats}</td>
                  <td>{b.status}</td>
                  <td>{new Date(b.created_at).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-muted">No bookings found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
