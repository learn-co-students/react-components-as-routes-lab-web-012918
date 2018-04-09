import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors);

  const makeDirectors = () => {
    return directors.map(director => {
      return(
        <div>
          <h1>Directors Page</h1>
          <h3>{director.name}</h3>
          <ul>
            { director.movies.map(movie => {
              return(
                <li>
                  {movie}
                </li>
              )
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      {makeDirectors()}
    </div>
  );
}

export default Directors
