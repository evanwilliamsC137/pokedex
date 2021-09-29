
import './App.css';
import Card from './components/Card'
import React, {useState, useEffect} from "react";
import {getAllPokemon, getPokemon} from "./services/pokemon";


function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const initialUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);


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

  const loadingPokemon = async (data) => {
    let _pokemon = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(_pokemon)
  }

  console.log(pokemonData)
  return(
      <div>
        {
          loading ? <h1>Loading...</h1> : (
              <>
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

//   useEffect(() => {
//     fetch(initialUrl)
//         .then(res => res.json())
//         .then(setPokemonData)
//   },[initialUrl])
//
//
//     if (pokemonData) {
//       for (let i = 0; i < pokemonData.length; i++) {
//         return (
//             <div>
//               <h1>{pokemonData.name}</h1>
//             </div>
//         );
//       }
//     }else {
//       return <div>Sorry no pokemon</div>
//     }
}



export default App;
