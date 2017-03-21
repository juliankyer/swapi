import React from 'react';
import './Card.css';

const Card = ({ state }) => {
  //name, homeworld, species, population, favorite button 
  const people = state.people.results;
  const person = people.map(value => {
  // let homeworld = fetch({value.homeworld});
  console.log(value.homeworld.name);
    return (
      <p>{value.name}</p>
      
      )
  })
  return (
    <div>{person}</div>
  )
  


}

export default Card;