import React from 'react'
import './StarWars.css'
import Char from './Char.js';

function CharList(props) {
  return (
    <div className='charList'>
      {props.chars.map(char => {
        return <Char char={char} key={char.id} />;
      })}
    </div>
  );
}

export default CharList;