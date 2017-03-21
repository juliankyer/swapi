import React, { Component } from 'react';
import './PeopleCard.css';

class PeopleCard extends Component {
  constructor() {
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
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.species}</p>
        <p>{this.state.homeworld}</p>
        <p>{this.state.population}</p>
      </div>
    )
  }
  
  componentWillMount() {
    fetch('http://swapi.co/api/people/')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log(json.results);
        this.setState({ name: json.results })
      });
  }
}

PeopleCard.propTypes = {
  name: React.PropTypes.string,
  homeworld: React.PropTypes.string,
  species: React.PropTypes.string,
  population: React.PropTypes.string,
};

export default PeopleCard;