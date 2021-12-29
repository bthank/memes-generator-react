import React from 'react';

function NewMemeImage(props) {
    return (
      <div id="meme--image-div">
        <img id="meme--image" src={props.url} alt="Meme image"/>
      </div>  
    );
}

export default NewMemeImage;