import React, { Component } from 'react';
import logo from './assets/images/sp-logo.png';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          src={logo} alt="logo"
          className="Logo"
          style={{ width: 120 }}
        />
      </div>
    )
  }
}

export default App;
