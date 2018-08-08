import React, { Component } from "react";
import Card from "../components/Card";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card name="Luke Skywalker" height="172" homeworld="Tatooine" />
      </div>
    );
  }
}

export default App;
