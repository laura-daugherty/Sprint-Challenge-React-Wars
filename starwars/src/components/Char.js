import React from 'react'

const Char = props => {
  if (!props.character) {
    return (
      <div 
        className='ui segment'
        style={ {  
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          color: "goldenrod",
          maxWidth: "700px",
          height: "200px",
        }}
    >
      <h2 
        className='ui heading'
        style={ { 
          fontFamily: "'Geostar Fill', cursive",
          textShadow: "1px 1px 1px #fff"
        }}>
          Press Button Above to Fetch Your First Character
      </h2>
    </div>
    )
  } else {
    return (
      <div className='ui segment'
        style={ {  
          backgroundColor: "black",
          color: "goldenrod",
          width: "700px",
        }}
      >
        <h2 className='charName'
          style={ {
            fontFamily: "'Geostar Fill', cursive",
            textShadow: "1px 1px 1px #fff"
          }}>
            {props.character.name}
        </h2>
        <h3>Gender: {props.character.gender}</h3>
        <h3>Height: {props.character.height}</h3>
        <h3>Birth Year: {props.character.birth_year}</h3>
      </div>
    );
  };
};

export default Char;
