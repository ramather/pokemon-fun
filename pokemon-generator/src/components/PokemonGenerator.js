import React, { useState } from "react";
import axios, { Axios } from "axios";
import PokemonCard from "./PokemonCard";

const PokemonGenerator = () => {
  const [pokemonName, setPokemonName] = useState("");

  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    type: "",
    icon: "",
    cost: "./normal.png",
    weakness: "./water.png",
    weight: "",
    description: "",

    abilities: [],
  });

  const getPokemon = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const { data: description } = await axios.get(data.species.url);

    const  getAbilities = async (abilitiesObj) => {
      //given an object with a name and a url
      //i want to save the name, and get description from the URL
      // i want to return an array of objects with name, description

      const result = await Promise.all(abilitiesObj.map(async (ability) => {
        const url = ability.ability.url;
        const { data } = await axios.get(url);
        return {
          name: ability.ability.name,
          description: data.effect_entries[1].short_effect,
        };
      }));
      console.log(result)
      return result;
    };

    setPokemon({
      name: pokemonName,
      species: data.species.name,
      img: data.sprites.front_default,
      hp: data.stats[0].base_stat,
      type: data.types[0].type.name,
      abilities: await getAbilities(data.abilities),
      attack: data.stats[1].base_stat,
      icon: `./${data.types[0].type.name}.png`,
      weight: data.weight,
      description: description.flavor_text_entries[0].flavor_text,
      shape: description.shape.name,
    });

    // console.log(pokemon.abilities);
    // console.log(data);
    // console.log(description);
  };

  return (
    <div>
      <h1>Create your own pokemon card</h1>
      <input
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
      ></input>
      <button onClick={getPokemon}>Search</button>

      <div className="about">
        <PokemonCard pokemon={pokemon} />
      </div>
    </div>
  );
};

export default PokemonGenerator;
