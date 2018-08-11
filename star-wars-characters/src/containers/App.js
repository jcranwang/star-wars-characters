import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    let count = 1;
    while (count <= 12) {
      fetch(`https://swapi.co/api/people/${count}/`)
        .then(resp => resp.json())
        .then(character =>
          this.setState({ characters: this.state.characters.concat(character) })
        );
      count += 1;
    }
  }

  render() {
    const { characters } = this.state;
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
        <Scroll>
          <CardList characters={characters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
