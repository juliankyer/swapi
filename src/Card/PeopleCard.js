import React, { Component } from 'react';
import './PeopleCard.css';

class PeopleCard extends Component {
  constructor({ peopleInfo }) {
    super();
    this.state = {
      name: '',
      homeland: '',
      species: '',
      population: ''
    }

    this.setState({name: this.peopleInfo.name})
  }

  getHomeWorld(peopleInfo) {
    fetch(peopleInfo)
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json);
      this.setState({ homeworld: json})
    })
  }

  render() {
    return (
      <div className="people-card">
        <p>{this.state.name}</p>
        <p>{this.getHomeWorld(this.peopleInfo.homeworld)}</p>
      </div>
    )  
  }





}

export default PeopleCard;
