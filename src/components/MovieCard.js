import React from 'react';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://via.placeholder.com/200x300';

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={posterUrl}
        alt={movie.title + ' poster'}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>{movie.overview.substring(0, 100)}...</p>
      </div>
    </div>
  );
};

export default MovieCard;
