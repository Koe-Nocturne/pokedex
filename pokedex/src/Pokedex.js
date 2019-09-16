import React from 'react';
import  Pokecard from "./Pokecard"


class Pokedex extends React.Component {
  render() {
    console.log("PP", this.props.pokemonArray);
    return (
      <div>
        {this.props.pokemonArray.map(pokemon => <Pokecard pokemon={pokemon} />)}

      </div>

    )
  };
};
export default Pokedex;