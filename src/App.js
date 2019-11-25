import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './mysass.scss'
import Select from 'react-select'
import Search from "./components/Search"

const types = [
  { value: 'normal', label: 'Normal' },
  { value: 'grass', label: 'Grass' },
  { value: 'fire', label: 'Fire' },
];

const colors = [
  { value: 'pink', label: 'Pink' },
  { value: 'green', label: 'Green' },
  { value: 'red', label: 'Red' },
];

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Pokémon Team Generator</h1>
        </header>
        <div className="form-container">
            <h2 className="category">Type</h2>
            <Select className="selector" value="chocolate" options={types} />
            <h2 className="category">Second Type</h2>
            <Select className="selector" value="chocolate" options={types} />
            <h2 className="category">Color</h2>
            <Select className="selector" value="chocolate" options={colors} />
            <button className="form">Form Team!</button>
        </div>

    </div>
  );
}

export default App;
