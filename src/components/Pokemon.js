import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  async function getPokemon(e) {
    e.preventDefault();
    let pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    let { results } = await pokemons.json();
    let newRes = results.map(async (result) => {
      let response = await fetch(result.url);
      let goodStuff = await response.json();
      return goodStuff;
    });
    console.log(newRes);
    setPokemon(results);
    console.log(pokemon);
  }

  return (
    <>
      <button onClick={getPokemon}>Get some Pokemons</button>
      {pokemon.map((poke, i) => {
        return (
          <div key={i}>
            <h1 key={i}>{poke.name}</h1>
            {/* <img src={poke.sprites.back_default} /> */}
          </div>
        );
      })}
    </>
  );
};

export default Pokemon;
