import React, { Component } from 'react';
import './App.css';
import Player from './Player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Create your team</h1>
        </header>
        <div className="App-intro">
          <Player name='Teste' photo='http://info.mzalendo.com/media_root/images/7369F915-D866-E211-A3B9-00505687000D-2013-03-01T17-10-19_1.jpg' age='20' cost='100'/>
        </div>
      </div>
    );
  }
}

export default App;
