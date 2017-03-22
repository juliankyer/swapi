import React from 'react';
import './Controls.css';


const Controls = ({ handleClick }) => {
  return (
    <div className="controls">
      <div className="select-buttons">
          <button onClick={ () => handleClick('peopleClicked') }
                  className="people-button">People</button>
          <button className="planets-button">Planets</button>
          <button onClick={ () => handleClick('vehiclesClicked') }
                  className="vehicles-button">Vehicles</button>
      </div>
      <button className="favorites-button">Favorites</button>
    </div>
  )
}
//make call for people in here on click

export default Controls;
