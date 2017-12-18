import React, { Component } from 'react';
import './App.css';
import Player from './Player';

const Players = (props) => {  
    return (       
      <div className='Players'>
        <div className='Players-title'>Pick your '{props.line}' player</div>
        <div className='Players-list'>          
          <Player {...props.players[0]} />
          <Player {...props.players[1]} />         
        </div>
      </div>
    );
}

export default Players;
