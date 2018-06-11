import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let dir = directors.map(director => {
     return (<div key={director.name} className="director">
       {director.name}
       {director.movies}
     </div>)
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {dir}
    </div>
  );
}

export default Directors
