import React from 'react';
import './Board.css';
import Card from '../Card/Card';

const Board = ({ state }) => {
  return (
    <div className="board">
      <Card state={ state } />
    
    </div>
  )
}

export default Board;