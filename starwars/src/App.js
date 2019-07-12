import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import CharList from './components/CharList.js'

import "semantic-ui-css/semantic.min.css";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     starwarsChars: []
  //   };
  // }

  // componentDidMount() {
  //   this.getCharacters('https://swapi.co/api/people/');
  // }

  // getCharacters = URL => {
  //   // feel free to research what this code is doing.
  //   // At a high level we are calling an API to fetch some starwars data from the open web.
  //   // We then take that data and resolve it our state.
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ starwarsChars: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };

  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useEffect fetching Data")
    axios
      .get("https://swapi.co/api/people/")
      .then(result => setData(result.data.results))
      .catch(err => setError("THERES AN ERROR!"));
  }, [] );

  console.log({data})
  
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
      <div className='App'>
        <h1 className='Header'>React Wars</h1>
        <CharList data={data} />
      </div>
    );
  }
}

export default App;
