import React from 'react';
import '../mysass.scss';
import Colors from '../Colors.json'

const Type = ({type}) => {

    const typeMatch = {
        "bug": "BUG",
        "dark": "DARK",
        "dragon": "DRAGON",
        "electric": "ELECTR",
        "fairy": "FAIRY",
        "fighting": "FIGHT",
        "fire": "FIRE",
        "flying": "FLYING",
        "ghost": "GHOST",
        "grass": "GRASS",
        "ground": "GROUND",
        "ice": "ICE",
        "normal": "NORMAL",
        "poison": "POISON",
        "psychic": "PSYCHIC",
        "rock": "ROCK",
        "steel": "STEEL",
        "water": "WATER"
    }

    return (
        <div style={{backgroundColor: Colors[type]}} className="type-icon">
            {typeMatch[type]}
        </div>
    )
}

export default Type;
