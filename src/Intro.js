import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="section" id="introPage">
        <div>
          <h1 className="title">Hi 我是XXX</h1>
          <p className="des">我是一個程式開發員，興趣是攝影，有一些夢想</p>
        </div>
      </div>
    );
  }
}

export default Intro;
