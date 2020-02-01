import React from 'react';


const ChooseType = ({fetchPokemon, setSearchType}) => {
    return (
        <div className="choose-type">
            <h2 id="pick-type">Pick a Type</h2>
            <form onSubmit={fetchPokemon} className="search-form">
                <select className="selecting" onChange={setSearchType}>
                  <option value="normal">Normal</option>
                  <option value="grass">Grass</option>
                  <option value="electric">Electric</option>
                  <option value="fire">Fire</option>
                  <option value="ice">Ice</option>
                  <option value="ground">Ground</option>
                  <option value="bug">Bug</option>
                  <option value="dark">Dark</option>
                  <option value="dragon">Dragon</option>
                  <option value="fighting">Fighting</option>
                  <option value="flying">Flying</option>
                  <option value="ghost">Ghost</option>
                  <option value="poison">Poison</option>
                  <option value="psychic">Psychic</option>
                  <option value="rock">Rock</option>
                  <option value="steel">Steel</option>
                  <option value="water">Water</option>
                  <option value="fairy">Fairy</option>



                </select>
                <button className="generate-button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default ChooseType;
