import React from 'react';
import '../mysass.scss';
import Colors from '../Colors.json'
import AttributeBack from './AttributeBack'




const Attributes = ({pokeAttributes, teamArray, clickedPokemon, setShowTeam, setClickedPokemon}) => {
    //
    // var colors = {
    //     'normal':'grey',
    //     'fire': 'red'
    // }

    const pokeAttribute = pokeAttributes.find(pokemon => pokemon.name === clickedPokemon)
    const teamPoke = teamArray.find(pokemon => pokemon.name === clickedPokemon.toLowerCase())

    if (pokeAttribute.gender != null) {
        var gender = (pokeAttribute.gender === 'F') ? '♀' : '♂'
    } else {
        gender = ''
    }

    return (
        <div className="attributes" key='hello'>

            <div className="column one">
                <div className="pokeName first">{pokeAttribute.name}</div>
                <div className="gender box"> {gender}</div>
                {
                    teamPoke.types.map(type => (
                        <img key={type.type.name} className="type-icon box" alt="type" src={require(`../images/${type.type.name}.png`)} />
                    ))
                }

                <img alt={teamPoke.name} className="member-sprite first" src={teamPoke.sprites.front_default} />
                <p className="level first" ><strong>Level</strong>: {pokeAttribute.level}</p>
                <p className="nature first" ><strong>Nature</strong>: {pokeAttribute.nature.name[0].toUpperCase() +pokeAttribute.nature.name.substring(1) }</p>
                <p className="characteristic first" ><strong>{pokeAttribute.characteristic}</strong></p>
                <AttributeBack setShowTeam={setShowTeam} setClickedPokemon={setClickedPokemon}/>
            </div>



            <div className="column three">
                <div className="hold-moves box">
                    
                    {

                        pokeAttribute.moves.map((move, index) => (
                            <div style={{backgroundColor: Colors[pokeAttribute.moves[index]['type']]}} key={pokeAttribute.moves[index]['name']} className="move">
                                {pokeAttribute.moves[index]['name'][0].toUpperCase() + pokeAttribute.moves[index]['name'].substring(1)}
                            </div>
                        ))
                    }
                </div>
                <div className="ability box">
                    <div className="ability-name">{pokeAttribute.ability.name[0].toUpperCase() + pokeAttribute.ability.name.substring(1) }</div>
                    <div className="ability-description">{pokeAttribute.abilityEffect}</div>

                </div>
            </div>

        </div>
    );
}

export default Attributes;
