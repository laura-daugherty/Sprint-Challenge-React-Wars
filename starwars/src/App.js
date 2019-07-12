import React, { useState, useEffect } from 'react';
import axios from "axios"

import './App.css';

import "semantic-ui-css/semantic.min.css";
import background from "./sw-bg.jpg"

import CharList from "./components/Char"
import Button from './components/Button'

function App() {

  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [character, setCharacter] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(result => setData(result.data.results))
      .catch(err => setError("THERES AN ERROR!"));
  }, [] );

  const changeCharacter = (data) => {
    setCharacter(data[Math.floor(Math.random() * data.length)])
  }

  if(error) {
    return (
      <h2
        className="ui red block header centered"
      >
        {error}
      </h2>
    )
  } else {
    return (
      <div 
        className='App'
        style={ {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0",
          padding: "0",
          fontFamily:"Orbitron, sans-serif",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          textAlign: "center",
        } }
      >
        <header>
          <h1 
            className='Header'
            style={ {
              color: "black",
              textShadow: "1px 1px 5px #fff",
              fontSize: "3rem",
              fontFamily: 'Geostar Fill, cursive'
            }}
          >
            React Wars
          </h1>
          <Button data={data} clickHandler={changeCharacter}/>
        </header>
        <CharList data={data} character={character} clickHandler={changeCharacter}/>
      </div>

    )
  }
}

export default App;
