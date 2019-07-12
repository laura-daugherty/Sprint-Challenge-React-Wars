import React from 'react'
import './StarWars.css'

import Char from './Char.js';

import { Loader } from "semantic-ui-react";

function CharList(props) {
  console.log("charList props", props)

  if (!props.character) {
    return (
      <div 
        className="ui active inverted dimmer">
        <Loader className="ui large text loader">
          Click the Button
        </Loader>
      </div>
    )
  } else {
    return (
      <Char character={props.character} clickHandler={changeCharacter}/>
    );
  }
}

export default CharList;