import React, { Component } from 'react';
import './PersonCard.css';

class PersonCard extends Component {
  constructor(props) {
    super();
    this.state = {
      homeworld: {},
      species: {},
    }
  };

  componentDidMount() {
    fetch(this.props.peopleInfo.homeworld)
    .then(response => response.json())
    .then(json => this.setState({ homeworld: json}))

    fetch(this.props.peopleInfo.species)
    .then(response => response.json())
    .then(json => this.setState({ species: json}))
  };

  render() {
    return (
      <div className="people-card">
        <p className="person-name">{ this.props.peopleInfo.name }</p>
        <p className="person-world">From: { this.state.homeworld.name }</p>
        <p className="person-pop">Population: { this.state.homeworld.population }</p>
        <p className="person-species">Species: { this.state.species.name }</p>
        <button className="fav"
                onClick={ () => this.props.toggleFavorite() }>
        </button>
      </div>
    )
  };
};

PersonCard.propTypes = {
  homeworld: React.PropTypes.object,
  species: React.PropTypes.object
};

export default PersonCard;
