import React, { Component } from 'react';
import './PlanetsCard.css';

class PlanetsCard extends Component {
  constructor(props) {
    super();
    this.state = {
      residents: [],
    }
  }

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
  }

  componentDidMount() {
    if(this.props.planetsInfo.residents.length > 0) {
      this.fetchResidents()
    }
  }

  render() {
    return (
      <div className="planet-card">
        <p className="planet-name">{this.props.planetsInfo.name}</p>
        <p className="planet-terrain"> Terrain:  {this.props.planetsInfo.terrain}</p>
        <p className="planet-population">Population: {this.props.planetsInfo.population}</p>
        <p className="planet-climate">Climate:  {this.props.planetsInfo.climate}</p>
        <p className="planet-residents">Residents: {this.state.residents}</p>
        <button className="fav" onClick={ () => this.props.toggleFavorite() }></button>
      </div>
    )
  }

}

PlanetsCard.propTypes = {
  residents: React.PropTypes.array,
};

export default PlanetsCard;
