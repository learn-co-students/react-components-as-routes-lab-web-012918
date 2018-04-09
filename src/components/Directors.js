import React from 'react';
import { directors } from '../data';

const Director = ({name, movies}) => {
  return(
    <div>
      <h3>{name}</h3>
      <ul>
        { movies.map( movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map( director => Director(director) ) }
    </div>
  );
}

export default Directors
