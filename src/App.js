import React from 'react';
import logo from './logo.svg';
import TextInput from './TextInput.js';
import {Grid} from '@material-ui/core';
import './App.css';

function App() {
  let gridItems = {
    0: {size: 2, label: "A"},
    1: {size: 2, label: "B"},
    2: {size: 2, label: "C"},
    3: {size: 3, label: "D"},
    4: {size: 3, label: "E"},
    5: {size: 3, label: "F"},

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextInput promptText="Name?"/>
        <TextInput promptText="Hometown?"/>
        <Grid container justify="center">
          {Object.keys(gridItems).map((rowKey) => {
            return(
              <Grid item  spacing={6} key={rowKey} xs={gridItems[rowKey].size}>
                {gridItems[rowKey].label}
              </Grid>
            );
          })}
        </Grid>

      </header>
    </div>
  );
}

export default App;
