import React, { Component } from 'react';
import './App.css';
import Players from './Players';
import MyTeam from './MyTeam';

class App extends Component {
  state = {
    players:[
      {name : 'Teste', nickname:'nick', lastname:'test', age: 20, cost: 34.52, teamName:'Red Can', photo:'http://info.mzalendo.com/media_root/images/7369F915-D866-E211-A3B9-00505687000D-2013-03-01T17-10-19_1.jpg'},
      {name : 'Teste1', nickname:'murirish', lastname:'test1', age: 20, cost: 45.42, teamName:'Red Can', photo:'http://info.mzalendo.com/media_root/images/7369F915-D866-E211-A3B9-00505687000D-2013-03-01T17-10-19_1.jpg'}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Create your own team</h1>
        </header>
        <div className="App-intro">
          <MyTeam />
          <Players players={this.state.players}/>
        </div>
      </div>
    );
  }
}

export default App;
