import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let mov = movies.map(movie => {
     return (<div key={movie.name} className="movie">
       {movie.title}
       {movie.time}
       {movie.genres}
     </div>)
   })

  return (
    <div>
        <h1>Movies Page</h1>
        {mov}
    </div>
  );
};

export default Movies;
