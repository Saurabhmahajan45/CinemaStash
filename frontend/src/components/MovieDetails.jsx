import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById } from "../services/MovieServices";
import "../assets/css/card.css";

export  function MovieDetails() {
  const { id } = useParams(); // get movie_id from the URL
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
    return <h3 className="text-center mt-5">Loading movie details...</h3>;
  }

  if (!movie) {
    return <h3 className="text-center mt-5 text-danger">Movie not found!</h3>;
  }

  return (
    <div className="movie-details-wrapper">
      <div className="movie-details-card shadow-lg">
        <img
          src={movie.poster_url || "/images/placeholder.png"}
          alt={movie.title}
          className="movie-details-poster"
          onError={(e) => (e.currentTarget.src = "/images/placeholder.png")}
        />

        <div className="movie-details-info">
          <h2 className="movie-details-title">{movie.title}</h2>

          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Release Year:</strong> {movie.release_year}
          </p>
          <p>
            <strong>Description:</strong> {movie.description}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {movie.rating || "N/A"}
          </p>

          <div className="movie-details-actions">
            <button
              className="btn-primary"
              onClick={() => navigate(`/book/${movie.movie_id}`)}
            >
              🎟 Book Ticket
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate(-1)}
            >
              ⬅ Back to Movies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
