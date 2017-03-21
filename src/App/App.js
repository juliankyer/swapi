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
      vehicles: {},
      planets: {},
      people: {},
      peopleClicked: false
    }
  }


  componentDidMount() {
    const randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
    fetch(`http://swapi.co/api/films/${randomNumber}/`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ film: json })
    });
    
    fetch('http://swapi.co/api/people/')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ people: json })
      });
      
      fetch('http://swapi.co/api/vehicles/')
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          this.setState({ vehicles: json })
        });
        
      fetch('http://swapi.co/api/planets/')
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          this.setState({ planets: json })
        });
      
  }
  
  handleClick() {
    this.setState({ peopleClicked: true });
    
  }

  render() {
    return (
      <div className="App">
        <header>Star Wars</header>
        <SideText film={this.state.film}/>
        <Controls handleClick={ ()=> this.handleClick() }/>
        { this.state.peopleClicked ? <Board state={this.state} /> : null}
      </div>
    );
  }
}

App.propTypes = {
  film: React.PropTypes.object,
  vehicles: React.PropTypes.object,
  planets: React.PropTypes.object,
  people: React.PropTypes.object
};

export default App;



//state and fetch live in App
//sidebar component for random text
//controls component with buttons for people, planets, vehicles, favorites
//
