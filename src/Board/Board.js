import React from 'react';
import './Board.css';
import PeopleCard from '../Card/PeopleCard';
import VehiclesCard from '../Card/VehiclesCard';
import PlanetsCard from '../Card/PlanetsCard';

const Board = ({ data, toggleFavorite }) => {
  let pplMap = data.people.results.map((peep, index) => {
    return (<PeopleCard toggleFavorite={ toggleFavorite } key={index}
                        peopleInfo={ peep }/>
            )
  })

  let vehiclesMap = data.vehicles.results.map((vehicle, index) => {
    return (<VehiclesCard toggleFavorite={ toggleFavorite } key={index}
                        vehiclesInfo={ vehicle }/>
            )
  })

  let planetsMap = data.planets.results.map((planet, index) => {
    return (<PlanetsCard toggleFavorite={ toggleFavorite } key={index}
                        planetsInfo={ planet }/>
            )
  })


  return <div className="board">
            {data.peopleClicked ? pplMap : null}
            {data.vehiclesClicked ? vehiclesMap : null}
            {data.planetsClicked ? planetsMap : null}
          </div>
}

export default Board;
