import React, {useEffect, useState} from 'react';
// import './App.css';
import './mysass.scss';
import ChooseType from './components/ChooseType';
import Team from './components/Team';
import Attributes from './components/Attributes.js';
import Loader from './components/Loader.js';



function App() {

    const [type, setType] = useState('normal')
    const [team, setTeam] = useState([])
    // const [teamData, setTeamData] = useState([])
    const [selected, setSelected] = useState(false)
    const [pokeAttribute, setPokeAttribute] = useState([])
    const [clickedPokemon, setClickedPokemon] = useState('')
    const [showTeam, setShowTeam] = useState(true)

    const fetchPokemon = async (e) => {
        e.preventDefault()
        const response  = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        const data = await response.json()
        generateTeam(data.pokemon)
        setSelected(!(selected))

    }

    const generateTeam = async (pokemonByType) => {
        setTeam([])
        setPokeAttribute([])
        const teamArray = []
        while (teamArray.length !== 6) {

            var randomPokemonSprite= null;
            while (randomPokemonSprite == null) {
                var randomPokemon = pokemonByType[Math.floor(Math.random() * (pokemonByType.length))]

                const randomPokemonResponse = await fetch(randomPokemon.pokemon.url)
                const randomPokemonData = await randomPokemonResponse.json()

                randomPokemonSprite = randomPokemonData.sprites.front_default

                if (randomPokemonSprite != null) {

                    if (!(checkDuplicate(teamArray, randomPokemonData))) {
                        teamArray.push(randomPokemonData);
                        createAttribute(randomPokemonData)
                    }

                }

            }

        }
        setTeam(teamArray)
    }

    const checkDuplicate = (teamArray, pokeToCheck) => {
        var i;
        for (i=0; i < teamArray.length; i++) {
            if (JSON.stringify(teamArray[i]) === JSON.stringify(pokeToCheck)) {
                return true;
            }
        }
        return false;
    }

    const checkObjPropertyDuplicate = (moveArray, nameToCheck) => {
        var i;
        for (i=0; i < moveArray.length; i++) {
            if (JSON.stringify(moveArray[i]['name']) === JSON.stringify(nameToCheck)) {
                return true;
            }
        }
        return false;
    }

    const createAttribute = async (randomPokemonData) => {
        var pokeAttributes = {};
        pokeAttributes['name'] = randomPokemonData['name'][0].toUpperCase() + randomPokemonData['name'].substring(1)

        const pokeSpecies = await fetch(`${randomPokemonData['species']['url']}`)
        const pokeSpeciesData = await pokeSpecies.json()

        if (pokeSpeciesData['gender_rate'] === 8) {
            pokeAttributes['gender'] = 'F'
        } else if (pokeSpeciesData['gender_rate'] === 0) {
            pokeAttributes['gender'] = 'M'
        } else if (pokeSpeciesData['gender_rate'] === -1 ) {
            pokeAttributes['gender'] = null
        } else {
            var genderRate = pokeSpeciesData['gender_rate'] / 8
            var gender = Math.random() >= genderRate;

            if (gender) {
                pokeAttributes['gender'] = 'M';
            } else {
                pokeAttributes['gender'] = 'F';
            }
        }

        pokeAttributes['ability'] = randomPokemonData['abilities'][Math.floor(Math.random() * (randomPokemonData['abilities'].length))]['ability']

        const abilityDescription = await fetch(pokeAttributes['ability']['url'])
        const abilityDescriptionData = await abilityDescription.json()

        var ability = abilityDescriptionData.flavor_text_entries.find(lang => lang.language.name === 'en');
        pokeAttributes['abilityEffect'] = ability['flavor_text']


        const natures = await fetch(`https://pokeapi.co/api/v2/nature/`)
        const naturesData = await natures.json()

        pokeAttributes['nature'] = naturesData['results'][Math.floor(Math.random() * (naturesData['results'].length))]

        var moves = [];

        if (randomPokemonData['moves'].length <= 4) {
            for (var i =0 ; i < randomPokemonData['moves'].length; i++) {
                var move ={}
                move['name'] = randomPokemonData['moves'][i].move.name
                const moveInfo = await fetch(randomPokemonData['moves'][i].move.url)
                const moveInfoData = await moveInfo.json()
                move['type'] = moveInfoData['type']['name']
                moves.push(move)
            }
        } else {

            while (moves.length < 4) {

                var randomMove = randomPokemonData['moves'][Math.floor(Math.random() * (randomPokemonData['moves'].length))]
                if (!(checkObjPropertyDuplicate(moves, randomMove.move.name))) {
                    var move = {}
                    move['name'] = randomMove.move.name;

                    const moveInfo = await fetch(randomMove.move.url)
                    const moveInfoData = await moveInfo.json()

                    move['type'] = moveInfoData['type']['name']
                    moves.push(move)
                }
            }
        }

        pokeAttributes['moves'] = moves;

        pokeAttributes['level'] = Math.floor(Math.random() * (100 -65 +1)) + 65


        const characteristic = await fetch(`https://pokeapi.co/api/v2/characteristic/${Math.floor(Math.random() * (20))+1}`)
        const characteristicData = await characteristic.json()

        var pokeCharacteristic = characteristicData.descriptions.find(lang => lang.language.name === 'en')

        pokeAttributes['characteristic'] = pokeCharacteristic['description']

        setPokeAttribute(pokeAttribute => [...pokeAttribute, pokeAttributes])

    }

    const setSearchType = e => {

        setType(e.target.value)
    }



    if (!(selected)) {
        var comp = <ChooseType fetchPokemon={fetchPokemon} setSearchType={setSearchType} />
    }
    else if (!(pokeAttribute.length == 6)) {
        comp = <Loader />
    } else if ( ((showTeam) && (pokeAttribute.length == 6)) ){
        comp = <Team teamArray={team} setClickedPokemon={setClickedPokemon} type={type} setShowTeam={setShowTeam} setSelected={setSelected} setType={setType} />
    } else if (!(showTeam)) {
        comp = <Attributes pokeAttributes = {pokeAttribute} teamArray = {team}  clickedPokemon = {clickedPokemon} setShowTeam={setShowTeam} setClickedPokemon={setClickedPokemon}/>
    }

  return (
    <div className="App">
        <header className="App-header">
            <link href="https://fonts.googleapis.com/css?family=Francois+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Cabin&display=swap" rel="stylesheet" />

            <h1 className="App-title">Pokémon Team Generator</h1>
        </header>
        <div className="form-container">
            {comp}
        </div>
    </div>
  );
}

export default App;
