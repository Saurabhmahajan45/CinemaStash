import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../assets/css/MovieDetails.css";
import { API_BASE_URL } from "../constants/APIConstants";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_BASE_URL}/movies`).then((res) => setMovies(res.data));
  }, []);

  if (loading) {
    return (
      <div className="page-wrapper">
        <div className="card text-center">
          <div className="d-flex justify-content-center align-items-center py-5">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="card">
          <div className="text-center mb-4">
            <h1 className="display-5 fw-bold text-dark">🎬 Movie Collection</h1>
            <p className="lead text-muted">Discover and book your favorite movies</p>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-muted">
                  Showing {movies.length} movie{movies.length !== 1 ? 's' : ''}
                </span>
                <button 
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => navigate("/add-movie")}
                >
                  ➕ Add Movie
                </button>
              </div>
            </div>
          </div>

          <div className="movie-grid">
            {movies.map(movie => (
              <div 
                key={movie.movie_id} 
                className="movie-card"
                onClick={() => navigate(`/movies/${movie.movie_id}`)}
              >
                <img 
                  src={movie.poster_url} 
                  alt={movie.title}
                  className="img-fluid"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x450/ffc107/ffffff?text=No+Image';
                  }}
                />

                <div className="movie-info">
                  <h3 className="h5 fw-bold">{movie.title}</h3>
                  <p className="text-muted mb-2">{movie.genre || "Action"}</p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-warning text-dark">
                      ⭐ {movie.rating} / 5
                    </span>
                    <span className="text-muted small">
                      {movie.duration || "120min"}
                    </span>
                  </div>

                  <button 
                    className="btn-primary w-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/movies/${movie.movie_id}`);
                    }}
                  >
                     Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}