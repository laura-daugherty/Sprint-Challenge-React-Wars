import React from "react"

const Char = props => {
  return (
    <div className="char">
      <h2 className="charName">Name: {props.char.name}</h2>
      <h3>Gender: {props.char.gender}</h3>
      <h3>Height: {props.char.height}</h3>
      <h3>Birth Year: {props.char.birth_year}</h3>
    </div>
  );
};

export default Char;
