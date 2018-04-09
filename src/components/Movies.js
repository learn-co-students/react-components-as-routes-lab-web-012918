import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieData = () => {
    return movies.map(movie => {
      return <div>
        <h3>{movie.title}</h3>
        <p>{movie.time}</p>
        {movie.genres.map(genre => {
          return <p>{genre}</p>
        })}
      </div>
    })
  }

  return (
    <div>
        <h1>Movies</h1>
        {movieData()}
    </div>
  );
};

export default Movies;
