import React from 'react';
import './VehiclesCard.css';

const VehiclesCard = (props) => {

    return (
      <div className="vehicles-card">
        <p className="vehicle-name">{props.vehiclesInfo.name}</p>
        <p className="vehicle-model">Model: {props.vehiclesInfo.model}</p>
        <p className="vehicle-class">Class: {props.vehiclesInfo.vehicle_class}</p>
        <p className="vehicle-passengers">Passengers:  {props.vehiclesInfo.passengers}</p>
        <button className="fav"></button>
      </div>
    )
  }


export default VehiclesCard;
