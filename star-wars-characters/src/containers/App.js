import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchField: ""
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

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { characters, searchField } = this.state;
    const filterCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <div className="bg-black mb3 tc">
          <div className="mw-100">
            <img
              className="h5"
              src={require("../media/title.jpg")}
              alt="Star Wars"
            />
          </div>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <CardList characters={filterCharacters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
