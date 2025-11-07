import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


export function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <Container className="" style={{ paddingTop: "120px", paddingBottom: "120px"}}>
      <h2 className="text-center mb-5 text-primary fw-bold">Admin Dashboard</h2>
      <Row className="justify-content-center g-4">
        {/* Manage Movies Card */}
        <Col xs={12} md={6} lg={4}>
          <Card className="admin-card h-100 shadow-lg border-0 rounded-4 d-flex flex-column text-center p-3">
            <Card.Body className="flex-grow-1 d-flex flex-column">
              <Card.Title className="fw-bold mb-3">🎬 Manage Movies</Card.Title>
              <Card.Text className="text-muted mb-4 flex-grow-1">
                Add, edit, or remove movies from your collection.
              </Card.Text>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/movies-list")}
              >
                Go to Movies
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Manage Bookings Card */}
        <Col xs={12} md={6} lg={4}>
          <Card className="admin-card h-100 shadow-lg border-0 rounded-4 d-flex flex-column text-center p-3">
            <Card.Body className="flex-grow-1 d-flex flex-column">
              <Card.Title className="fw-bold mb-3">📖 Manage Bookings</Card.Title>
              <Card.Text className="text-muted mb-4 flex-grow-1">
                View and manage all user bookings and ticket statuses.
              </Card.Text>
              <Button
                variant="warning"
                size="lg"
                onClick={() => navigate("/admin/bookings")}
              >
                Go to Bookings
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
