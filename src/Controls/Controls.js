import React from 'react';
import './Controls.css';


const Controls = ({ handleClick }) => {
  return (
    <div className="controls">
      <div className="select-buttons">
          <button onClick={ () => handleClick('peopleClicked') }
                  className="controls-button">People</button>
          <button onClick={ () => handleClick('planetsClicked') }
                  className="planets-button controls-button">Planets</button>
          <button onClick={ () => handleClick('vehiclesClicked') }
                  className="controls-button">Vehicles</button>
      </div>
      <button className="favorites-button">
        {<img className="fav-icon-button"
             src={require("../Card/millennium-falcon.svg")}
             alt="star wars logo"
             />}Favorites</button>
    </div>
  )
};

export default Controls;
