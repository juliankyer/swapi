import React from 'react';
import './SideText.css'

const SideText = ({ film }) => {
  return (
    <div className="side-text">
      <marquee behavior="scroll" direction="up">
        <p className="film opening">{film.opening_crawl}</p>
        <p className="film title">{film.title}</p>
        <p className="film date">{film.release_date}</p>
      </marquee>
    </div>
  )
};

export default SideText;
