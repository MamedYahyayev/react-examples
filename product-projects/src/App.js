import React, { Component , useContext } from "react";

import Aside from './components/Aside/Aside';
import Products from './components/Products/Products'

import "./App.css";
import "./App.css";

class App extends Component {

  render() {
    return (
        <div className="App">
          <Aside />
          <Products />
        </div>
    );
  }
}

export default App;
