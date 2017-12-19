import React, { Component } from 'react';
import './App.css';
import Players from './Players';
import MyTeam from './MyTeam';

class App extends Component {
  state = {
    players:[
      {key:1, name : 'Marcio', line:'Top', nickname:'nick', lastname:'test', age: 20, cost: 34.52, teamName:'Red Can', photo:'http://info.mzalendo.com/media_root/images/7369F915-D866-E211-A3B9-00505687000D-2013-03-01T17-10-19_1.jpg'},
      {key:2, name : 'Teste1', line:'Mid', nickname:'murirish', lastname:'test1', age: 20, cost: 45.42, teamName:'Red Can', photo:'http://info.mzalendo.com/media_root/images/7369F915-D866-E211-A3B9-00505687000D-2013-03-01T17-10-19_1.jpg'}
    ],
    myTeam:{
      myPlayers:[
      {key :1, name : 'Teste', line:'Top'}, {key :2, name : 'Teste1'}        
      ],
      myBalance: 100,
      name: "My Team"
    },
    line:'Top'
  };
  pickLine = (nline) =>{
    this.setState({
      line:nline
    })
  }
  pickPlayer = (player) =>{
    this.setState({
      myTeam:{myPlayers:[player]}
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Create your own team</h1>
        </header>
        <div className="App-intro">
          <MyTeam click={this.pickLine}  team={this.state.myTeam}/>
          <Players click={this.pickPlayer} players={this.state.players} line={this.state.line}/>
        </div>
      </div>
    );
  }
}

export default App;
