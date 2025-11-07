import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


export function UserDashboard() {
  const navigate = useNavigate();

  return (
    <Container className="" style={{ padding: "120px 0" }}>
      <h2 className="text-center mb-5 text-primary fw-bold">Welcome User 🎬</h2>
      <p className="text-center text-muted mb-5">
        Manage your movie experience from here.
      </p>

      <Row className="justify-content-center g-4">

        <Col xs={12} md={6} lg={4}>
          <Card className="user-card h-100 shadow-lg border-0 rounded-4 d-flex flex-column text-center p-3">
            <Card.Body className="flex-grow-1 d-flex flex-column">
              <Card.Title className="fw-bold mb-3">🎥 Browse Movies</Card.Title>
              <Card.Text className="text-muted mb-4 flex-grow-1">
                Explore all available movies and book your favorite ones.
              </Card.Text>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/movies")}
              >
                Browse Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Card className="user-card h-100 shadow-lg border-0 rounded-4 d-flex flex-column text-center p-3">
            <Card.Body className="flex-grow-1 d-flex flex-column">
              <Card.Title className="fw-bold mb-3">📅 My Bookings</Card.Title>
              <Card.Text className="text-muted mb-4 flex-grow-1">
                View and manage all your booked tickets here.
              </Card.Text>
              <Button
                variant="warning"
                size="lg"
                onClick={() => navigate("/my-bookings")}
              >
                View Bookings
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
