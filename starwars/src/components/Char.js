import React from "react"

const Char = props => {
  return (
    <div className="char">
      <h2>Name: {props.char.name}</h2>
      <h3>Gender: {props.char.gender}</h3>
    </div>
  );
};

export default Char;
