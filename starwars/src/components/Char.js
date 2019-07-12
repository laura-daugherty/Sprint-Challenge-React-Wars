import React from 'react'

const Char = props => {
  const { char } = props
  return (
    <div className='char'>
      <h2 className='charName'>Name: {char.name}</h2>
      <h3>Gender: {char.gender}</h3>
      <h3>Height: {char.height}</h3>
      <h3>Birth Year: {char.birth_year}</h3>
    </div>
  );
};

export default Char;
