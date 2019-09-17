import React from 'react';
import ReactDOM from 'react-dom';

class Pokecard extends React.Component {
  render() {
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