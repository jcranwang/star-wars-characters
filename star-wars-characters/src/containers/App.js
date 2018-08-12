import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
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
        <div className="bg-black mb3 tc">
          <div className="mw-100">
            <img className="h5" src={require("../media/title.jpg")} alt="Star Wars" />
          </div>
          <SearchBox />
        </div>
        <Scroll>
          <CardList characters={characters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
