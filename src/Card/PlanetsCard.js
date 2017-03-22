import React, { Component } from 'react';
import './PlanetsCard.css';

class PlanetsCard extends Component {
  constructor(props) {
    super();
    this.state = {
      residents: {},
    }
  }
  
  checkResidentLength() {
    if(this.props.planetsInfo.residents.length > 0) {
      //end up returning a p tag that says no residents
    } else {
      let array = this.props.planetsInfo.residents;
      array.map(resident => {
        console.log(resident.name)
        return resident.name})
    }
  }
  
  componentDidMount() {
    this.checkResidentLength();
    console.log(this.props.planetsInfo.residents);
  }

  render() {
    return (
      <div className="planet-card">
        <p className="planet-name">{this.props.planetsInfo.name}</p>
        <p className="planet-terrain">{this.props.planetsInfo.terrain}</p>
        <p className="planet-population">population {this.props.planetsInfo.population}</p>
        <p className="planet-climate">{this.props.planetsInfo.climate}</p>
        <p className="planet-residents">{this.props.planetsInfo.residents.length}</p>
        <button className="fav"></button>
      </div>
    )
  }

}

PlanetsCard.propTypes = {
  residents: React.PropTypes.array,
};

export default PlanetsCard;
