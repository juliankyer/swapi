import React, { Component } from 'react';
import './VehicleCard.css';
import classNames from 'classnames';


class VehicleCard extends Component {
  constructor(props) {
    super();
    this.state = {
      favorited: false
    }
  }

  toggleFavorite() {
    this.setState({ favorited: !this.state.favorited })
  }


  render() {
    const identifiers = classNames({
      'vehicle-card': this.state,
      'card': this.state,
      'fav-flag': this.state.favorited,
      'unfav-flag': !this.state.favorited
    });
    return (
      <div className={identifiers}>
        <p className="vehicle-name">{ this.props.vehiclesInfo.name }</p>
        <p className="vehicle-model">Model: { this.props.vehiclesInfo.model }</p>
        <p className="vehicle-class">Class: { this.props.vehiclesInfo.vehicle_class }</p>
        <p className="vehicle-passengers">Passengers:  { this.props.vehiclesInfo.passengers }</p>
        <button className="fav"
                onClick={ () => this.toggleFavorite() }>
        </button>
      </div>
    )
  };
};

VehicleCard.propTypes = {
  favorited: React.PropTypes.bool
};

export default VehicleCard;
