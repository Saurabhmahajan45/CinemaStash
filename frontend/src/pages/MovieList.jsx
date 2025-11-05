import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:6500/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Movies</h2>

      {movies.map(movie => (
        <div key={movie.movie_id} style={{ marginBottom: "25px" }}>
          <img src={movie.poster_url} width="150" />
          <h3>{movie.title}</h3>
          <p>Rating: ⭐ {movie.rating}</p>

          <button 
            onClick={() => navigate(`/movies/${movie.movie_id}`)}
            style={{ padding: "8px", marginTop: "10px" }}
          >
            View Details
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}
