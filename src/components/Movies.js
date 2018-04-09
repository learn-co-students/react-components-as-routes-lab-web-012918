import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies);

  const makeMovies = () => {
    return movies.map(movie => {
      return (<div>
        <h1>Movies Page</h1>

        <h3>{movie.title}</h3>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map(genre => {
            return <li>{genre}</li>
          })}
        </ul>
       </div>)
    })
  }

  return (
    <div>
      {makeMovies()}
    </div>
  );
};

export default Movies;
