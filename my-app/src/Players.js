import React, { Component } from 'react';
import './App.css';
import Player from './Player';

class Players extends Component {
  state = {
    players:[
      {name : 'Teste', nickname:'nick', lastname:'test', age: 20, cost: 34.52, teamName:'Red Can', photo:'http://info.mzalendo.com/media_root/images/7369F915-D866-E211-A3B9-00505687000D-2013-03-01T17-10-19_1.jpg'},
      {name : 'Teste1', nickname:'murirish', lastname:'test1', age: 20, cost: 45.42, teamName:'Red Can', photo:'http://info.mzalendo.com/media_root/images/7369F915-D866-E211-A3B9-00505687000D-2013-03-01T17-10-19_1.jpg'}
    ]
  }
  render() {
    return (       
      <div className='Players'>
        <div className='Players-title'>Pick your '{this.props.line}' player</div>
        <div className='Players-list'>          
          <Player {...this.state.players[0]} />
          <Player {...this.state.players[1]} />         
        </div>
      </div>
    );
  }
}

export default Players;
