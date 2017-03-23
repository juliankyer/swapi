import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls';
import SideText from '../SideText/SideText';
import Board from '../Board/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
      people: { results: [] },
      vehicles: { results: [] },
      planets: { results: [] },
      peopleClicked: true,
      vehiclesClicked: false,
      planetsClicked: false
    }
  }

  componentDidMount() {
    const randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
    fetch(`http://swapi.co/api/films/${randomNumber}/`)
      .then(response => response.json())
      .then(json => this.setState({ film: json }));

      fetch('http://swapi.co/api/people/')
      .then(response => response.json())
      .then(json => this.setState({ people: json }));

      fetch('http://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(json => this.setState({ vehicles: json }));

      fetch('http://swapi.co/api/planets/')
      .then(response => response.json())
      .then(json => this.setState({ planets: json }));
  };

  handleClick(key) {
    if (key === 'peopleClicked') {
      this.setState({ 'peopleClicked': true,
                      'vehiclesClicked': false,
                      'planetsClicked': false });
    } else if (key === 'vehiclesClicked') {
      this.setState({ 'peopleClicked': false,
                      'vehiclesClicked': true,
                      'planetsClicked': false });
    } else {
      this.setState({ 'peopleClicked': false,
                      'vehiclesClicked': false,
                      'planetsClicked': true});
    }
  };

  toggleFavorite() {
    console.log('boom');
  };

  render() {
    return (
      <div className="App">
        <img className="logo"
             src={require("../Star-Wars-Logo.png")}
             alt="star wars logo"
             />
        <SideText film={this.state.film}/>
        <Controls handleClick={ (key)=> this.handleClick(key) }/>
        <Board toggleFavorite={ () => this.toggleFavorite() }
               data={ this.state }
               />
      </div>
    );
  }
};

App.propTypes = {
  film: React.PropTypes.object,
  people: React.PropTypes.object,
  planets: React.PropTypes.object,
  vehicles: React.PropTypes.object,
  peopleClicked: React.PropTypes.string,
  planetsClicked: React.PropTypes.string,
  vehiclesClicked: React.PropTypes.string
};

export default App;
