import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../services/MovieServices";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";

export function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getAllMovies();
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <Row className="justify-content-center mb-5 text-center">
        <Col lg={8}>
          <h1 className="display-6 fw-bold text-primary">🎬 Movie Collection</h1>
          <p className="text-muted fs-5">
            Explore and book your favorite movies easily
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-4">
        <Col>
          <p className="text-muted mb-0">
            Showing {movies.length} movie{movies.length !== 1 ? "s" : ""}
          </p>
        </Col>
      </Row>

      {movies.length === 0 ? (
        <Alert variant="warning" className="text-center">
          No movies available.
        </Alert>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {movies.map((movie) => (
            <Col key={movie.movie_id}>
              <Card
                className="h-100 shadow-sm border-0 rounded-4"
                style={{ cursor: "pointer", transition: "transform 0.2s" }}
                onClick={() => navigate(`/movies/${movie.movie_id}`)}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <Card.Img
                  variant="top"
                  src={
                    movie.poster_url ||
                    "https://via.placeholder.com/300x450/ced4da/ffffff?text=No+Image"
                  }
                  alt={movie.title}
                  className="object-fit-cover"
                  style={{ height: "380px" }}
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/300x450/ced4da/ffffff?text=No+Image")
                  }
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold text-dark mb-2">
                      {movie.title}
                    </Card.Title>
                    <Card.Text className="text-muted mb-1">
                      {movie.genre || "Genre Unknown"}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="badge bg-warning text-dark">
                        ⭐ {movie.rating || "N/A"} / 5
                      </span>
                      <small className="text-muted">
                        {movie.release_year || "Year Unknown"}
                      </small>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    className="mt-3 w-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/movies/${movie.movie_id}`);
                    }}
                  >
                    🎟️ Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
