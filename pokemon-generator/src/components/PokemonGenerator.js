import React, { useState } from "react";
import axios, { Axios } from "axios";
import PokemonCard from "./PokemonCard";

const PokemonGenerator = () => {

    const [pokemonName, setPokemonName]=useState('')

    const [pokemon, setPokemon]=useState({
        rarity: "basic",
        name: "",
        species: "",
        img: "",
        hp: "",
        type: "",
        icon: "./fire.png",
        cost: "./normal.png",
        weakness: "./water.png",
        description:
          "Spits fire that is hot enough to melt boulders. known to unintentionally cause forest fires.",
        abilities: []
    
    })

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
            (response) => {
                console.log(response.data);
                setPokemon({
                    name: pokemonName,
                    species: response.data.species.name,
                    img: response.data.sprites.front_default,
                    hp: response.data.stats[0].base_stat,
                    type: response.data.types[0].type.name,
                    abilities: response.data.abilities,
                    attack: response.data.stats[1].base_stat,

                })
                // console.log(pokemon)
            }
        )
    }
  return (
    <div>
      <h1>Create your own pokemon card</h1>
      <input
      type="text"
      onChange={(event) => {
          setPokemonName(event.target.value)
      }}
      >
        
      </input>
      <button onClick={getPokemon}>Search</button>
      <div>{pokemonName}</div>
      <img src={pokemon.img}></img>
      <PokemonCard pokemon={pokemon}/>
    </div>
  );
};

export default PokemonGenerator;
