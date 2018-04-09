import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorData = () => {
    return directors.map(director => {
      return <div>
        <h3>{director.name}</h3>
        {director.movies.map(movie => {
          return <p>{movie}</p>
        })}
      </div>
    })
  }

  return (
    <div>
      <h1>Directors</h1>
      {directorData()}
    </div>
  );
}

export default Directors
