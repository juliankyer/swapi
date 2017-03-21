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
      people: {results: []}
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

      fetch('http://swapi.co/api/people/')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ people: json })
      });
    });
  }

  handleClick() {

  }

  render() {
    return (
      <div className="App">
        <header>Star Wars</header>
        <SideText film={this.state.film}/>
        <Controls handleClick={ ()=> this.handleClick() }/>
        <Board peopleInfo={ this.state.people.results }/>
      </div>
    );
  }
}

App.propTypes = {
  film: React.PropTypes.object,
  people: React.PropTypes.array,
};

export default App;



//state and fetch live in App
//sidebar component for random text
//controls component with buttons for people, planets, vehicles, favorites
//
