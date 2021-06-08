import React from "react";
import "../stylesheets/App.scss";
import data from '../data/pokemons.json';
import Pokelist from "./PokeList";
// console.log(data)
function App() {
  return (
    <div className="App">
      <h1 className="title">Tengo que atraparlos</h1>
      <Pokelist allPokemons={data} />
    </div>
  );
}

export default App;
