import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let act = actors.map(actor => {
    return (<div key={actor.name} className="actor">
      {actor.name}
      {actor.movies}
    </div>)
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {act}
    </div>
  );
};

export default Actors;
