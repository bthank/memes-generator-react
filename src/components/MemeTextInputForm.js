import React from 'react';
import memesData from '../memesData';

function MemeTextInputForm(props) {

    const {url, handleClick } = props;
    /*
    let url;
    function handleClick(event) {
        console.log('In handleClick: 1   event=' + event);
        event.preventDefault();
        console.log('In handleClick: 2   memesData url=' + memesData.data.memes[0].url);
        
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log('In handleClick: 3   memesData url=' + memesData.data.memes[randomNumber].url);
        url = memesArray[randomNumber].url;
        console.log('In handleClick: 4   memesData url=' + url);

    }
    */
    
    return (
        <div className="meme--text--input--form">
            <form>
                <div className="form--box">
                    <div className="btn-box">
                        <input type="text" id="btn1" placeholder="Top text" />
                        <input type="text" id="btn2"  placeholder="Bottom text" />
                    </div>
                <button 
                    onClick={handleClick} 
                    id="get--meme--btn"
                >Get a new Meme image</button>
                </div>
            </form>
        </div>
    );    
}

export default MemeTextInputForm;