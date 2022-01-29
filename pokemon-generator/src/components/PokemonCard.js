import React from 'react';

const PokemonCard = (props) => {
    console.log(props);
    console.log(props.pokemon.rarity)

    // eslint-disable-next-line no-unused-vars
    function displayDescription(description){
      if(description !== "")return <p>{description}</p>
    }
    
    return(
        
    <div className={props.pokemon.type}>
        <section className='title-row'>
            <p className='rarity'></p>
            <h1 className='name'>{props.pokemon.name}</h1>
            <p className='health'>{props.pokemon.hp}</p>
            <img alt="" className="element-icon" src={props.pokemon.icon}></img>

        </section>
        <section className="character-img">
          <img alt="" src={props.pokemon.img}></img>
        </section>
        <section className="character-meta">
          <p>{props.pokemon.meta}</p>
        </section>
        {(props.pokemon.abilities).map(ability =>(
          <section className='character-ability'>
              {console.log(ability.ability)}
            <span className="ability-cost">
              {/* {(ability.icons).map(icon =>(
                <img alt=""  className="element-icon"  src={icon}></img>
              ))} */}
            </span>
            <span className="ability-description">
            <span className="ability-name">{ability.ability.name}</span>
            {/* <displayDescription description={props.description} /> */}
          </span>
          {/* <span className="ability-damage">{ability.damage}</span> */}

          </section>
        ))}
       <section className="character-stats">
          <span className="character-stat">
            <p>weakness</p>
            <img alt="" className="element-icon" src={props.pokemon.weakness}></img>
          </span>
          <span className="character-stat">
            <p>resistence</p>
          </span>{" "}
          <span className="character-stat">
            <p>retreat cost</p>
            <img alt="" className="element-icon"  src={props.pokemon.cost}></img>
          </span>
          </section>
          <section className="character-description">
            <p>{props.pokemon.description}</p>
        </section>
        <section> </section>

    </div>
    )
    

}

export default PokemonCard;