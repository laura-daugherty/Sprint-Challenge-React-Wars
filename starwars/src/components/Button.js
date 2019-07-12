import React from 'react'
import { Loader } from "semantic-ui-react";

const Button = (props) => {
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
    return(
      <button 
        className="ui secondary button"
        onClick={() => {
          props.clickHandler(props.data)
        }}>
        Fetch a new character
      </button>
    )
  }
}

export default Button