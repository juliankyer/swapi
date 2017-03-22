import React from 'react';
import './Board.css';
import PeopleCard from '../Card/PeopleCard';
import VehiclesCard from '../Card/VehiclesCard';

const Board = ({ data }) => {
  console.log(data);
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


  return <div className="board">
            {data.peopleClicked ? pplMap : null}
            {data.vehiclesClicked ? vehiclesMap : null}
          </div>
}

export default Board;
