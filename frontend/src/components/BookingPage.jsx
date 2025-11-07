import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { createBooking } from "../services/BookingService";
import { getCurrentUserId } from "../services/UserService";
import { Bounce, toast } from "react-toastify";
import { getRole, getUserId } from "../services/RoleService";

export function BookingPage() {
  const { id } = useParams(); // movie_id from URL
  const navigate = useNavigate();

  const [showTime, setShowTime] = useState("");
  const [seats, setSeats] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    const role = getRole();
    const user_id = getUserId();

    if (!role) {
      toast.error("Please login to book tickets!", {
        position: "top-right",
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
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <Row className="justify-content-center w-100">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">🎬 Book Your Movie</h2>
                <p className="text-muted mb-0">
                  Select your show time and seats below
                </p>
              </div>

              <Form onSubmit={handleBooking}>
                <Form.Group className="mb-4" controlId="showTime">
                  <Form.Label className="fw-semibold">Show Time</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={showTime}
                    onChange={(e) => setShowTime(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="seats">
                  <Form.Label className="fw-semibold">Number of Seats</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter number of seats"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    required
                    min="1"
                  />
                </Form.Group>

                <div className="d-flex gap-3 mt-4">
                  <Button variant="primary" type="submit" className="w-100">
                    🎟 Confirm Booking
                  </Button>

                  <Button
                    variant="outline-secondary"
                    className="w-100"
                    onClick={() => navigate(-1)}
                  >
                    ⬅ Back
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
