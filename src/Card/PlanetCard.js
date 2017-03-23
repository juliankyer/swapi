import React, { Component } from 'react';
import './PlanetCard.css';
import classNames from 'classnames';

class PlanetCard extends Component {
  constructor(props) {
    super();
    this.state = {
      residents: [],
      noResidents: '',
      favorited: false
    }
  };

  toggleFavorite() {
    this.setState({ favorited: !this.state.favorited })
  }

  fetchResidents() {
    let array = this.props.planetsInfo.residents;

    array.forEach(resident => {
      fetch(resident)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.state.residents.push(json.name+', ')
        this.setState({residents: this.state.residents})
      });
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
    const identifiers = classNames({
      'people-card': this.state,
      'fav-flag': this.state.favorited,
      'unfav-flag': !this.state.favorited
    });
    return (
      <div className={identifiers}>
        <p className="planet-name">{ this.props.planetsInfo.name }</p>
        <p className="planet-terrain"> Terrain:  { this.props.planetsInfo.terrain }</p>
        <p className="planet-population">Population: { this.props.planetsInfo.population }</p>
        <p className="planet-climate">Climate:  { this.props.planetsInfo.climate }</p>
        <p className="planet-residents">Residents: { this.state.residents.length ? this.state.residents : this.state.noResidents } </p>
        <button className="fav"
                onClick={ () => this.toggleFavorite() }>
        </button>
      </div>
    )
  };
};

PlanetCard.propTypes = {
  residents: React.PropTypes.array,
  noResidents: React.PropTypes.array,
  favorited: React.PropTypes.bool
};

export default PlanetCard;
