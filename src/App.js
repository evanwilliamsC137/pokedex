
import './App.css';
import React, {useState, useEffect} from "react";


function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const initialUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`

  useEffect(() => {
    fetch(initialUrl)
        .then(res => res.json())
        .then(setPokemonData)
  },[])

  if (pokemonData) {
    return (
        <div>{JSON.stringify(pokemonData)}</div>
    );
  }
}


export default App;
