import React, { useState, useEffect } from "react";
import "./MainCard.css";

function MainCard({ movie }) {
 





  const [isHovered, setIsHovered] = useState(false);
  console.log(movie);
  return (
    <div 
      className="main-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />

      </div>
      <div className="card-header">
        <div className="title">{movie.original_title}</div>
        <div className="rating-box">{movie.vote_average.toFixed(2)}</div>
      </div>
      <div className="card-bottom">Release Date: {movie.release_date}</div>
      
     
      <div className={`film-description ${isHovered ? "show" : ""}`}>
        <p style={{ fontWeight: "bold" }}>Overview</p>
        <p className="text">{movie.overview}</p>
       
      </div>
    </div>
  );
}

export default MainCard;
