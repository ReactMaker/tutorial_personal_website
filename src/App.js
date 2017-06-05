import React, { Component } from 'react';
import Intro from './Intro.js';
import PhotoWall from './PhotoWall';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="home">
        <Intro />
        <PhotoWall />
      </div>
    );
  }
}

export default App;
