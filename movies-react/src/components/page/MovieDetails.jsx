import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const API_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "c49e9b0a00b9d455d7f9c0f12a4f5677"; // API raktas be Bearer token

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${API_URL}${id}?api_key=${API_KEY}&language=en-US`;
    
    fetch(url, { method: "GET", headers: { accept: "application/json" } })
      .then((res) => res.json())
      .then((json) => {
        if (json.success === false) throw new Error(json.status_message);
        setMovie(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movie:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="movie-details">
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
};

export default MovieDetails;

