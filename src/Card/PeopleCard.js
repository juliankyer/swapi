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
        <p className="person-name">{this.props.peopleInfo.name}</p>
        <p className="person-world">from {this.state.homeworld.name},</p>
        <p className="person-pop">population {this.state.homeworld.population}</p>
        <p className="person-species">{this.state.species.name}</p>
        <button className="fav"></button>
      </div>
    )
  }

}

PeopleCard.propTypes = {
  homeworld: React.PropTypes.object,
  species: React.PropTypes.object
};

export default PeopleCard;
