import React, { Component } from 'react';
import './PlanetCard.css';

class PlanetCard extends Component {
  constructor(props) {
    super();
    this.state = {
      residents: [],
      noResidents: ''
    }
  };

  fetchResidents() {
    let array = this.props.planetsInfo.residents;

    array.forEach(resident => {
      fetch(resident)
      .then(response => response.json())
      .then(json => {
        this.state.residents.push(json.name)
        this.setState({residents: this.state.residents})
      })
    })
  };

  componentDidMount() {
    if(this.props.planetsInfo.residents.length > 0) {
      this.fetchResidents()
    } else {
      this.setState({noResidents: 'unknown'})
    }
  };

  render() {
    return (
      <div className="planet-card">
        <p className="planet-name">{ this.props.planetsInfo.name }</p>
        <p className="planet-terrain"> Terrain:  { this.props.planetsInfo.terrain }</p>
        <p className="planet-population">Population: { this.props.planetsInfo.population }</p>
        <p className="planet-climate">Climate:  { this.props.planetsInfo.climate }</p>
        <p className="planet-residents">Residents: { this.state.residents.length ? this.state.residents : this.state.noResidents }</p>
        <button className="fav"
                onClick={ () => this.props.toggleFavorite() }>
        </button>
      </div>
    )
  };
};

PlanetCard.propTypes = {
  residents: React.PropTypes.array,
  noResidents: React.PropTypes.array
};

export default PlanetCard;
