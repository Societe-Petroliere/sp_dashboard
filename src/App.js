import React, { Component } from 'react';
import Routes from './routes';

import "./styles/css/App.css";
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes style={{ margin: 0, padding: 0, boxSizing: "border-box" }}/>
      </div>
    )
  }
}

export default App;
