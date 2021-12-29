import React from "react";
import Header from './components/Header';
import MemeTextInputForm from './components/MemeTextInputForm';
import NewMemeImage from './components/NewMemeImage';
import memesData from './memesData';


/**
 * Challenge: Build the Header component
 */
export default function App() {

    let url;
    const [imgUrl, setImgUrl] = React.useState('');
    function handleClick(event) {
        console.log('In handleClick: 1   event=' + event);
        event.preventDefault();
        console.log('In handleClick: 2   memesData url=' + memesData.data.memes[0].url);
        
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log('In handleClick: 3   memesData url=' + memesData.data.memes[randomNumber].url);
        url = memesArray[randomNumber].url;
        setImgUrl(url);
        console.log('In handleClick: 4   memesData url=' + url);

    }
    
    return (
        <div className="container">
            <Header url={imgUrl} />
            <MemeTextInputForm url={imgUrl} handleClick={handleClick} />
            <NewMemeImage url={imgUrl} />
        </div>
    );
}
