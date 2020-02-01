import React from 'react';


const Loader = () => {
    return (
        <div className="loader">
            <img className="animate-flicker" src={require(`../images/pokeball.png`)} />

            <p>Loading...</p>
        </div>
    )
}

export default Loader;
