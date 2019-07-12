import React from 'react'

const Char = props => {
  // const { char } = props
  console.log("returning Char")
  if (!props.character) {
    return (
      <div className='char'
        style={ {  
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          color: "goldenrod",
          width: "700px",
          height: "200px",
          margin: "20px",
          borderRadius: "10px"
        }}
    >
      <h2 
        className='charName'
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
      <div className='char'
        style={ {  backgroundColor: "black",
          color: "goldenrod",
          width: "700px",
          margin: "20px",
          borderRadius: "10px"
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
