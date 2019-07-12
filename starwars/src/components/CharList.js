import React from 'react'
import './StarWars.css'
import Char from './Char.js';
import { Loader } from "semantic-ui-react";

function CharList(props) {
  console.log(props)

  if (!props.data) {
    return (
  <div className="ui active inverted dimmer">
    <Loader className="ui large text loader">
      Fetching Your Characters
    </Loader>
  </div>
    )

  } else {
  return (
    <div className='charList'>
      {props.data.map(char => {
        return <Char char={char} key={char.created} />;
      })}
    </div>
    );
  }
}

export default CharList;