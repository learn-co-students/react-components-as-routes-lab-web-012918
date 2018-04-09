import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors);

  const makeActors = () => {
    return actors.map(actor => {
      return(
        <div>
          <h1>Actors Page</h1>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map(movie => {
              return(
                <li>{movie}</li>
              )
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      {makeActors()}
    </div>
  );
};

export default Actors;
