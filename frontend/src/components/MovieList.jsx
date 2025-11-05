import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/card.css";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:6500/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="page-wrapper">
      <div className="card">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          🎬 Movie Collection
        </h2>

        <div className="movie-grid">
          {movies.map(movie => (
            <div 
              key={movie.movie_id} 
              className="movie-card"
              onClick={() => navigate(`/movies/${movie.movie_id}`)}
            >
              <img src={movie.poster_url} alt={movie.title} />

              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>⭐ {movie.rating} / 5</p>

                <button 
                  className="btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/movies/${movie.movie_id}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
