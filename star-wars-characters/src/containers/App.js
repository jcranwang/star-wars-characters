import React, { Component } from "react";
import Card from "../components/Card";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-black mb3">
          <div className="mw-100">
            <img
              className="h5"
              src="http://imageshack.com/a/img922/3783/oyvsRd.png"
              alt="Star Wars"
            />
          </div>
          <h2 className="white code static dib">Characters Collection</h2>
        </div>
        <Card name="Luke Skywalker" height="172" homeworld="Tatooine" />
      </div>
    );
  }
}

export default App;
