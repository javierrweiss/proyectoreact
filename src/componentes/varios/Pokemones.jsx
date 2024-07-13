import { useState, useEffect } from "react";

const obtenerPokemones = async () => {
    try {
        const peticion = await fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
        const resultados = await peticion.json()
        return resultados.results
    } catch (error) {
        return Promise.reject(error);
    }
}

function Item({ pokemon }){
    return (
        <li>
            {pokemon}
        </li>
    )
}

function Error(){
    return (
        <p>No se pudieron obtener los pokemones</p>
    )
}

function Pokemones() {
    const [pokemones, setPokemones] = useState([]);
    const [error, setError] = useState(null);
    useEffect( () => {
        obtenerPokemones()
          .then(pokemones => setPokemones(pokemones))
          .catch(error => setError(error))}, [pokemones, error]);
    if(error) return <Error/>    
    const items = pokemones.map(pokemon => 
         <Item key={pokemon.url} pokemon={pokemon.name}/>
        );
    return (
      <>
        <h2>Pokemones</h2>
        <ol>
        {
         items
        }
        </ol>
      </>
    );
  }

export default Pokemones;

