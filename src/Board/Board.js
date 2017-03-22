import React from 'react';
import './Board.css';
import PeopleCard from '../Card/PeopleCard';
import VehiclesCard from '../Card/VehiclesCard';
import PlanetsCard from '../Card/PlanetsCard';

const Board = ({ data }) => {
  let pplMap = data.people.results.map((peep, index) => {
    return (<PeopleCard key={index}
                        peopleInfo={ peep }/>
            )
  })

  let vehiclesMap = data.vehicles.results.map((vehicle, index) => {
    return (<VehiclesCard key={index}
                        vehiclesInfo={ vehicle }/>
            )
  })

  let planetsMap = data.planets.results.map((planet, index) => {
    return (<PlanetsCard key={index}
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
