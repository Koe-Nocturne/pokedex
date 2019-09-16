import React from 'react';

class Pokecard extends React.Component {
  render() {
    console.log("3");
    console.log("Pokemon ", this.props.pokemon);
    const { id, name, type, base_experience } = this.props.pokemon;
    const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
      <div>
        <p>{name}</p>
        <img src={imageURL}></img>

        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    )
  };
};
export default Pokecard;