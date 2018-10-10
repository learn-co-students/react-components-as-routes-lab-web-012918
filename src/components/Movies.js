import React from 'react';
import { movies } from '../data';

const Movie = ({title, time, genres}) => {
  return(
    <div id={title}>
      <h3>{title}</h3>
      <p>{time}</p>
      <ul>
        { genres.map( genre => <li>{genre}</li>) }
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map(movie => Movie(movie)) }
    </div>
  );
};

export default Movies;
