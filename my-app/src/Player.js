import React from 'react';
import './App.css';

const Player = (props) => {  
return (   
    <div className="Player" onClick={() => props.click(props) }>
        <div className="Player-photo">
            <img src={props.photo} alt={props.name} />
        </div>
        <div className="Player-info">
            <span className="Player-name">{props.name} "{props.nickname}" {props.lastname}</span>
            <table>
                <tbody>
                    <tr>
                        <td>Age:</td><td>{props.age}</td>
                        <td>Team:</td><td>{props.teamName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="Player-cost">                
            {props.cost}                
        </div>
    </div>
    );
}

export default Player;
