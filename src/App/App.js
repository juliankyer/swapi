import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls';
import SideText from '../SideText/SideText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Star Wars</header>
        <SideText />
        <Controls />
      </div>
    );
  }
}

export default App;

//state and fetch live in App
//sidebar component for random text
//controls component with buttons for people, planets, vehicles, favorites
//
