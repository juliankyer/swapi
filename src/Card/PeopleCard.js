import React, { Component } from 'react';
import './PeopleCard.css';

class PeopleCard extends Component {
  constructor({ peopleInfo }) {
    super();
    this.state = {
      name: '',
      homeworld: '',
      species: '',
      population: ''
    }
  }



  render() {
    return (
      <div className="people-card">
        <p>heyy{this.state.name}</p>
      </div>
    )
  }


}

PeopleCard.propTypes = {
  name: React.PropTypes.string,
  homeworld: React.PropTypes.string,
  species: React.PropTypes.string,
  population: React.PropTypes.string,
};

export default PeopleCard;
