import React from 'react';
import './Board.css';
import PeopleCard from '../Card/PeopleCard';

const Board = ({ peopleInfo }) => {
  let pplMap = peopleInfo.map((peep, index) => {
    return (<PeopleCard key={index}
                        peopleInfo={ peep }/>
            )
  })

  return <div className="board">dgf{pplMap}</div>
}

export default Board;
