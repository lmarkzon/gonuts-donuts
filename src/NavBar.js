import React, { Component } from 'react';
import logo from './donut.svg';

class NavBar extends Component {
  render() {
    return(
      <div className="App-nav">
        <img src={logo} className="App-logo" alt="logo" />
        <span><h2>Gonuts Donuts</h2></span>
      </div>
    )
  }
}

export default NavBar;
