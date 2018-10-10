import React from 'react';
import { actors } from '../data';

const Actor = ({name, movies}) => {
  return(
    <div className="actor">
      <h3>{name}</h3>
      <ul>
        { movies.map( movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map( actor => Actor(actor)) }
    </div>
  );
};

export default Actors;
// 1) should render one <h1 />, inside of a <div />
// 2) should render 'Actors Page' inside of the <h1 />
// 3) should render a <div /> for each actor
// 4) should render the right content for each actor with a className of 'actor'
