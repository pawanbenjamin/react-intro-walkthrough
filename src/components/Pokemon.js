import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  async function getPokemon(e) {
    e.preventDefault();
    let pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    let { results } = await pokemons.json();
    console.log(results);
    setPokemon(results);
  }

  return (
    <>
      <button onClick={getPokemon}>Get some Pokemons</button>
      {pokemon.map((poke, i) => {
        return (
          <div key={i}>
            <h1 key={i}>{poke.name}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Pokemon;
