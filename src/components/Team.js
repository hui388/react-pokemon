import React from 'react';
import '../mysass.scss';
import Colors from '../Colors.json'
import TeamBack from './TeamBack'



const Team = ({teamArray, setClickedPokemon, type, setShowTeam, setSelected, setType}) => {

    return (
        <div className="hold-team">
            <div className="team-container" key='hello'>

                {teamArray.map(pokemon => (

                        <button  href="#" className="member" key={pokemon.name} style={{backgroundColor: Colors[type]}} onClick={(e) => {setClickedPokemon(e.currentTarget.value);setShowTeam(false)}} value={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)} >
                            <img alt={pokemon.name} className="sprite" src={pokemon.sprites.front_default} />
                        </button>

                ))}


            </div>
            <TeamBack setSelected={setSelected} setType={setType}/>

        </div>
    );
}

export default Team;
