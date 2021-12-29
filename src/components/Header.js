import React from 'react';

function Header(props) {

    const {url} = props;
    return (
        <div className="header--banner">
            <div className="image--and--title">
                <img src={url} alt="cartoon"/>
                <h2>Meme Generator</h2>
            </div>
            <div>
                <p className="react-proj-title">React Course - Project 3</p>
            </div>
        </div>
    );
    
};

export default Header;