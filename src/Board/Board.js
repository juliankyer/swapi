import React from 'react';
import './Board.css';
import PersonCard from '../Card/PersonCard';
import VehicleCard from '../Card/VehicleCard';
import PlanetCard from '../Card/PlanetCard';

const Board = ({ data, toggleFavorite }) => {
  let pplMap = data.people.results.map((peep, index) => {
    return (<PersonCard toggleFavorite={ toggleFavorite }
                        key={index}
                        peopleInfo={ peep }
                        />)
  });

  let vehiclesMap = data.vehicles.results.map((vehicle, index) => {
    return (<VehicleCard toggleFavorite={ toggleFavorite }
                         key={index}
                         vehiclesInfo={ vehicle }
                         />)
  });

  let planetsMap = data.planets.results.map((planet, index) => {
    return (<PlanetCard toggleFavorite={ toggleFavorite }
                        key={index}
                        planetsInfo={ planet }
                        />)
  });

  return (
    <div className="board">
      {data.peopleClicked ? pplMap : null}
      {data.vehiclesClicked ? vehiclesMap : null}
      {data.planetsClicked ? planetsMap : null}
    </div>
  )
};

export default Board;
