import React, { Component } from "react";
import { render } from "react-dom";
import { cars } from "./Cars";
import CarsList from "./components/CarsList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { cars: cars };
  }

  render() {
    return (
      <div className="App">
        <h1>PropTypes</h1>
        <h3>Lets build some cars</h3>
        <CarsList cars={this.state.cars} />
      </div>
    );
  }
}

export default App;
