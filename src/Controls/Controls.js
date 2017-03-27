import React from 'react';
import './Controls.css';


const Controls = ({ handleClick, handleFavorites, data }) => {
  return (
    <div className="controls">
      <div className="select-buttons">
          <button onClick={ () => handleClick('peopleClicked') }
                  className="controls-button">People</button>
          <button onClick={ () => handleClick('planetsClicked') }
                  className="planets-button controls-button">Planets</button>
          <button onClick={ () => handleClick('vehiclesClicked') }
                  className="vehicles-button controls-button">Vehicles</button>
      </div>
      <button onClick={ () => handleFavorites() } 
              id="favorites-button" 
              className="favorites-button">
        Favorites</button>
    </div>
  )
};

export default Controls;
