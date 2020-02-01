import React from 'react';
import '../mysass.scss';

const AttributeBack = ({setShowTeam, setClickedPokemon}) => {
    return (
        <button className="attribute-back" onClick={()=>{setShowTeam(true);setClickedPokemon(false)}}>
            {" < Back to Team"}
        </button>
    )
};

export default AttributeBack;
