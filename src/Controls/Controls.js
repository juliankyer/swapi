import React from 'react';
import './Controls.css';


const Controls = ({ handleClick }) => {
  return (
    <div className="controls">
      <div className="select-buttons">
          <button onClick={ () => handleClick('peopleClicked') }
                  className="controls-button">People</button>
          <button onClick={ () => handleClick('planetsClicked') }
                  className="controls-button">Planets</button>
          <button onClick={ () => handleClick('vehiclesClicked') }
                  className="controls-button">Vehicles</button>
      </div>
      <button className="favorites-button">Favorites</button>
    </div>
  )
}
//make call for people in here on click

export default Controls;
