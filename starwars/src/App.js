import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';

import CharList from './components/CharList.js'
import "semantic-ui-css/semantic.min.css";
import background from "./sw-bg.jpg"


function App() {

  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useEffect fetching Data")
    axios
      .get("https://swapi.co/api/people/")
      .then(result => setData(result.data.results))
      .catch(err => setError("THERES AN ERROR!"));
  }, [] );

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
          margin: "0",
          padding: "0",
          fontFamily:"Orbitron, sans-serif",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover"
        } }
      >
        <h1 className='Header'>React Wars</h1>
        <CharList data={data} />
      </div>
    );
  }
}

export default App;
