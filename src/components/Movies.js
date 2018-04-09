import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (

  <div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
    return (
      <div>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre => {
          return <li key={genre}>{genre}</li>
        })}
      </ul>

    </div>
    )
  })}</div>
  );
};

export default Movies;
