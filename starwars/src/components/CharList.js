import React from 'react'
import './StarWars.css'
import Char from './Char.js';
import Button from './Button'
import { Loader } from "semantic-ui-react";

function CharList(props) {
  console.log("charList props", props)

  if (!props.data) {
    return (
      <div 
        className="ui active inverted dimmer">
        <Loader className="ui large text loader">
          Fetching Your Characters
        </Loader>
      </div>
    )

  } else {
    return (
      <div 
        className='charList'
        style={ {
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center"
        } }
      >
      <button onClick={() => {
        props.clickHandler(props.data)
      }}>
        Fetch a new character
      </button>
    
        {/* {props.data.map(char => {
          return <Char char={char} key={char.created} />;
        })} */}
      </div>
    );
  }
}

export default CharList;