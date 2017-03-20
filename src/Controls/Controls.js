import React from 'react';
import './Controls.css';


const Controls = () => {
  return (
    <div className="controls">
      <div className="select-buttons">
          <button className="people-button">People</button>
          <button className="planets-button">Planets</button>
          <button className="vehicles-button">Vehicles</button>
      </div>
      <button className="favorites-button">Favorites</button>
    </div>
  )
}

export default Controls;
