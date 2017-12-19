import React from 'react';
import './App.css';
import Player from './Player';

const Players = (props) => {  
  const players = props.players.filter((player)=> player.line === props.line );
    return (       
      <div className='Players'>
        <div className='Players-title'>Pick your '{props.line}' player</div>
        <div className='Players-list'>          
          {players.map((player) =>
            <Player {...player} click={props.click}/>)}    
        </div>
      </div>
    );
}

export default Players;
