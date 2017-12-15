import React, { Component } from 'react';
import './App.css';
import Players from './Players';
import MyTeam from './MyTeam';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Create your own team</h1>
        </header>
        <div className="App-intro">
          <MyTeam />
          <Players line='Top'/>
        </div>
      </div>
    );
  }
}

export default App;
