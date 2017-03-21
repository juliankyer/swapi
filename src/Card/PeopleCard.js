import React, { Component } from 'react';
import './PeopleCard.css';

class PeopleCard extends Component {
  constructor(props) {
    super();
    this.state = {
      homeworld: {},
      species: {},
    }
  }

  componentDidMount() {
    this.setState({ name: this.props.name })

    fetch(this.props.peopleInfo.homeworld)
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({ homeworld: json})
    })

    fetch(this.props.peopleInfo.species)
    .then(response => {
      return response.json()
    })
    .then(json => {
      this.setState({ species: json})
    })
  }


  render() {
    return (
      <div className="people-card">
        <button className="fav">Fav</button>
        <p>name: {this.props.peopleInfo.name}</p>
        <p>homeworld: {this.state.homeworld.name}</p>
        <p>population: {this.state.homeworld.population}</p>
        <p>species: {this.state.species.name}</p>
      </div>
    )
  }

}

PeopleCard.propTypes = {
  homeworld: React.PropTypes.object,
  species: React.PropTypes.object
};

export default PeopleCard;
