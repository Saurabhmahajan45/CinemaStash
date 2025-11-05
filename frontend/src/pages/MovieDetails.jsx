import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:6500/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!movie) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>{movie.title}</h2>
      <img src={movie.poster_url} width="250" />
      <p><b>Genre:</b> {movie.genre}</p>
      <p><b>Description:</b> {movie.description}</p>
      <p><b>Year:</b> {movie.release_year}</p>
      <p><b>Rating:</b> ⭐ {movie.rating}</p>

      <button 
        onClick={() => navigate(`/book/${movie.movie_id}`)}
        style={{ padding: "10px", marginTop: "20px", width: "200px" }}
      >
        Book Now
      </button>
    </div>
  );
}
