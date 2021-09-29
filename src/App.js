
import './App.css';
import Navbar from "./components/Navbar";
import Card from './components/Card'
import React, {useState, useEffect} from "react";
import {getAllPokemon, getPokemon} from "./services/pokemon";


function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const initialUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);


  //Fetch data using all pokemon API
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  },[]);

  //Go to next page
  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.prev);
    setLoading(false);
  }

  //Go to previous page
  const prev = async () => {
    //If no previous page just return
    if (!prevUrl) {
      return;
    }
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.prev);
    setLoading(false);
  }

  // Getting information of pokemon using the api url attached to each pokemon
  const loadingPokemon = async (data) => {
    let _pokemon = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(_pokemon)
  }

  console.log(pokemonData)
  // html for each page with navbar and grid container holding information
  return(
      <div>
        {
          //Ternary operator to check if page is loading. Otherwise display data
          loading ? <h1>Loading...</h1> : (
              <>
                <Navbar></Navbar>
                <div className={'btn'}>
                  <button onClick={prev}>Prev</button>
                  <button onClick={next}>Next</button>
                </div>
                <div className={"grid-container"}>
                  {pokemonData.map((pokemon, i) => {
                    return <Card key={i} pokemon={pokemon}/>
                  })}
                </div>
              </>
        )
      }
      </div>
  );

}



export default App;
