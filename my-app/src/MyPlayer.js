import React from 'react';
import './App.css';

const MyPlayer = (props) => {  
    return (   
        <div className="MyPlayer" onClick={() => props.click(props.line) }>
            <div className="MyPlayer-title">{props.line} </div>
            <div>{props.name}</div>
        </div>
    );    
}

export default MyPlayer;
