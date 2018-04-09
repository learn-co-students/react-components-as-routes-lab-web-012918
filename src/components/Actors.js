import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorData = () => {
    return actors.map(actor => {
      return (<div className={actor.name}>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    )})
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actorData()}
    </div>
  );
};

export default Actors;
