import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MOVIES_API_URL } from "../constants/APIConstants"; 

import { Link } from "react-router-dom";


// import "../assets/css/card.css";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/movies/${id}`).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <h3>Loading...</h3>;

  return (
    <div className="page-wrapper">
      <div className="card" style={{ maxWidth: "750px" }}>
        
        <img 
          src={movie.poster_url} 
          alt={movie.title}
          style={{
            width: "100%",
            borderRadius: "15px",
            marginBottom: "20px",
            maxHeight: "400px",
            objectFit: "cover"
          }}
        />

        <h2>{movie.title}</h2>
        <p><b>Genre:</b> {movie.genre}</p>
        <p><b>Description:</b> {movie.description}</p>
        <p><b>Year:</b> {movie.release_year}</p>
        <p><b>Rating:</b> ⭐ {movie.rating}</p>

        <button 
          className="btn-primary"
          onClick={() => navigate(`/book/${movie.movie_id}`)}
        >
          Book Ticket
        </button>
      </div>
    </div>
  );
}
