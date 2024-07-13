import { useState, useEffect } from "react";

var obtenerPokemones = async () => {
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
    useEffect( () =>
        obtenerPokemones()
          .then(pokemones => {
            console.log(pokemones)
            setPokemones(pokemones)
        })
          .catch(error => {
            console.log('Error' + error)
            setError(error)
        }), []);
    if(error) return <Error/>    
    
    return (
      <>
        <h2>Pokemones</h2>
        <ol>
        {
         pokemones.map(pokemon => (
        // <Item key={pokemon.url} pokemon={pokemon.name}></Item>
        <li key={pokemon.url}>{pokemon.name}</li>
        ))
        }
        </ol>
      </>
    );
  }

export default Pokemones;

