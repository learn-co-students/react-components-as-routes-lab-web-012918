import React from 'react';
import { movies } from '../data';

const Movies = (props) => {

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div>
          <h3>Movie: {movie.title}</h3>
          <p>Time:{movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
