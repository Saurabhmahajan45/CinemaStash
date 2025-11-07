import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../services/MovieServices";
// import "../assets/css/MovieList.css"; // optional CSS if you have one

export  function MovieList() {
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
      <div className="page-wrapper text-center py-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper py-5">
      <div className="container">
        <div className="card p-4 shadow-sm">
          <div className="text-center mb-4">
            <h1 className="display-6 fw-bold text-dark">🎬 Movie Collection</h1>
            <p className="lead text-muted">Discover and book your favorite movies</p>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="text-muted">
              Showing {movies.length} movie{movies.length !== 1 ? "s" : ""}
            </span>
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() => navigate("/add-movie")}
            >
              ➕ Add Movie
            </button>
          </div>

          {movies.length === 0 ? (
            <p className="text-center text-muted">No movies available.</p>
          ) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {movies.map((movie) => (
                <div key={movie.movie_id} className="col">
                  <div
                    className="card h-100 movie-card shadow-sm border-0"
                    onClick={() => navigate(`/movies/${movie.movie_id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={movie.poster_url}
                      alt={movie.title}
                      className="card-img-top"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300x450/ffc107/ffffff?text=No+Image";
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{movie.title}</h5>
                      <p className="card-text text-muted">{movie.genre || "Genre Unknown"}</p>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="badge bg-warning text-dark">
                          ⭐ {movie.rating || "N/A"} / 5
                        </span>
                        <span className="text-muted small">
                          {movie.release_year || "Year Unknown"}
                        </span>
                      </div>
                      <button
                        className="btn btn-primary w-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/movies/${movie.movie_id}`);
                        }}
                      >
                        🎟️ Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
