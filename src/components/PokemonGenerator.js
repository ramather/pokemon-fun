import React, { useState, Suspense, useEffect } from "react";
import axios, { Axios } from "axios";
import PokemonCard from "./PokemonCard";


const PokemonGenerator = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false)


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
    setIsLoaded(false);
    if(pokemonName === ''){
      setIsLoaded(true);

      setIsLoaded(true);

      return alert('cannot be blank')
    }
   
    const { data } = await axios.get(
      
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    ).catch(function (error) {
      console.log('caught')
      console.log(error.toJSON());
      setIsLoaded(true);
      setIsError(true);
      console.log(isError)
      return alert(error)



    });
    setIsError(false)
    
    const { data: description } = await axios.get(data.species.url);

    const getAbilities = async (abilitiesObj) => {
      const result = await Promise.all(
        abilitiesObj.map(async (ability) => {
          const url = ability.ability.url;
          const { data } = await axios.get(url);
          return {
            name: ability.ability.name,
            description: data.effect_entries[1].short_effect,
          };
        })
      );
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
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
    });
    setIsLoaded(true);
  };


  return (
    <div>

      <label>
      <input
        
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value.toLowerCase());
        }}
      ></input>
      <button  variant="outlined" onClick={getPokemon}>Search</button>
      </label>
     
      {pokemon.name && (
        <div className="about">
        
          {isLoaded ? <PokemonCard pokemon={pokemon} isError={isError} /> : <div>loading</div>}

        </div>
      )}
    </div>
  );
};



export default PokemonGenerator;
