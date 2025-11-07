import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById } from "../services/MovieServices";
import { Container, Row, Col, Button, Card, Spinner, Alert } from "react-bootstrap";

export function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await getMovieById(id);
        setMovie(res.data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "80vh"}}>
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">Movie not found!</Alert>
      </Container>
    );
  }

  return (
    <Container style={{ padding: "120px 0px" }}>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg border-0 rounded-4">
            <Row className="g-0">
              <Col md={5}>
                <Card.Img
                  src={movie.poster_url || "/images/placeholder.png"}
                  alt={movie.title}
                  onError={(e) => (e.currentTarget.src = "/images/placeholder.png")}
                  className="h-100 rounded-start-4 object-fit-cover"
                />
              </Col>

              <Col md={7}>
                <Card.Body className="p-4">
                  <Card.Title as="h2" className="fw-bold mb-3 text-primary">
                    {movie.title}
                  </Card.Title>

                  <Card.Text className="mb-2">
                    <strong>Genre:</strong> {movie.genre || "N/A"}
                  </Card.Text>
                  <Card.Text className="mb-2">
                    <strong>Release Year:</strong> {movie.release_year || "N/A"}
                  </Card.Text>
                  <Card.Text className="mb-3">
                    <strong>Description:</strong> {movie.description || "No description available."}
                  </Card.Text>
                  <Card.Text className="mb-4">
                    <strong>Rating:</strong> ⭐ {movie.rating || "N/A"}
                  </Card.Text>

                  <div className="d-flex gap-3 mt-4">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => navigate(`/book/${movie.movie_id}`)}
                    >
                      🎟 Book Ticket
                    </Button>

                    <Button
                      variant="outline-secondary"
                      size="lg"
                      onClick={() => navigate(-1)}
                    >
                      ⬅ Back to Movies
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
